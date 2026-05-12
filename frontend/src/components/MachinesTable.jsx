function MachinesTable({ machines }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Machine Fleet</h2>
          <p>Current status of registered industrial machines</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Machine</th>
              <th>Type</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {machines.map((machine) => (
              <tr key={machine.id}>
                <td>
                  <strong>{machine.name}</strong>
                </td>
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
      </div>
    </section>
  );
}

export default MachinesTable;