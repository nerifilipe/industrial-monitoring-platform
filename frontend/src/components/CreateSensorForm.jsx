import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

function CreateSensorForm({ machines, onSensorCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    unit: "",
    status: "ACTIVE",
    machineId: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/sensors`, {
        name: formData.name,
        type: formData.type,
        unit: formData.unit,
        status: formData.status,
        machine: {
          id: Number(formData.machineId),
        },
      });

      setFormData({
        name: "",
        type: "",
        unit: "",
        status: "ACTIVE",
        machineId: "",
      });

      onSensorCreated();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="panel form-panel">
      <div className="panel-header">
        <div>
          <h2>Add Sensor</h2>
          <p>Register a new industrial sensor</p>
        </div>
      </div>

      <form className="machine-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Sensor name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={handleChange}
        />

        <input
          name="unit"
          placeholder="Unit e.g. °C"
          value={formData.unit}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>

        <select
          name="machineId"
          value={formData.machineId}
          onChange={handleChange}
        >
          <option value="">Select Machine</option>

          {machines.map((machine) => (
            <option key={machine.id} value={machine.id}>
              {machine.name}
            </option>
          ))}
        </select>

        <button type="submit">Create Sensor</button>
      </form>
    </section>
  );
}

export default CreateSensorForm;