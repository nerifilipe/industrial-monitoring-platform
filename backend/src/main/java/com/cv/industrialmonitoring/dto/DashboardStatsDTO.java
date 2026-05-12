package com.cv.industrialmonitoring.dto;

public class DashboardStatsDTO {

    private long totalMachines;
    private long activeSensors;
    private long totalReadings;
    private long offlineMachines;

    public DashboardStatsDTO(
            long totalMachines,
            long activeSensors,
            long totalReadings,
            long offlineMachines
    ) {
        this.totalMachines = totalMachines;
        this.activeSensors = activeSensors;
        this.totalReadings = totalReadings;
        this.offlineMachines = offlineMachines;
    }

    public long getTotalMachines() {
        return totalMachines;
    }

    public long getActiveSensors() {
        return activeSensors;
    }

    public long getTotalReadings() {
        return totalReadings;
    }

    public long getOfflineMachines() {
        return offlineMachines;
    }
}