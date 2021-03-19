package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatisticOfOrdersForEachCategoryDTO {
    String orderCategory;
    long numberOfOrders;
    long percentageOfOrders;
}
