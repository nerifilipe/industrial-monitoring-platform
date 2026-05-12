package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.model.Machine;
import com.cv.industrialmonitoring.service.MachineService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MachineController {

    private final MachineService machineService;

    public MachineController(MachineService machineService) {
        this.machineService = machineService;
    }

    @GetMapping("/api/machines")
    public List<Machine> getAllMachines() {
        return machineService.getAllMachines();
    }

    @PostMapping("/api/machines")
    public Machine createMachine(@Valid @RequestBody Machine machine) {
        return machineService.createMachine(machine);
    }
}