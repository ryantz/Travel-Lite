package com.project.travellite.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bookings")
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="flight_id", nullable = false)
    private Flights flights;

    @ManyToOne
    @JoinColumn(name="payment_id", nullable = false)
    private PaymentDetails payment;

    @Column(name="bookingDate", nullable = false)
    private LocalDateTime bookingDate;

    @Column(name="status", nullable = false)
    private String status;
}
