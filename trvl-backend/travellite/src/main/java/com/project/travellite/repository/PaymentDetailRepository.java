package com.project.travellite.repository;

import com.project.travellite.model.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentDetailRepository extends JpaRepository<PaymentDetails, Long> {
    PaymentDetails findByUserId(Long userId);
}
