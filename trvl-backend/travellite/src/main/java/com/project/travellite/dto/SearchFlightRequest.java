package com.project.travellite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
public class SearchFlightRequest {
    private int pax;
    private LocalDateTime departureTime;
    private String destination;
    private String origin;
}
