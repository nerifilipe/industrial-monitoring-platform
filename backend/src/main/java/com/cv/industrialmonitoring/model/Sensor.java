package com.cv.industrialmonitoring.model;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private String unit;
    private String status;

    @ManyToOne
    @JoinColumn(name = "machine_id")
    private Machine machine;
    @OneToMany(mappedBy = "sensor", cascade = CascadeType.ALL)
    private List<Alert> alerts;
    @OneToMany(mappedBy = "sensor", cascade = CascadeType.ALL)
    private List<SensorReading> readings;

    public Sensor() {
    }

    public Sensor(String name, String type, String unit, String status, Machine machine) {
        this.name = name;
        this.type = type;
        this.unit = unit;
        this.status = status;
        this.machine = machine;
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

    public String getUnit() {
        return unit;
    }

    public String getStatus() {
        return status;
    }

    public Machine getMachine() {
        return machine;
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

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setMachine(Machine machine) {
        this.machine = machine;
    }
}