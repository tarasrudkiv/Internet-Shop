package com.example.InternetShop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin("http://localhost:4200")
@Controller
public class MainController {
    @GetMapping("/")
    public String home() {
        return "index.html";
    }
}
