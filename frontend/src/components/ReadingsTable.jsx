function ReadingsTable({ readings }) {
  const latestReadings = readings.slice(-30).reverse();

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Latest Readings</h2>
          <p>Most recent sensor measurements stored by the backend</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Value</th>
              <th>Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {latestReadings.map((reading) => (
              <tr key={reading.id}>
                <td>
                  <strong>{reading.sensorName}</strong>
                </td>
                <td>{reading.value.toFixed(2)}</td>
                <td>{new Date(reading.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ReadingsTable;