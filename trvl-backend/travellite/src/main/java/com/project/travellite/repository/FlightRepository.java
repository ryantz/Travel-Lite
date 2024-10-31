package com.project.travellite.repository;

import com.project.travellite.model.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface FlightRepository extends JpaRepository<Flights, Long> {
 Optional<Flights> findByCompany(String company);
 Optional<Flights> findByDepartureTime(LocalDateTime departureTime);
 Optional<Flights> findByDestination(String destination);
}
