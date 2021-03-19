package com.example.InternetShop.service.basket;

import com.example.InternetShop.dto.BasketPageDTO;
import com.example.InternetShop.entity.Basket;
import org.springframework.data.domain.PageRequest;

public interface IBasketService {
    Basket saveProductToBasket(Basket productForBasket);

    BasketPageDTO getProductsFromBasket(int userId, PageRequest pageRequest);

    void deleteProduct(int id);
}
