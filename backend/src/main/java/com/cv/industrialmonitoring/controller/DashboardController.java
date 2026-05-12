package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.dto.DashboardStatsDTO;
import com.cv.industrialmonitoring.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/api/dashboard")
    public DashboardStatsDTO getDashboardStats() {
        return dashboardService.getDashboardStats();
    }
}