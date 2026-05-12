import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/dashboard")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard stats:", error);
      });
  }, []);

  return (
    <main className="app">
      <h1>Industrial Monitoring Platform</h1>

      {!stats ? (
        <p>Loading dashboard data...</p>
      ) : (
        <section className="stats-grid">
          <div className="stat-card">
            <h2>{stats.totalMachines}</h2>
            <p>Total Machines</p>
          </div>

          <div className="stat-card">
            <h2>{stats.activeSensors}</h2>
            <p>Active Sensors</p>
          </div>

          <div className="stat-card">
            <h2>{stats.totalReadings}</h2>
            <p>Total Readings</p>
          </div>

          <div className="stat-card">
            <h2>{stats.offlineMachines}</h2>
            <p>Offline Machines</p>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;