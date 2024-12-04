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

    @Column(nullable = true)
    private String cardName;

    @Column(nullable = true)
    private String cardNum;

    @Column(nullable = true)
    private LocalDate cardExp;

    @Column(nullable = true)
    private int cvv;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;
}
