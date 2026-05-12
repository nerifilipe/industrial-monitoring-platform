package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.dto.AlertResponseDTO;
import com.cv.industrialmonitoring.service.AlertService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AlertController {

    private final AlertService alertService;

    public AlertController(AlertService alertService) {
        this.alertService = alertService;
    }

    @GetMapping("/api/alerts")
    public List<AlertResponseDTO> getActiveAlerts() {
        return alertService.getActiveAlerts();
    }
}