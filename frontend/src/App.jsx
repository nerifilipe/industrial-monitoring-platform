import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [stats, setStats] = useState(null);
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/dashboard")
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard stats:", error);
      });

    axios
      .get("http://localhost:8080/api/machines")
      .then((response) => {
        setMachines(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch machines:", error);
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

      <section className="table-section">
        <h2>Machines</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {machines.map((machine) => (
              <tr key={machine.id}>
                <td>{machine.name}</td>
                <td>{machine.type}</td>
                <td>
                  <span className={`status ${machine.status.toLowerCase()}`}>
                    {machine.status}
                  </span>
                </td>
                <td>{machine.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;