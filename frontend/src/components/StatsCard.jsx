function StatsCard({ label, value, helper, danger }) {
  return (
    <article className={`stat-card ${danger ? "danger" : ""}`}>
      <div>
        <span>{label}</span>
        <h2>{value}</h2>
      </div>
      <p>{helper}</p>
    </article>
  );
}

export default StatsCard;