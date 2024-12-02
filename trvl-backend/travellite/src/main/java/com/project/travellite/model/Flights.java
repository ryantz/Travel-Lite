package com.project.travellite.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name="flights")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Flights {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String flightNumber;

    @Column(nullable = false)
    private String company;

    @Column(nullable = false)
    private LocalDateTime departureTime;

    @Column(nullable = false)
    private LocalDateTime arrivalTime;

    @Column(nullable = false)
    private String origin;

    @Column(nullable = false)
    private String destination;

    @Column(nullable = false)
    private double price;

    @JsonProperty("seatCount")
    @Column(nullable = false)
    private int seatCount;

    @Enumerated(EnumType.STRING)
    private FlightType type;
}