package com.example.InternetShop.service.order;

import com.example.InternetShop.dao.ProductOrderDao;
import com.example.InternetShop.dto.BasketPageDTO;
import com.example.InternetShop.dto.OrderPageDTO;
import com.example.InternetShop.entity.Basket;
import com.example.InternetShop.entity.ProductOrder;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private ProductOrderDao orderDao;

    @Override
    public OrderPageDTO getAllOrders(PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findAll(pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }

    @Override
    public OrderPageDTO getAllOrdersOfOneUser(String userName, PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findOrdersByUserName(userName, pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }

    @Override
    public OrderPageDTO findOrder(String keyword, PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findOrder(keyword, pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }

    @Override
    public ProductOrder insertOrder(ProductOrder order) {
        return (orderDao.save(order));
    }


    @Override
    public ProductOrder setStatus(String status, int id) {
        ProductOrder productFromDatabase = null;
        try {
            productFromDatabase = orderDao.findById(id).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        if (productFromDatabase != null) {
            productFromDatabase.setId(id);
            productFromDatabase.setStatus(status);
            orderDao.save(productFromDatabase);
        }

        return productFromDatabase;
    }

    @Override
    public void deleteOrder(int id) {
        orderDao.deleteById(id);
    }
}
