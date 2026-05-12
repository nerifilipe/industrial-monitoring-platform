package com.cv.industrialmonitoring.service;

import com.cv.industrialmonitoring.dto.DashboardStatsDTO;
import com.cv.industrialmonitoring.repository.MachineRepository;
import com.cv.industrialmonitoring.repository.SensorReadingRepository;
import com.cv.industrialmonitoring.repository.SensorRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final MachineRepository machineRepository;
    private final SensorRepository sensorRepository;
    private final SensorReadingRepository sensorReadingRepository;

    public DashboardService(
            MachineRepository machineRepository,
            SensorRepository sensorRepository,
            SensorReadingRepository sensorReadingRepository
    ) {
        this.machineRepository = machineRepository;
        this.sensorRepository = sensorRepository;
        this.sensorReadingRepository = sensorReadingRepository;
    }

    public DashboardStatsDTO getDashboardStats() {

        long totalMachines = machineRepository.count();

        long activeSensors =
                sensorRepository.countByStatus("ACTIVE");

        long totalReadings =
                sensorReadingRepository.count();

        long offlineMachines =
                machineRepository.countByStatus("OFFLINE");

        return new DashboardStatsDTO(
                totalMachines,
                activeSensors,
                totalReadings,
                offlineMachines
        );
    }
}