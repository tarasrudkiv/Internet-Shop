package com.example.InternetShop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String surname;
    String password;
    String email;
    int phoneNumber;
//    @OneToMany(cascade = CascadeType.ALL)
//    List<PurchasedProduct> purchasedProductList;
}
