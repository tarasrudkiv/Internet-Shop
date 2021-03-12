package com.example.InternetShop.controller;

import com.example.InternetShop.dto.ErrorResponse;
import com.example.InternetShop.exceptions.*;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorController {
    @ExceptionHandler(ProductAlreadyInBasketException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleProductAlreadyInBasketException(ProductAlreadyInBasketException ex) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", ex.getMessage());
    }

    @ExceptionHandler(NotValidUserNameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleNotValidUserNameException(NotValidUserNameException ex) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", ex.getMessage());
    }

    @ExceptionHandler(NotValidPhoneNumberException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleNotValidPhoneNumberException(NotValidPhoneNumberException ex) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", ex.getMessage());
    }

    @ExceptionHandler(NotValidEmailException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleNotValidEmailException(NotValidEmailException ex) {
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        FieldError fieldError = ex.getBindingResult().getFieldError();
        String message = "Field " + fieldError.getField() + "-" + fieldError.getDefaultMessage();
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", message);
    }

    @ExceptionHandler(BlankFieldException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBlankFieldException(BlankFieldException ex) {
        String message = ex.getMessage();
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "invalid input data", message);
    }
}
