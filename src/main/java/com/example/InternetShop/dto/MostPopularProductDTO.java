package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MostPopularProductDTO {
    String productName;
    String productCategory;
    String imageName;
    int productId;
    long numberOfOrders;
}
