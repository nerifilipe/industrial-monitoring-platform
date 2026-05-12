package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.dto.ReadingResponseDTO;
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

    public List<ReadingResponseDTO> getAllReadings() {

        List<SensorReading> readings = sensorReadingRepository.findAll();

        return readings.stream()
                .map(reading -> new ReadingResponseDTO(
                        reading.getId(),
                        reading.getValue(),
                        reading.getTimestamp(),
                        reading.getSensor().getName()
                ))
                .toList();
    }

    public List<ReadingResponseDTO> getReadingsBySensorId(Long sensorId) {

        List<SensorReading> readings =
                sensorReadingRepository.findBySensorId(sensorId);

        return readings.stream()
                .map(reading -> new ReadingResponseDTO(
                        reading.getId(),
                        reading.getValue(),
                        reading.getTimestamp(),
                        reading.getSensor().getName()
                ))
                .toList();
    }
}