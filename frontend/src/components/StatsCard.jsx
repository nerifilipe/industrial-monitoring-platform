function StatsCard({ label, value, danger }) {
  return (
    <div className={`stat-card ${danger ? "danger" : ""}`}>
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatsCard;