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
    public void deleteSensor(Long id) {
        sensorRepository.deleteById(id);
    }
    public Sensor updateSensor(Long id, Sensor updatedSensor) {
        Sensor sensor = sensorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sensor not found"));

        sensor.setName(updatedSensor.getName());
        sensor.setType(updatedSensor.getType());
        sensor.setUnit(updatedSensor.getUnit());
        sensor.setStatus(updatedSensor.getStatus());
        sensor.setMachine(updatedSensor.getMachine());

        return sensorRepository.save(sensor);
    }
}