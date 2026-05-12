package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.repository.SensorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {

    private final SensorRepository sensorRepository;

    public SensorService(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public List<Sensor> getAllSensors() {
        return sensorRepository.findAll();
    }

    public List<Sensor> getSensorsByMachineId(Long machineId) {
        return sensorRepository.findByMachineId(machineId);
    }

    public Sensor createSensor(Sensor sensor) {
        return sensorRepository.save(sensor);
    }
}