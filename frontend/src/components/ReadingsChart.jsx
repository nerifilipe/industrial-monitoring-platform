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
  const latestReadings = readings.slice(-20).map((reading) => ({
    ...reading,
    time: new Date(reading.timestamp).toLocaleTimeString(),
  }));

  return (
    <section className="chart-section">
      <h2>Latest Sensor Readings</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={latestReadings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ReadingsChart;