package com.project.travellite.controller;

import com.project.travellite.model.Bookings;
import com.project.travellite.model.Flights;
import com.project.travellite.model.User;
import com.project.travellite.repository.FlightRepository;
import com.project.travellite.repository.UserRepository;
import com.project.travellite.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    @Autowired
    private BookingService bookingService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FlightRepository flightRepository;

    @PostMapping("/book")
    public Bookings createBooking(@RequestParam Long userid, @RequestParam Long flightid){
        User user = userRepository.findById(userid).orElseThrow(
                () -> new RuntimeException("User not found"));
        Flights flights = flightRepository.findById(flightid).orElseThrow(
                () -> new RuntimeException("Flight not found"));

        return bookingService.createBooking(user, flights);
    }

    @GetMapping("/all")
    public List<Bookings> getAll() {
        return bookingService.getAllBookings();
    }
}
