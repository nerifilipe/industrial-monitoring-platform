function AlertsPanel({ alerts }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Active Alerts</h2>
          <p>Real-time industrial warnings</p>
        </div>
      </div>

      {alerts.length === 0 ? (
        <div className="empty-alerts">
          No active alerts
        </div>
      ) : (
        <div className="alerts-list">
          {alerts.map((alert) => (
            <div className="alert-item" key={alert.id}>
              <div className={`alert-badge ${alert.severity.toLowerCase()}`}>
                {alert.severity}
              </div>

              <div className="alert-content">
                <strong>{alert.message}</strong>

                <span>
                  {alert.machineName} • {alert.sensorName}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AlertsPanel;