package com.cv.industrialmonitoring.simulator;

import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.model.SensorReading;
import com.cv.industrialmonitoring.repository.SensorReadingRepository;
import com.cv.industrialmonitoring.repository.SensorRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Component
public class SensorSimulator {

    private final SensorRepository sensorRepository;
    private final SensorReadingRepository sensorReadingRepository;
    private final Random random = new Random();

    public SensorSimulator(
            SensorRepository sensorRepository,
            SensorReadingRepository sensorReadingRepository
    ) {
        this.sensorRepository = sensorRepository;
        this.sensorReadingRepository = sensorReadingRepository;
    }

    @Scheduled(fixedRate = 5000)
    public void generateReadings() {
        List<Sensor> sensors = sensorRepository.findAll();

        for (Sensor sensor : sensors) {
            if (!"ACTIVE".equals(sensor.getStatus())) {
                continue;
            }

            double value = generateValue(sensor.getType());

            SensorReading reading = new SensorReading(
                    value,
                    LocalDateTime.now(),
                    sensor
            );

            sensorReadingRepository.save(reading);
        }
    }

    private double generateValue(String sensorType) {
        return switch (sensorType) {
            case "TEMPERATURE" -> 60 + random.nextDouble() * 30;
            case "VIBRATION" -> random.nextDouble() * 3;
            case "PRESSURE" -> 2 + random.nextDouble() * 4;
            case "POSITION" -> 100 + random.nextDouble() * 50;
            default -> random.nextDouble() * 100;
        };
    }
}