package com.example.InternetShop.dao;

import com.example.InternetShop.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ProductDao extends JpaRepository<Product, Integer> {
    @Query("select p from Product p where p.category=?1")
    Page<Product> findByCategoryName(String category, Pageable pageable);

    @Query("select p from Product p where p.productName like ?1%")
    Page<Product> findByProductName(String productName, Pageable pageable);
}
