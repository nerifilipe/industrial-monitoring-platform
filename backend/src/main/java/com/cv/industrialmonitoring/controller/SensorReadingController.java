package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.model.SensorReading;
import com.cv.industrialmonitoring.service.SensorReadingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SensorReadingController {

    private final SensorReadingService sensorReadingService;

    public SensorReadingController(SensorReadingService sensorReadingService) {
        this.sensorReadingService = sensorReadingService;
    }

    @GetMapping("/api/readings")
    public List<SensorReading> getAllReadings() {
        return sensorReadingService.getAllReadings();
    }

    @GetMapping("/api/sensors/{sensorId}/readings")
    public List<SensorReading> getReadingsBySensorId(@PathVariable Long sensorId) {
        return sensorReadingService.getReadingsBySensorId(sensorId);
    }
}