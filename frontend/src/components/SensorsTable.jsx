function SensorsTable({ sensors }) {
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SensorsTable;