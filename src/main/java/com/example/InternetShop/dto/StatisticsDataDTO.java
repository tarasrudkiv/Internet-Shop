package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatisticsDataDTO {
    List<StatisticOfOrdersForEachCategoryDTO> ordersDataList;
    List<MostPopularProductDTO> productDataList;
    long totalOrders;
}
