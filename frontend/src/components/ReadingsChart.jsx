import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ReadingsChart({ readings }) {
  const latestReadings = readings.slice(-25).map((reading) => ({
    ...reading,
    time: new Date(reading.timestamp).toLocaleTimeString(),
  }));

  return (
    <section className="panel chart-panel">
      <div className="panel-header">
        <div>
          <h2>Live Sensor Readings</h2>
          <p>Latest telemetry values from active sensors</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={latestReadings}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ReadingsChart;