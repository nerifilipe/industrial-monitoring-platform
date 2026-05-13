import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function EditMachineModal({
  machine,
  onClose,
  onMachineUpdated,
}) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "",
    location: "",
  });

  useEffect(() => {
    if (machine) {
      setFormData({
        name: machine.name,
        type: machine.type,
        status: machine.status,
        location: machine.location,
      });
    }
  }, [machine]);

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.put(
      `${API_URL}/machines/${machine.id}`,
      formData
    );

    onMachineUpdated();
    onClose();
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="panel-header">
          <div>
            <h2>Edit Machine</h2>
            <p>Update machine information</p>
          </div>
        </div>

        <form className="machine-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Machine Name"
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

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="ONLINE">ONLINE</option>
            <option value="WARNING">WARNING</option>
            <option value="OFFLINE">OFFLINE</option>
          </select>

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

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

export default EditMachineModal;