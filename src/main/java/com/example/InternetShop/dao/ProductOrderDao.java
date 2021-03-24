package com.example.InternetShop.dao;

import com.example.InternetShop.dto.MostPopularProductDTO;
import com.example.InternetShop.dto.NumberOfOrdersForEachCategoryDTO;
import com.example.InternetShop.dto.TotalOrdersDTO;
import com.example.InternetShop.entity.ProductOrder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface ProductOrderDao extends JpaRepository<ProductOrder, Integer> {
    @Query("select p from ProductOrder p where p.userId =?1")
    Page<ProductOrder> findOrdersByUserId(int userId, PageRequest pageRequest);

    @Query("select p from ProductOrder p where p.status like ?1%")
    Page<ProductOrder> findOrderByStatus(String status, PageRequest pageRequest);

    @Query("select p from ProductOrder p where p.productName like ?1%")
    Page<ProductOrder> findOrderByProductName(String productName, PageRequest pageRequest);

    @Query("select new com.example.InternetShop.dto.NumberOfOrdersForEachCategoryDTO(p.category,count(p.category)) from ProductOrder p group by p.category order by count(p.category) DESC ")
    List<NumberOfOrdersForEachCategoryDTO> getNumberOfOrdersForEachCategory();

    @Query("select new com.example.InternetShop.dto.TotalOrdersDTO(count(p.id)) from ProductOrder p")
    TotalOrdersDTO getTotalOrders();

    @Query("select new com.example.InternetShop.dto.MostPopularProductDTO(p.productName,p.category, p.imageName,p.productId,count(p.productName)) from ProductOrder p group by p.productName order by count(p.productName) DESC ")
    Page<MostPopularProductDTO> getMostPopularProduct(PageRequest pageRequest);


    @Query("select new com.example.InternetShop.dto.TotalOrdersDTO(count(p.id)) from ProductOrder p where p.date>?1")
    TotalOrdersDTO getTotalOrdersForPeriodOfTime(Date date);

    @Query("select new com.example.InternetShop.dto.NumberOfOrdersForEachCategoryDTO(p.category,count(p.category)) from ProductOrder p where p.date>?1 group by p.category order by count(p.category) DESC ")
    List<NumberOfOrdersForEachCategoryDTO> getNumberOfOrdersForEachCategoryForPeriodOfTime(Date date);

    @Query("select new com.example.InternetShop.dto.MostPopularProductDTO(p.productName,p.category, p.imageName,p.productId,count(p.productName)) from ProductOrder p where p.date>?1 group by p.productName order by count(p.productName) DESC ")
    Page<MostPopularProductDTO> getMostPopularProductForPeriodOfTime(Date date, PageRequest pageRequest);
}
