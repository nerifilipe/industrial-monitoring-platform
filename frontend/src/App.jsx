import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
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

  const latestReadings = readings.slice(-20).map((reading) => ({
    ...reading,
    time: new Date(reading.timestamp).toLocaleTimeString(),
  }));

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

      <section className="chart-section">
        <h2>Latest Sensor Readings</h2>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={latestReadings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

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