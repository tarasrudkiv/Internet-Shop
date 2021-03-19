package com.example.InternetShop.dao;

import com.example.InternetShop.entity.Basket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BasketDao extends JpaRepository<Basket, Integer> {
    @Query("select b from Basket b where b.userId=?1")
    Page<Basket> getProductsByUserid(int userId, PageRequest pageRequest);

    Basket findById(int id);

    Basket findByProductIdAndUserId(int productId, int userId);
}
