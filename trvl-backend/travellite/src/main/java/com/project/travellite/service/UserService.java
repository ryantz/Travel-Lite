package com.project.travellite.service;

import com.project.travellite.model.User;
import com.project.travellite.model.UserDetails;
import com.project.travellite.repository.UserDetailRepository;
import com.project.travellite.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private UserDetailRepository userDetRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByUsername(String username){
        return userRepo.findByUsername(username);
    }

    public User getUserByEmail(String email){
        return userRepo.findByEmail(email);
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User changePassword(String username, String newPassword){
        User user = userRepo.findByUsername(username);
        user.setPassword(newPassword);
        userRepo.save(user);
        return user;
    }

    public User changeEmail(String username, String newEmail){
        User user = userRepo.findByUsername(username);
        user.setEmail(newEmail);
        return user;
    }

    public UserDetails getDetailsByUsername(String username){
        User user = userRepo.findByUsername(username);
        if(user != null){
            return userDetRepo.findByUserId(user.getId());
        }
        return null;
    }

    public boolean verifyPassword(String rawPass, String hashPass){
        return passwordEncoder.matches(rawPass, hashPass);
    }

    public UserDetails addDetails(UserDetails userDetails){
        return userDetRepo.save(userDetails);
    }
}
