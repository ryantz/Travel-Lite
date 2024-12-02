package com.project.travellite.dto;

import com.project.travellite.model.FlightType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class FilterRequest {
    private String company;
    private FlightType type;
}
