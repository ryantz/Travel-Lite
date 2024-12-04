package com.project.travellite.service;

import com.project.travellite.dto.*;
import com.project.travellite.model.PaymentDetails;
import com.project.travellite.model.Role;
import com.project.travellite.model.User;
import com.project.travellite.model.UserDetails;
import com.project.travellite.repository.PaymentDetailRepository;
import com.project.travellite.repository.UserDetailRepository;
import com.project.travellite.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

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
    private PaymentDetailRepository payDetRepo;
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

    public User changeToAdmin(String username){
        User user = userRepo.findByUsername(username);
        user.setRole(Role.ADMIN);
        userRepo.save(user);
        return user;
    }

    public User registerUser(SignupRequest signupRequest){
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setUsername(signupRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setRole(Role.USER);
        userRepo.save(user);
        return user;
    }

    public void deleteUser(String username){
        User userToDel = userRepo.findByUsername(username);
        userRepo.delete(userToDel);
    }

    public User changeEmail(String username, String newEmail){
        User user = userRepo.findByUsername(username);
        user.setEmail(newEmail);
        userRepo.save(user);
        return user;
    }

    public UserDetails getDetailsByUsername(String username){
        User user = userRepo.findByUsername(username);
        if(user != null){
            return userDetRepo.findByUserId(user.getId());
        }
        return null;
    }

    public PaymentDetails getPDetailsByUsername(String username){
        User user = userRepo.findByUsername(username);
        if(user != null){
            return payDetRepo.findByUserId(user.getId());
        }
        return null;
    }

    public boolean verifyPassword(String rawPass, String hashPass){
        return passwordEncoder.matches(rawPass, hashPass);
    }

    public UserDResponse addOrUpdateDetails(String username, AddUDRequest udRequest){
        User user = getUserByUsername(username);
        UserDetails userD = userDetRepo.findByUserId(user.getId());

        if(userD == null){
            userD = new UserDetails();
            userD.setUser(user);
        }

        userD.setFirstName(udRequest.getFirstName());
        userD.setLastName(udRequest.getLastName());
        userD.setGender(udRequest.getGender());
        userD.setDob(udRequest.getDob());
        userD.setNationality(udRequest.getNationality());
        userD.setPassNum(udRequest.getPassNum());
        userD.setPassIss(udRequest.getPassIss());
        userD.setPassExp(udRequest.getPassExp());
        userDetRepo.save(userD);

        UserDResponse userDResponse = new UserDResponse();
        userDResponse.setFirstName(userD.getFirstName());
        userDResponse.setLastName(userD.getLastName());
        userDResponse.setGender(userD.getGender());
        userDResponse.setDob(userD.getDob());
        userDResponse.setNationality(userD.getNationality());
        userDResponse.setPassNum(userD.getPassNum());
        userDResponse.setPassIss(userD.getPassIss());
        userDResponse.setPassExp(userD.getPassExp());

        return userDResponse;
    }

    public PaymentDReponse addOrUpdatePayDetails(String username, AddPDRequest pdRequest){
        User user = getUserByUsername(username);
        PaymentDetails payD = payDetRepo.findByUserId(user.getId());

        if(payD == null){
            payD = new PaymentDetails();
            payD.setUser(user);
        }

        payD.setCardNum(pdRequest.getCardNum());
        payD.setCardName(pdRequest.getCardName());
        payD.setCvv(pdRequest.getCvv());
        payD.setCardExp(pdRequest.getCardExp());
        payDetRepo.save(payD);

        PaymentDReponse pDResponse = new PaymentDReponse();
        pDResponse.setCardNum(payD.getCardNum());
        pDResponse.setCardName(payD.getCardName());
        pDResponse.setCvv(payD.getCvv());
        pDResponse.setCardExp(payD.getCardExp());
        return pDResponse;
    }

}
