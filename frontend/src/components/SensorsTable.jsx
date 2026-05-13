import { useMemo, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

function SensorsTable({
  sensors,
  onSensorDeleted,
  onEditSensor,
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  async function handleDelete(sensorId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this sensor?"
    );

    if (!confirmed) return;

    await axios.delete(`${API_URL}/sensors/${sensorId}`);

    onSensorDeleted();
  }

  const filteredSensors = useMemo(() => {
    return sensors.filter((sensor) => {
      const matchesSearch =
        sensor.name.toLowerCase().includes(search.toLowerCase()) ||
        sensor.machine?.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || sensor.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [sensors, search, statusFilter]);

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Sensor Inventory</h2>
          <p>Registered sensors linked to industrial machines</p>
        </div>
      </div>

      <div className="table-controls">
        <input
          type="text"
          placeholder="Search sensor or machine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Type</th>
              <th>Unit</th>
              <th>Status</th>
              <th>Machine</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredSensors.map((sensor) => (
              <tr key={sensor.id}>
                <td>
                  <strong>{sensor.name}</strong>
                </td>

                <td>{sensor.type}</td>
                <td>{sensor.unit}</td>

                <td>
                  <span className={`status ${sensor.status.toLowerCase()}`}>
                    {sensor.status}
                  </span>
                </td>

                <td>{sensor.machine?.name}</td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-button"
                      onClick={() => onEditSensor(sensor)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(sensor.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SensorsTable;