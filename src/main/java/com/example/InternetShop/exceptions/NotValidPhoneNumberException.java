package com.example.InternetShop.exceptions;

public class NotValidPhoneNumberException extends RuntimeException {
    public NotValidPhoneNumberException(String s) {
        super(s);
    }
}
