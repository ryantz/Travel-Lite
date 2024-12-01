package com.project.travellite.service;

import com.project.travellite.model.Bookings;
import com.project.travellite.model.Flights;
import com.project.travellite.model.User;
import com.project.travellite.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    public List<Bookings> getAllBookings(){
       return bookingRepo.findAll();
    }

    public Bookings createBooking(User user, Flights flights){
        Bookings bookings = new Bookings();
        bookings.setUser(user);
        bookings.setFlights(flights);
        bookings.setBookingDate(LocalDateTime.now());
        bookings.setStatus("CONFIRMED");

        return bookingRepo.save(bookings);
    }
}
