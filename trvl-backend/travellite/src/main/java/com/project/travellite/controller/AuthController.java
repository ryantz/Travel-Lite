package com.project.travellite.controller;

import com.project.travellite.dto.LoginRequest;
import com.project.travellite.dto.SignupRequest;
import com.project.travellite.model.Role;
import com.project.travellite.model.User;
import com.project.travellite.model.UserDetails;
import com.project.travellite.repository.UserRepository;
import com.project.travellite.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserService userService;

    @PostMapping("/auth/signup")
    public ResponseEntity<String> registerUser(@RequestBody SignupRequest signupRequest) {
        if (userRepository.findByUsername(signupRequest.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username chosen is already taken!");
        } else if (userRepository.findByEmail(signupRequest.getEmail()) != null){
            return ResponseEntity.badRequest().body("Email is already tied to an account!");
        }

        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setUsername(signupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setRole(Role.USER);

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/auth/login")
    public ResponseEntity<String> userLogin(@RequestBody LoginRequest loginRequest){
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if(user == null){
            ResponseEntity.notFound();
        }
        if(userService.verifyPassword(loginRequest.getPassword(), user.getPassword())){
            return ResponseEntity.ok("User logged in successfully!");
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password!");
        }

    }

    @PostMapping("/user/logout")
    public ResponseEntity<String> userLogout(HttpServletRequest req){
        req.getSession().invalidate();
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("User logged out successfully!");
    }
}