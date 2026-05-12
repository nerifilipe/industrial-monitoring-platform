import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

function CreateMachineForm({ onMachineCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "ONLINE",
    location: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      await axios.post(`${API_URL}/machines`, formData);

      setFormData({
        name: "",
        type: "",
        status: "ONLINE",
        location: "",
      });

      onMachineCreated();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create machine");
    }
  }

  return (
    <section className="panel form-panel">
      <div className="panel-header">
        <div>
          <h2>Add Machine</h2>
          <p>Create a new monitored industrial asset</p>
        </div>
      </div>

      <form className="machine-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Machine name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Type e.g. CONVEYOR"
          value={formData.type}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="ONLINE">ONLINE</option>
          <option value="WARNING">WARNING</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Create Machine</button>
      </form>
    </section>
  );
}

export default CreateMachineForm;