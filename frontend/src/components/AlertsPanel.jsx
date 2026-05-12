function AlertsPanel({ alerts }) {
  const latestAlerts = alerts.slice().reverse();

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Active Alerts</h2>
          <p>{alerts.length} unresolved warning events</p>
        </div>

        <span className={alerts.length > 0 ? "alert-counter active" : "alert-counter"}>
          {alerts.length}
        </span>
      </div>

      {alerts.length === 0 ? (
        <div className="empty-alerts">
          <strong>No active alerts</strong>
          <span>All monitored systems are operating within safe thresholds.</span>
        </div>
      ) : (
        <div className="alerts-list">
          {latestAlerts.map((alert) => (
            <div className="alert-item" key={alert.id}>
              <div className={`alert-badge ${alert.severity.toLowerCase()}`}>
                {alert.severity}
              </div>

              <div className="alert-content">
                <strong>{alert.message}</strong>

                <span>
                  {alert.machineName} • {alert.sensorName}
                </span>

                <small>
                  {new Date(alert.timestamp).toLocaleString()}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AlertsPanel;