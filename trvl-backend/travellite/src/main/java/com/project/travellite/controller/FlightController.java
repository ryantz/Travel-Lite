package com.project.travellite.controller;

import com.project.travellite.model.Flights;
import com.project.travellite.service.FlightService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public List<Flights> getAll(){
        return flightServ.getAllFlights();
    }

    @GetMapping("/find/company/{company}")
    public Optional<Flights> getByCompany(@PathVariable String company){
        return flightServ.getFlightByCompany(company);
    }

    @GetMapping("/find/timing")
    public Optional<Flights> getByDate(@RequestBody LocalDateTime dep){
        return flightServ.getFlightByDepart(dep);
    }

    @GetMapping("find/destination/{destination}")
    public Optional<Flights> getByDestination(@PathVariable String destination){
        return flightServ.getFlightByDestination(destination);
    }


}
