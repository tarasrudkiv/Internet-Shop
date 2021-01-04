package com.example.InternetShop.dto;

import com.example.InternetShop.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
@AllArgsConstructor
@Getter
public class ProductPageDTO {
    private List <Product> productList;
    private long totalElements;
    private  int totalPages;
    private int pageSize;

}
