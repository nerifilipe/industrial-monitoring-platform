package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.dto.AlertResponseDTO;
import com.cv.industrialmonitoring.model.Alert;
import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.repository.AlertRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AlertService {

    private final AlertRepository alertRepository;

    public AlertService(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public List<AlertResponseDTO> getActiveAlerts() {
        return alertRepository.findByResolvedFalse()
                .stream()
                .map(alert -> new AlertResponseDTO(
                        alert.getId(),
                        alert.getSeverity(),
                        alert.getMessage(),
                        alert.getTimestamp(),
                        alert.isResolved(),
                        alert.getSensor().getName(),
                        alert.getSensor().getMachine().getName()
                ))
                .toList();
    }

    public void evaluateReading(Sensor sensor, double value) {
        String type = sensor.getType();

        if ("TEMPERATURE".equals(type) && value > 85) {
            createAlert("WARNING", "Temperature exceeded safe threshold", sensor);
        }

        if ("PRESSURE".equals(type) && value > 5) {
            createAlert("WARNING", "Pressure exceeded safe threshold", sensor);
        }

        if ("VIBRATION".equals(type) && value > 2.5) {
            createAlert("WARNING", "Vibration exceeded safe threshold", sensor);
        }
    }

    private void createAlert(String severity, String message, Sensor sensor) {
        Alert alert = new Alert(
                severity,
                message,
                LocalDateTime.now(),
                false,
                sensor
        );

        alertRepository.save(alert);
    }
}