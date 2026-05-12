package com.cv.industrialmonitoring.repository;

import com.cv.industrialmonitoring.model.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SensorRepository extends JpaRepository<Sensor, Long> {

    List<Sensor> findByMachineId(Long machineId);

    long countByStatus(String status);
}