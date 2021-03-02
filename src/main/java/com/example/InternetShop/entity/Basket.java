package com.example.InternetShop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Basket {
    @Id
    @NotNull
    @Positive
    int id;
    @NotBlank
    String userName;
    @NotBlank
    String category;
    @NotBlank
    String productName;
    @NotBlank
    String status;
    @NotNull
    @PositiveOrZero
    int price;
}
