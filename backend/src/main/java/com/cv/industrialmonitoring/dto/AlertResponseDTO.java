package com.cv.industrialmonitoring.dto;

import java.time.LocalDateTime;

public class AlertResponseDTO {

    private Long id;
    private String severity;
    private String message;
    private LocalDateTime timestamp;
    private boolean resolved;
    private String sensorName;
    private String machineName;

    public AlertResponseDTO(
            Long id,
            String severity,
            String message,
            LocalDateTime timestamp,
            boolean resolved,
            String sensorName,
            String machineName
    ) {
        this.id = id;
        this.severity = severity;
        this.message = message;
        this.timestamp = timestamp;
        this.resolved = resolved;
        this.sensorName = sensorName;
        this.machineName = machineName;
    }

    public Long getId() {
        return id;
    }

    public String getSeverity() {
        return severity;
    }

    public String getMessage() {
        return message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public boolean isResolved() {
        return resolved;
    }

    public String getSensorName() {
        return sensorName;
    }

    public String getMachineName() {
        return machineName;
    }
}