package com.project.travellite.controller;

import com.project.travellite.dto.AddUDRequest;
import com.project.travellite.dto.UserDResponse;
import com.project.travellite.model.User;
import com.project.travellite.model.UserDetails;
import com.project.travellite.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.annotation.Repeatable;
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

    @DeleteMapping("/{username}")
    public ResponseEntity<String> removeUser(@PathVariable String username){
        userService.deleteUser(username);
        return ResponseEntity.ok("User deleted!");
    }

    // admin
    @PatchMapping("/{username}/upgrade")
    public ResponseEntity<String> upgradeUser(@PathVariable String username){
        userService.changeToAdmin(username);
        return ResponseEntity.ok("user upgraded to Admin");
    }

    @PatchMapping("/{username}/changePass")
    public ResponseEntity<String> changePassword(@PathVariable String username, @RequestBody String newPass){
        userService.changePassword(username, newPass);
        return ResponseEntity.ok("Password changed successfully");
    }

    @GetMapping("/{username}/details")
    public ResponseEntity<UserDetails> getByUsername(@PathVariable String username){
        if(userService.getUserByUsername(username) != null) {
            return ResponseEntity.ok(userService.getDetailsByUsername(username));
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{username}/details")
    public ResponseEntity<UserDResponse> addUserDetails(@PathVariable String username, @RequestBody AddUDRequest udRequest){
        return ResponseEntity.ok(userService.addDetails(username, udRequest));
    }
}
