package com.example.InternetShop.dao;

import com.example.InternetShop.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserDao extends JpaRepository<User, Integer> {
    @Query("select u from User u where u.username like ?1%")
    Page<User> findByUsername(String userName, Pageable pageable);

    User findByUsername(String username);

    User findByPhoneNumber(String userPhoneNumber);

    User findByEmail(String userEmail);

    @Query("select u from User u where u.id <> ?1 and u.username =?2")
    User findByUsernameAndNotById(int id, String userName);

    @Query("select u from User u where u.id <> ?1 and u.phoneNumber =?2")
    User findByPhoneNumberAndNotById(int id, String phoneNumber);

    @Query("select u from User u where u.id <> ?1 and u.email =?2")
    User findByEmailAndNotById(int id, String email);

}
