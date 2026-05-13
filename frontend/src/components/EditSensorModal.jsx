import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function EditSensorModal({
  sensor,
  machines,
  onClose,
  onSensorUpdated,
}) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    unit: "",
    status: "ACTIVE",
    machineId: "",
  });

  useEffect(() => {
    if (sensor) {
      setFormData({
        name: sensor.name,
        type: sensor.type,
        unit: sensor.unit,
        status: sensor.status,
        machineId: sensor.machine?.id || "",
      });
    }
  }, [sensor]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.put(`${API_URL}/sensors/${sensor.id}`, {
      name: formData.name,
      type: formData.type,
      unit: formData.unit,
      status: formData.status,
      machine: {
        id: Number(formData.machineId),
      },
    });

    onSensorUpdated();
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="panel-header">
          <div>
            <h2>Edit Sensor</h2>
            <p>Update sensor information</p>
          </div>
        </div>

        <form className="machine-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Sensor name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <input
            name="unit"
            placeholder="Unit"
            value={formData.unit}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>

          <select
            name="machineId"
            value={formData.machineId}
            onChange={handleChange}
            required
          >
            <option value="">Select Machine</option>
            {machines.map((machine) => (
              <option key={machine.id} value={machine.id}>
                {machine.name}
              </option>
            ))}
          </select>

          <div className="modal-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSensorModal;