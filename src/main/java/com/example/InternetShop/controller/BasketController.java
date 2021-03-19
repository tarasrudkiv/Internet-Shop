package com.example.InternetShop.controller;

import com.example.InternetShop.dto.BasketPageDTO;
import com.example.InternetShop.entity.Basket;
import com.example.InternetShop.service.basket.BasketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/basket")
public class BasketController {
    BasketService basketService;

    @Autowired
    public BasketController(BasketService basketService) {
        this.basketService = basketService;
    }

    @GetMapping(value = "/{userId}")
    public BasketPageDTO getProductsFromBasket(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "25") int size, @PathVariable int userId) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (basketService.getProductsFromBasket(userId, pageRequest));
    }


    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Basket saveProductToBasket(@RequestBody @Valid Basket productForBasket) {
        return basketService.saveProductToBasket(productForBasket);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProductFromBasket(@PathVariable int id) {
        basketService.deleteProduct(id);
    }


}
