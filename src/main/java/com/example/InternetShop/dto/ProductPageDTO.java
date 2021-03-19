package com.example.InternetShop.dto;

import com.example.InternetShop.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductPageDTO {
    private List <Product> productList;
    private long totalElements;
    private  int totalPages;
    private int pageSize;

}
