package com.cv.industrialmonitoring.controller;

import com.cv.industrialmonitoring.dto.AuthRequest;
import com.cv.industrialmonitoring.model.User;
import com.cv.industrialmonitoring.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User register(@RequestBody AuthRequest request) {
        return authService.register(request);
    }
}