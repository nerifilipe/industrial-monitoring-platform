import { useMemo, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function MachinesTable({
  machines,
  onSelectMachine,
  onMachineDeleted,
  onEditMachine,
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  async function handleDelete(event, machineId) {
    event.stopPropagation();

    const confirmed = window.confirm(
      "Are you sure you want to delete this machine?"
    );

    if (!confirmed) return;

    await axios.delete(`${API_URL}/machines/${machineId}`);

    onMachineDeleted();
  }

  function handleEdit(event, machine) {
    event.stopPropagation();
    onEditMachine(machine);
  }

  const filteredMachines = useMemo(() => {
    return machines.filter((machine) => {
      const matchesSearch =
        machine.name.toLowerCase().includes(search.toLowerCase()) ||
        machine.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || machine.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [machines, search, statusFilter]);

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Machine Fleet</h2>
          <p>Current status of registered industrial machines</p>
        </div>
      </div>

      <div className="table-controls">
        <input
          type="text"
          placeholder="Search machine or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Status</option>
          <option value="ONLINE">ONLINE</option>
          <option value="WARNING">WARNING</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>
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
            {filteredMachines.map((machine) => (
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
                  <div className="action-buttons">
                    <button
                      className="edit-button"
                      onClick={(event) => handleEdit(event, machine)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={(event) => handleDelete(event, machine.id)}
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

export default MachinesTable;