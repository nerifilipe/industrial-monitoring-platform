package com.cv.industrialmonitoring.model;

public class Machine {

    private Long id;
    private String name;
    private String type;
    private String status;
    private String location;

    public Machine(Long id, String name, String type, String status, String location) {
        this.id = id;
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
}