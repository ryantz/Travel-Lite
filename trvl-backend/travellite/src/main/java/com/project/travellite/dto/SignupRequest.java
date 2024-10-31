package com.project.travellite.dto;

import com.project.travellite.model.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class SignupRequest {
    private String email;
    private String username;
    private String password;
    private Role role;
}
