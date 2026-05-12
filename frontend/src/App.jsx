import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "./components/StatsCard";
import ReadingsChart from "./components/ReadingsChart";
import MachinesTable from "./components/MachinesTable";
import "./App.css";

function App() {
  const [stats, setStats] = useState(null);
  const [machines, setMachines] = useState([]);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetchDashboardData();

    const interval = setInterval(() => {
      fetchDashboardData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function fetchDashboardData() {
    axios.get("http://localhost:8080/api/dashboard").then((response) => {
      setStats(response.data);
    });

    axios.get("http://localhost:8080/api/machines").then((response) => {
      setMachines(response.data);
    });

    axios.get("http://localhost:8080/api/readings").then((response) => {
      setReadings(response.data);
    });
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>IMP</h2>

        <nav>
          <span>Dashboard</span>
          <span>Machines</span>
          <span>Sensors</span>
          <span>Readings</span>
        </nav>
      </aside>

      <main className="app">
        <header className="topbar">
          <div>
            <h1>Industrial Monitoring Platform</h1>
            <p>Real-time industrial telemetry dashboard</p>
          </div>

          <span className="live-badge">LIVE</span>
        </header>

        {!stats ? (
          <p>Loading dashboard data...</p>
        ) : (
          <section className="stats-grid">
            <StatsCard label="Total Machines" value={stats.totalMachines} />
            <StatsCard label="Active Sensors" value={stats.activeSensors} />
            <StatsCard label="Total Readings" value={stats.totalReadings} />
            <StatsCard
              label="Offline Machines"
              value={stats.offlineMachines}
              danger
            />
          </section>
        )}

        <ReadingsChart readings={readings} />

        <MachinesTable machines={machines} />
      </main>
    </div>
  );
}

export default App;