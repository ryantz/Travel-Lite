package com.project.travellite.dto;

import com.project.travellite.model.FlightType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class AddFlightRequest {
    private String flightNumber;
    private String company;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private String origin;
    private String destination;
    private double price;
    private int seat_count;
    private FlightType type;
}
