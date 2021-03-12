package com.example.InternetShop.service.order;

import com.example.InternetShop.dto.OrderPageDTO;
import com.example.InternetShop.entity.ProductOrder;
import org.springframework.data.domain.PageRequest;

public interface IOrderService {
    OrderPageDTO getAllOrders(PageRequest pageRequest);

    OrderPageDTO getAllOrdersOfOneUser(String userName, PageRequest pageRequest);

    OrderPageDTO findOrderByStatus(String status, PageRequest pageRequest);

    OrderPageDTO findOrderByProductName(String status, PageRequest pageRequest);

    ProductOrder insertOrder(ProductOrder order);


    ProductOrder setStatus(String status, int id);

    void deleteOrder(int id);
}
