package com.cv.industrialmonitoring.repository;

import com.cv.industrialmonitoring.model.Machine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MachineRepository extends JpaRepository<Machine, Long> {
}