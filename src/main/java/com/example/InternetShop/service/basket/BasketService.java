package com.example.InternetShop.service.basket;

import com.example.InternetShop.dao.BasketDao;
import com.example.InternetShop.dto.BasketPageDTO;
import com.example.InternetShop.entity.Basket;
import com.example.InternetShop.exceptions.ProductAlreadyInBasketException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class BasketService implements IBasketService {
    @Autowired
    private BasketDao basketDao;

    @Override
    public Basket saveProductToBasket(Basket productForBasket) {
        if (basketDao.findByProductIdAndUserId(productForBasket.getProductId(), productForBasket.getUserId()) != null) {
            throw new ProductAlreadyInBasketException("The product is already in the basket");
        } else {
            return basketDao.save(productForBasket);
        }
    }

    @Override
    public BasketPageDTO getProductsFromBasket(int userId, PageRequest pageRequest) {
        final Page<Basket> productPage = basketDao.getProductsByUserid(userId, pageRequest);
        return new BasketPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }

    @Override
    public void deleteProduct(int id) {
        basketDao.deleteById(id);
    }

}
