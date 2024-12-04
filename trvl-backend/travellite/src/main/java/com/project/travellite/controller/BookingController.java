package com.project.travellite.controller;

import com.project.travellite.dto.AddBookingRequest;
import com.project.travellite.model.Bookings;
import com.project.travellite.model.Flights;
import com.project.travellite.model.PaymentDetails;
import com.project.travellite.model.User;
import com.project.travellite.repository.BookingRepository;
import com.project.travellite.repository.FlightRepository;
import com.project.travellite.repository.PaymentDetailRepository;
import com.project.travellite.repository.UserRepository;
import com.project.travellite.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

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

    @Autowired
    private PaymentDetailRepository payRepo;

    @PostMapping("/book")
    public Bookings createBooking(@RequestBody AddBookingRequest abr){

        System.out.println(abr.getUserId());
        User user = userRepository.findById(abr.getUserId()).orElseThrow(
                () -> new RuntimeException("User not found"));

        Flights flights = flightRepository.findById(abr.getFlightId()).orElseThrow(
                () -> new RuntimeException("Flight not found"));

        PaymentDetails pay = payRepo.findById(abr.getPaymentId()).orElseThrow(
                () -> new RuntimeException("Payment Details not found"));

        return bookingService.createBooking(user, flights, pay);
    }

    @GetMapping("/all")
    public List<Bookings> getAll() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Bookings>> getBookingsForUser(@PathVariable Long userId){
        List<Bookings> bookings = bookingService.getBookingsByUser(userId);
        return ResponseEntity.ok(bookings);
    }
}
