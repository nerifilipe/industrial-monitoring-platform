package com.cv.industrialmonitoring.config;

import com.cv.industrialmonitoring.model.Machine;
import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.model.SensorReading;
import com.cv.industrialmonitoring.repository.MachineRepository;
import com.cv.industrialmonitoring.repository.SensorReadingRepository;
import com.cv.industrialmonitoring.repository.SensorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataLoader implements CommandLineRunner {

    private final MachineRepository machineRepository;
    private final SensorRepository sensorRepository;
    private final SensorReadingRepository sensorReadingRepository;

    public DataLoader(
            MachineRepository machineRepository,
            SensorRepository sensorRepository,
            SensorReadingRepository sensorReadingRepository
    ) {
        this.machineRepository = machineRepository;
        this.sensorRepository = sensorRepository;
        this.sensorReadingRepository = sensorReadingRepository;
    }

    @Override
    public void run(String... args) {

        if (machineRepository.count() == 0) {

            Machine conveyor = machineRepository.save(
                    new Machine("Conveyor Belt 01", "CONVEYOR", "ONLINE", "Factory Floor A")
            );

            Machine press = machineRepository.save(
                    new Machine("Hydraulic Press 02", "PRESS", "WARNING", "Factory Floor B")
            );

            Machine robot = machineRepository.save(
                    new Machine("Robot Arm 03", "ROBOT_ARM", "OFFLINE", "Assembly Line 1")
            );

            Sensor conveyorTemperature = sensorRepository.save(
                    new Sensor("Temperature Sensor", "TEMPERATURE", "°C", "ACTIVE", conveyor)
            );

            Sensor conveyorVibration = sensorRepository.save(
                    new Sensor("Vibration Sensor", "VIBRATION", "mm/s", "ACTIVE", conveyor)
            );

            Sensor pressPressure = sensorRepository.save(
                    new Sensor("Pressure Sensor", "PRESSURE", "bar", "ACTIVE", press)
            );

            Sensor pressOilTemperature = sensorRepository.save(
                    new Sensor("Oil Temperature Sensor", "TEMPERATURE", "°C", "ACTIVE", press)
            );

            Sensor robotPosition = sensorRepository.save(
                    new Sensor("Position Sensor", "POSITION", "mm", "INACTIVE", robot)
            );

            sensorReadingRepository.save(
                    new SensorReading(78.5, LocalDateTime.now().minusMinutes(10), conveyorTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(80.2, LocalDateTime.now().minusMinutes(5), conveyorTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(79.1, LocalDateTime.now(), conveyorTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(0.8, LocalDateTime.now().minusMinutes(10), conveyorVibration)
            );

            sensorReadingRepository.save(
                    new SensorReading(1.1, LocalDateTime.now().minusMinutes(5), conveyorVibration)
            );

            sensorReadingRepository.save(
                    new SensorReading(1.4, LocalDateTime.now(), conveyorVibration)
            );

            sensorReadingRepository.save(
                    new SensorReading(3.2, LocalDateTime.now().minusMinutes(10), pressPressure)
            );

            sensorReadingRepository.save(
                    new SensorReading(3.8, LocalDateTime.now().minusMinutes(5), pressPressure)
            );

            sensorReadingRepository.save(
                    new SensorReading(4.1, LocalDateTime.now(), pressPressure)
            );

            sensorReadingRepository.save(
                    new SensorReading(65.0, LocalDateTime.now().minusMinutes(10), pressOilTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(68.4, LocalDateTime.now().minusMinutes(5), pressOilTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(71.2, LocalDateTime.now(), pressOilTemperature)
            );

            sensorReadingRepository.save(
                    new SensorReading(120.0, LocalDateTime.now().minusMinutes(10), robotPosition)
            );

            sensorReadingRepository.save(
                    new SensorReading(125.5, LocalDateTime.now().minusMinutes(5), robotPosition)
            );

            sensorReadingRepository.save(
                    new SensorReading(130.2, LocalDateTime.now(), robotPosition)
            );
        }
    }
}