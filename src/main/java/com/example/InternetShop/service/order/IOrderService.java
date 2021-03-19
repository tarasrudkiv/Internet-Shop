package com.example.InternetShop.service.order;

import com.example.InternetShop.dto.StatisticsDataDTO;
import com.example.InternetShop.dto.OrderPageDTO;
import com.example.InternetShop.dto.TotalOrdersDTO;
import com.example.InternetShop.entity.ProductOrder;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IOrderService {
    OrderPageDTO getAllOrders(PageRequest pageRequest);

    OrderPageDTO getAllOrdersOfOneUser(int userId, PageRequest pageRequest);

    OrderPageDTO findOrderByStatus(String status, PageRequest pageRequest);

    OrderPageDTO findOrderByProductName(String status, PageRequest pageRequest);

    ProductOrder insertOrder(ProductOrder order);

    ProductOrder setStatus(String status, int id);

    StatisticsDataDTO getStatisticsData();

    StatisticsDataDTO getStatisticsDataForPeriodOfTime(String periodOfTime);

    void deleteOrder(int id);
}
