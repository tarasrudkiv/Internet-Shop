package com.example.InternetShop.controller;

import com.example.InternetShop.dto.BasketPageDTO;
import com.example.InternetShop.dto.OrderPageDTO;
import com.example.InternetShop.entity.ProductOrder;
import com.example.InternetShop.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderController {
    OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public OrderPageDTO getAllOrders(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (this.orderService.getAllOrders(pageRequest));
    }

    @GetMapping(value = "/{userName}")
    public OrderPageDTO getAllOrdersOfOneUser(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size, @PathVariable String userName) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (this.orderService.getAllOrdersOfOneUser(userName, pageRequest));
    }

    @GetMapping(value = "find/{keyword}")
    public OrderPageDTO findOrder(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size, @PathVariable String keyword) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (this.orderService.findOrder(keyword, pageRequest));
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductOrder insertOrder(@RequestBody @Valid ProductOrder order) {
        return (
                orderService.insertOrder(order)
        );
    }

    @PutMapping("/status/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ProductOrder setStatus(@RequestBody String status, @PathVariable int id) {
        return (orderService.setStatus(status, id));
    }

    @DeleteMapping(value = "/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable int id) {
        orderService.deleteOrder(id);
    }
}
