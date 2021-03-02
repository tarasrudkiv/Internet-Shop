package com.example.InternetShop.service.order;

import com.example.InternetShop.dto.OrderPageDTO;
import com.example.InternetShop.entity.ProductOrder;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IOrderService {
    OrderPageDTO getAllOrders(PageRequest pageRequest);

    OrderPageDTO getAllOrdersOfOneUser(String userName, PageRequest pageRequest);

    OrderPageDTO findOrder(String keyword, PageRequest pageRequest);

    ProductOrder insertOrder(ProductOrder order);


    ProductOrder setStatus(String status, int id);

    void deleteOrder(int id);
}
