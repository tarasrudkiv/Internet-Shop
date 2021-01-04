package com.example.InternetShop.dao;

import com.example.InternetShop.entity.Component;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ComponentDao extends JpaRepository<Component, Integer> {
}
