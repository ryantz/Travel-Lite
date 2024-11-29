package com.project.travellite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class FindFlightsRequest {
    private LocalDateTime departureTime;
    private String Destination;
}
