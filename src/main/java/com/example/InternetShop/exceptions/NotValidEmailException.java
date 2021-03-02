package com.example.InternetShop.exceptions;

public class NotValidEmailException extends RuntimeException {
    public NotValidEmailException(String s) {
        super(s);
    }
}
