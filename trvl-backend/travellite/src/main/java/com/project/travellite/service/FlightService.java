package com.project.travellite.service;

import com.project.travellite.model.Flights;
import com.project.travellite.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FlightService {
    @Autowired
    private FlightRepository flightRepo;

    public List<Flights> getAllFlights(){
        return flightRepo.findAll();
    }

    public Optional<Flights> getFlightByCompany(String company){
        return flightRepo.findByCompany(company);
    }

    public Optional<Flights> getFlightByDepart(LocalDateTime departure){
        return flightRepo.findByDepartureTime(departure);
    }

    public Optional<Flights> getFlightByDestination(String destination){
        return flightRepo.findByDestination(destination);
    }
}

