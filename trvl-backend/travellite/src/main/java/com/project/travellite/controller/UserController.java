package com.project.travellite.controller;

import com.project.travellite.model.User;
import com.project.travellite.model.UserDetails;
import com.project.travellite.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// user dashboard here
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User> getAll(User user){
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public User getBasicDetails(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

    @PatchMapping("/{username}/changePass")
    public ResponseEntity<String> changePassword(@PathVariable String username, @RequestBody String newPass){
        userService.changePassword(username, newPass);
        return ResponseEntity.ok("Password changed successfully");
    }

    @GetMapping("/{username}/details")
    public UserDetails getByUsername(@PathVariable String username){
        return userService.getDetailsByUsername(username);
    }

    @PostMapping("/{username}/details")
    public UserDetails addUserDetails(@PathVariable String username, @RequestBody UserDetails userDetails){
        return userService.addDetails(userDetails);
    }
}
