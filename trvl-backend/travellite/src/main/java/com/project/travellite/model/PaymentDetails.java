package com.project.travellite.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Table(name="payment_details")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PaymentDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String cardName;

    @Column(nullable = false)
    private String cardNum;

    @Column(nullable = false)
    private LocalDate cardExp;

    @Column(nullable = false)
    private int cvv;

    @ManyToOne
    @JoinColumn(name="userD_id", nullable = false)
    private UserDetails userDetails;
}
