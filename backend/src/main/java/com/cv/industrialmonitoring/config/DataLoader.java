package com.cv.industrialmonitoring.config;

import com.cv.industrialmonitoring.model.Machine;
import com.cv.industrialmonitoring.repository.MachineRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final MachineRepository machineRepository;

    public DataLoader(MachineRepository machineRepository) {
        this.machineRepository = machineRepository;
    }

    @Override
    public void run(String... args) {

        if (machineRepository.count() == 0) {

            machineRepository.save(
                    new Machine(
                            "Conveyor Belt 01",
                            "CONVEYOR",
                            "ONLINE",
                            "Factory Floor A"
                    )
            );

            machineRepository.save(
                    new Machine(
                            "Hydraulic Press 02",
                            "PRESS",
                            "WARNING",
                            "Factory Floor B"
                    )
            );

            machineRepository.save(
                    new Machine(
                            "Robot Arm 03",
                            "ROBOT_ARM",
                            "OFFLINE",
                            "Assembly Line 1"
                    )
            );
        }
    }
}