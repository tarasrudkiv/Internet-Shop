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
public class ProductOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    @NotBlank
    String status;
    @NotNull
    @PositiveOrZero
    int productId;
    @NotBlank
    String productName;
    @NotNull
    @Positive
    int numberOfProducts;
    @NotNull
    @PositiveOrZero
    int productPrice;
    @NotNull
    @PositiveOrZero
    @NotNull
    int totalPrice;
    @NotBlank
    String userName;
    @NotBlank
    String firstName;
    @NotBlank
    String lastName;
    @NotBlank
    String userPhoneNumber;
    @NotBlank
    String userAddress;
    @NotBlank
    String typeOfDelivery;
    @NotBlank
    String userEmail;
    String additionalInformation;
    @NotBlank
    String date;
}
