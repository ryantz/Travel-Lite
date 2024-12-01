package com.project.travellite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class UserDResponse {
    private String firstName;
    private String lastName;
    private String gender;
    private LocalDate dob;
    private String nationality;
    private String passNum;
    private LocalDate passIss;
    private LocalDate passExp;

}
