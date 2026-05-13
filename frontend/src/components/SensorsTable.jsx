import axios from "axios";

const API_URL = "http://localhost:8080/api";

function SensorsTable({ sensors, onSensorDeleted }) {
  async function handleDelete(sensorId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this sensor? This will also delete its readings and alerts."
    );

    if (!confirmed) return;

    await axios.delete(`${API_URL}/sensors/${sensorId}`);

    onSensorDeleted();
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Sensor Inventory</h2>
          <p>Registered sensors linked to industrial machines</p>
        </div>
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
            {sensors.map((sensor) => (
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
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(sensor.id)}
                  >
                    Delete
                  </button>
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