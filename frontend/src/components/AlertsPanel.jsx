import axios from "axios";

const API_URL = "http://localhost:8080/api";

function AlertsPanel({ alerts, onAlertResolved }) {
  const latestAlerts = alerts.slice().reverse();

  async function handleResolve(alertId) {
    await axios.put(`${API_URL}/alerts/${alertId}/resolve`);
    onAlertResolved();
  }

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

                <small>{new Date(alert.timestamp).toLocaleString()}</small>

                <button
                  className="resolve-button"
                  onClick={() => handleResolve(alert.id)}
                >
                  Resolve
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AlertsPanel;