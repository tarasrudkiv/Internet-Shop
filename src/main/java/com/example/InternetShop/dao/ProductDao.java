package com.example.InternetShop.dao;

import com.example.InternetShop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductDao extends JpaRepository<Product,Integer> {
}
