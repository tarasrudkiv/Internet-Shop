package com.example.InternetShop.exceptions;

public class ProductAlreadyInBasketException extends RuntimeException {
    public ProductAlreadyInBasketException(String s) {
        super(s);
    }
}
