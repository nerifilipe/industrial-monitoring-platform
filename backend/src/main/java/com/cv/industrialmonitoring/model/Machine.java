package com.cv.industrialmonitoring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Machine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Machine name is required")
    private String name;

    @NotBlank(message = "Machine type is required")
    private String type;

    @NotBlank(message = "Machine status is required")
    private String status;

    @NotBlank(message = "Machine location is required")
    private String location;

    @OneToMany(mappedBy = "machine", cascade = CascadeType.ALL)
    private List<Sensor> sensors;

    public Machine() {
    }

    public Machine(String name, String type, String status, String location) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getStatus() {
        return status;
    }

    public String getLocation() {
        return location;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}