package com.project.travellite.repository;

import com.project.travellite.model.Flights;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface FlightRepository extends JpaRepository<Flights, Long> {
 List<Optional<Flights>> findByCompany(String company);
 List<Optional<Flights>> findByDepartureTime(LocalDateTime departureTime);
 List<Optional<Flights>> findByDestination(String destination);
 List<Optional<Flights>> findByFlightNumber(String flightNumber);

 @Query(value = "SELECT DISTINCT company FROM flights", nativeQuery = true)
 List<String> findCompanies();
}
