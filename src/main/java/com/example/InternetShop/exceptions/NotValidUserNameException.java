package com.example.InternetShop.exceptions;

public class NotValidUserNameException extends RuntimeException {
    public NotValidUserNameException(String s) {
        super(s);
    }
}
