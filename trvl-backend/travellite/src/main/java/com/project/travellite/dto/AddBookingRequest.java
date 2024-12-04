package com.project.travellite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class AddBookingRequest {
    private Long userId;
    private Long flightId;
    private Long paymentId;
    private String status;
}
