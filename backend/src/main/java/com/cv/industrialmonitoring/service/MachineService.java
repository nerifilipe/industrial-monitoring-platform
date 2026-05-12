package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.model.Machine;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MachineService {

    public List<Machine> getAllMachines() {
        return List.of(
                new Machine(1L, "Conveyor Belt 01", "CONVEYOR", "ONLINE", "Factory Floor A"),
                new Machine(2L, "Hydraulic Press 02", "PRESS", "WARNING", "Factory Floor B"),
                new Machine(3L, "Robot Arm 03", "ROBOT_ARM", "OFFLINE", "Assembly Line 1")
        );
    }
}