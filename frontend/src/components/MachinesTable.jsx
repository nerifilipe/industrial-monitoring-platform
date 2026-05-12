function MachinesTable({ machines }) {
  return (
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
  );
}

export default MachinesTable;