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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String productName;
    @Column(length = 1000)
    String description;
    int price;
    String category;
    String status;
    String imageName;
    @OneToMany(cascade = CascadeType.ALL)
    List<Component> components;
}