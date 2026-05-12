package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.model.SensorReading;
import com.cv.industrialmonitoring.repository.SensorReadingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorReadingService {

    private final SensorReadingRepository sensorReadingRepository;

    public SensorReadingService(SensorReadingRepository sensorReadingRepository) {
        this.sensorReadingRepository = sensorReadingRepository;
    }

    public List<SensorReading> getAllReadings() {
        return sensorReadingRepository.findAll();
    }

    public List<SensorReading> getReadingsBySensorId(Long sensorId) {
        return sensorReadingRepository.findBySensorId(sensorId);
    }
}