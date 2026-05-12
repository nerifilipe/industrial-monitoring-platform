package com.cv.industrialmonitoring.dto;

import java.time.LocalDateTime;

public class ReadingResponseDTO {

    private Long id;
    private Double value;
    private LocalDateTime timestamp;
    private String sensorName;

    public ReadingResponseDTO(
            Long id,
            Double value,
            LocalDateTime timestamp,
            String sensorName
    ) {
        this.id = id;
        this.value = value;
        this.timestamp = timestamp;
        this.sensorName = sensorName;
    }

    public Long getId() {
        return id;
    }

    public Double getValue() {
        return value;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public String getSensorName() {
        return sensorName;
    }
}