package com.example.InternetShop.dao;

import com.example.InternetShop.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserDao extends JpaRepository<User, Integer> {
    User findByUsername(String username);

    @Query("select u from User u where u.username like ?1%")
    Page<User> findByUsername(String userName, Pageable pageable);

    User findByPhoneNumber(String userPhoneNumber);

    User findByEmail(String userEmail);

}
