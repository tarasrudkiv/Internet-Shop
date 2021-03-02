package com.example.InternetShop.dto;

import com.example.InternetShop.entity.ProductOrder;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
@Getter
@AllArgsConstructor
public class OrderPageDTO {
    private List<ProductOrder> orderList;
    private long totalElements;
    private int totalPages;
    private int pageSize;
}
