package com.cv.industrialmonitoring.repository;

import com.cv.industrialmonitoring.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlertRepository extends JpaRepository<Alert, Long> {

    List<Alert> findByResolvedFalse();

    long countByResolvedFalse();
}