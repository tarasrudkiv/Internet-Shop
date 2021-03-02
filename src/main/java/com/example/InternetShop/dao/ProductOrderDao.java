package com.example.InternetShop.dao;

import com.example.InternetShop.entity.ProductOrder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductOrderDao extends JpaRepository<ProductOrder, Integer> {
    @Query("select p from ProductOrder p where p.userName =?1")
    Page<ProductOrder> findOrdersByUserName(String userName, PageRequest pageRequest);

    @Query("select p from ProductOrder p where p.userName like ?1% or p.productName like ?1% or p.status like ?1%")
    Page<ProductOrder> findOrder(String keyword, PageRequest pageRequest);

}
