function MachineDetail({ machine, sensors, onBack }) {
  const machineSensors = sensors.filter(
    (sensor) => sensor.machine?.id === machine.id
  );

  return (
    <div className="page-stack">
      <section className="panel detail-hero">
        <button className="back-button" onClick={onBack}>
          ← Back to Machines
        </button>

        <div className="detail-header">
          <div>
            <p className="eyebrow">Machine Detail</p>
            <h2>{machine.name}</h2>
            <p>{machine.location}</p>
          </div>

          <span className={`status ${machine.status.toLowerCase()}`}>
            {machine.status}
          </span>
        </div>

        <div className="detail-grid">
          <div>
            <span>Type</span>
            <strong>{machine.type}</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>{machine.location}</strong>
          </div>

          <div>
            <span>Linked Sensors</span>
            <strong>{machineSensors.length}</strong>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Linked Sensors</h2>
            <p>Sensors currently assigned to this machine</p>
          </div>
        </div>

        {machineSensors.length === 0 ? (
          <p className="empty-alerts">No sensors linked to this machine.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sensor</th>
                  <th>Type</th>
                  <th>Unit</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {machineSensors.map((sensor) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default MachineDetail;