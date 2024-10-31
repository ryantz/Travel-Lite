package com.project.travellite.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Table(name="user_details")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // non needed fields
    @Column(nullable = true)
    private String firstName;

    @Column(nullable = true)
    private String lastName;

    @Column(nullable = true)
    private String gender;

    @Column(nullable = true)
    private LocalDate dob;

    @Column(nullable = true)
    private String nationality;

    @Column(nullable = true)
    private String passNum;

    @Column(nullable = true)
    private LocalDate passIss;

    @Column(nullable = true)
    private LocalDate passExp;

    @Column(nullable = true)
    private String cardName;

    @Column(nullable = true)
    private String cardNum;

    @Column(nullable = true)
    private LocalDate cardExp;

    @Column(nullable = true)
    private String cvv;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;
}
