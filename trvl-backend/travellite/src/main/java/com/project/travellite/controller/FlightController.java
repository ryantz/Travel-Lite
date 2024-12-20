package com.project.travellite.controller;

import com.project.travellite.dto.AddFlightRequest;
import com.project.travellite.dto.SearchFlightRequest;
import com.project.travellite.model.FlightType;
import com.project.travellite.model.Flights;
import com.project.travellite.service.FlightService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/public/flights")
@RequiredArgsConstructor
public class FlightController {
    @Autowired
    private FlightService flightServ;

    @GetMapping("/find")
    public ResponseEntity<List<Flights>> getAll(){
        List<Flights> flights = flightServ.getAllFlights();
        return ResponseEntity.ok(flights);
    }

    @GetMapping("/find/company/{company}")
    public List<Optional<Flights>> getByCompany(@PathVariable String company){
        return flightServ.getFlightByCompany(company);
    }

    //localhost:8080/api/public/flights/find/timing?dep=2024-11-25T08:00:00
    @GetMapping("/find/timing")
    public List<Optional<Flights>> getByDate(@RequestParam String dep){
        LocalDateTime departureTime = LocalDateTime.parse(dep);
        return flightServ.getFlightByDepart(departureTime);
    }

    @GetMapping("/find/destination/{destination}")
    public List<Optional<Flights>> getByDestination(@PathVariable String destination){
        return flightServ.getFlightByDestination(destination);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addFlights(@RequestBody AddFlightRequest addFlightRequest){
        flightServ.addFlight(addFlightRequest);
        return ResponseEntity.ok("Flight registered");
    }

    @GetMapping("/find/company")
    public List<String> getAllCompanies(){
        return flightServ.getCompanyNames();
    }

    @PostMapping("/landingSearch")
    public ResponseEntity<List<Flights>> searchByLanding(@RequestBody SearchFlightRequest sfr){
        LocalDate departureDate = sfr.getDepartureTime().toLocalDate();
        List<Flights> flights = flightServ.findFlightsByLandingPage(departureDate, sfr.getOrigin(), sfr.getDestination());
        return ResponseEntity.ok(flights);
    }

    @GetMapping("/types")
    public FlightType[] getFlightTypes() {
        return FlightType.values();
    }

    @GetMapping("/{id}")
    public Optional<Flights> getFlightsById(@PathVariable Long id){
        return flightServ.getFlightById(id);
    }
}
