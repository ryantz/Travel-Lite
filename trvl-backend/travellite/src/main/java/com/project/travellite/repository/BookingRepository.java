package com.project.travellite.repository;

import com.project.travellite.model.Bookings;
import com.project.travellite.model.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Bookings, Long> {
    List<Bookings> findBookingsByUserId(Long userId);
}

