import axios from "axios";

const API_URL = "http://localhost:8080/api";

function MachinesTable({ machines, onSelectMachine, onMachineDeleted }) {
  async function handleDelete(event, machineId) {
    event.stopPropagation();

    const confirmed = window.confirm(
      "Are you sure you want to delete this machine? This will also delete its sensors, readings and alerts."
    );

    if (!confirmed) return;

    await axios.delete(`${API_URL}/machines/${machineId}`);

    onMachineDeleted();
  }

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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {machines.map((machine) => (
              <tr
                key={machine.id}
                className="clickable-row"
                onClick={() => onSelectMachine(machine)}
              >
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
                <td>
                  <button
                    className="delete-button"
                    onClick={(event) => handleDelete(event, machine.id)}
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

export default MachinesTable;