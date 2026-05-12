package com.cv.industrialmonitoring.config;

import com.cv.industrialmonitoring.model.Machine;
import com.cv.industrialmonitoring.model.Sensor;
import com.cv.industrialmonitoring.repository.MachineRepository;
import com.cv.industrialmonitoring.repository.SensorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final MachineRepository machineRepository;
    private final SensorRepository sensorRepository;

    public DataLoader(MachineRepository machineRepository, SensorRepository sensorRepository) {
        this.machineRepository = machineRepository;
        this.sensorRepository = sensorRepository;
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

            sensorRepository.save(new Sensor("Temperature Sensor", "TEMPERATURE", "°C", "ACTIVE", conveyor));
            sensorRepository.save(new Sensor("Vibration Sensor", "VIBRATION", "mm/s", "ACTIVE", conveyor));

            sensorRepository.save(new Sensor("Pressure Sensor", "PRESSURE", "bar", "ACTIVE", press));
            sensorRepository.save(new Sensor("Oil Temperature Sensor", "TEMPERATURE", "°C", "ACTIVE", press));

            sensorRepository.save(new Sensor("Position Sensor", "POSITION", "mm", "INACTIVE", robot));
        }
    }
}