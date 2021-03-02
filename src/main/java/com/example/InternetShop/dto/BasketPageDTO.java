package com.example.InternetShop.dto;

import com.example.InternetShop.entity.Basket;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class BasketPageDTO {
    private List<Basket> productList;
    private long totalElements;
    private int totalPages;
    private int pageSize;
}
