package com.example.InternetShop.dto;

import com.example.InternetShop.entity.ProductOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderPageDTO {
    private List<ProductOrder> orderList;
    private long totalElements;
    private int totalPages;
    private int pageSize;
}
