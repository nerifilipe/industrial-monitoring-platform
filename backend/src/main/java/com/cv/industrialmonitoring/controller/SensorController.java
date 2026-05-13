package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.service.SensorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SensorController {

    private final SensorService sensorService;

    public SensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @GetMapping("/api/sensors")
    public List<Sensor> getAllSensors() {
        return sensorService.getAllSensors();
    }

    @GetMapping("/api/machines/{machineId}/sensors")
    public List<Sensor> getSensorsByMachineId(@PathVariable Long machineId) {
        return sensorService.getSensorsByMachineId(machineId);
    }

    @PostMapping("/api/sensors")
    public Sensor createSensor(@RequestBody Sensor sensor) {
        return sensorService.createSensor(sensor);
    }
    @DeleteMapping("/api/sensors/{id}")
    public void deleteSensor(@PathVariable Long id) {
        sensorService.deleteSensor(id);
    }
    @PutMapping("/api/sensors/{id}")
    public Sensor updateSensor(
            @PathVariable Long id,
            @RequestBody Sensor sensor
    ) {
        return sensorService.updateSensor(id, sensor);
    }
}