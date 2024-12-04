package com.project.travellite.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private UserDetails userDetails;
}
