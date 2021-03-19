package com.example.InternetShop.service.order;

import com.example.InternetShop.dao.ProductOrderDao;
import com.example.InternetShop.dto.*;
import com.example.InternetShop.entity.ProductOrder;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
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
    public OrderPageDTO getAllOrdersOfOneUser(int userId, PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findOrdersByUserId(userId, pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }


    @Override
    public OrderPageDTO findOrderByStatus(String status, PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findOrderByStatus(status, pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }

    @Override
    public OrderPageDTO findOrderByProductName(String productName, PageRequest pageRequest) {
        final Page<ProductOrder> orderPage = orderDao.findOrderByProductName(productName, pageRequest);
        return (
                new OrderPageDTO(orderPage.getContent(), orderPage.getTotalElements(), orderPage.getTotalPages(), orderPage.getSize())
        );
    }

    @Override
    public ProductOrder insertOrder(ProductOrder order) {
        order.setDate(new Date(System.currentTimeMillis()));
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
    public StatisticsDataDTO getStatisticsData() {
        TotalOrdersDTO totalOrders = orderDao.getTotalOrders();
        List<NumberOfOrdersForEachCategoryDTO> orders = orderDao.getNumberOfOrdersForEachCategory();
        List<StatisticOfOrdersForEachCategoryDTO> statisticOfOrders = new ArrayList<>();
        for (NumberOfOrdersForEachCategoryDTO order : orders) {
            String orderCategory = order.getOrderCategory();
            long numberOfOrders = order.getNumberOfOrders();
            float percentageOfOrdersFloat = ((float) numberOfOrders / (float) totalOrders.getTotalOrders() * 100);
            long percentageOfOrders = (long) percentageOfOrdersFloat;
            StatisticOfOrdersForEachCategoryDTO statisticOfOrdersTemporary = new StatisticOfOrdersForEachCategoryDTO(orderCategory, numberOfOrders, percentageOfOrders);
            statisticOfOrders.add(statisticOfOrdersTemporary);
        }
        PageRequest pageRequest = PageRequest.of(0, 10);
        final Page<MostPopularProductDTO> productPage = orderDao.getMostPopularProduct(pageRequest);
        return new StatisticsDataDTO(statisticOfOrders, productPage.getContent(), totalOrders.getTotalOrders());
    }

    @Override
    public StatisticsDataDTO getStatisticsDataForPeriodOfTime(String periodOfTime) {
        long period=0;
        switch (periodOfTime) {
            case  ("year"):
                period=31536000000L;
                break;
            case ("month"):
                period=2592000000L;
                break;
            case ("week"):
                period=604800000;
                break;
            case ("day"):
                period=86400000;
                break;
            case ("hour"):
                period=3600000;
                break;
        }
        Date date = (new Date(System.currentTimeMillis() - period));
        TotalOrdersDTO totalOrders = orderDao.getTotalOrdersForPeriodOfTime(date);
        List<NumberOfOrdersForEachCategoryDTO> orders = orderDao.getNumberOfOrdersForEachCategoryForPeriodOfTime(date);
        List<StatisticOfOrdersForEachCategoryDTO> statisticOfOrders = new ArrayList<>();
        for (NumberOfOrdersForEachCategoryDTO order : orders) {
            String orderCategory = order.getOrderCategory();
            long numberOfOrders = order.getNumberOfOrders();
            float percentageOfOrdersFloat = ((float) numberOfOrders / (float) totalOrders.getTotalOrders() * 100);
            long percentageOfOrders = (long) percentageOfOrdersFloat;
            StatisticOfOrdersForEachCategoryDTO statisticOfOrdersTemporary = new StatisticOfOrdersForEachCategoryDTO(orderCategory, numberOfOrders, percentageOfOrders);
            statisticOfOrders.add(statisticOfOrdersTemporary);
        }
        PageRequest pageRequest = PageRequest.of(0, 10);
        final Page<MostPopularProductDTO> productPage = orderDao.getMostPopularProductForPeriodOfTime(date, pageRequest);
        return new StatisticsDataDTO(statisticOfOrders, productPage.getContent(), totalOrders.getTotalOrders());
    }

    @Override
    public void deleteOrder(int id) {
        orderDao.deleteById(id);
    }
}
