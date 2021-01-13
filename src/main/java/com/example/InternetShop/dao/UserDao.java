package com.example.InternetShop.dao;

import com.example.InternetShop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
}
