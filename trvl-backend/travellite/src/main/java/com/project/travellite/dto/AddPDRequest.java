package com.project.travellite.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class AddPDRequest {
    private String cardName;
    private String cardNum;
    private LocalDate cardExp;
    private int cvv;
}
