package com.cv.industrialmonitoring.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Alert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String severity;
    private String message;
    private LocalDateTime timestamp;
    private boolean resolved;

    @ManyToOne
    @JoinColumn(name = "sensor_id")
    private Sensor sensor;

    public Alert() {
    }

    public Alert(String severity, String message, LocalDateTime timestamp, boolean resolved, Sensor sensor) {
        this.severity = severity;
        this.message = message;
        this.timestamp = timestamp;
        this.resolved = resolved;
        this.sensor = sensor;
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

    public Sensor getSensor() {
        return sensor;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public void setResolved(boolean resolved) {
        this.resolved = resolved;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
}