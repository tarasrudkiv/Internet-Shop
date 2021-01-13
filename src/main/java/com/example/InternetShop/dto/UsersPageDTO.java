package com.example.InternetShop.dto;

import com.example.InternetShop.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class UsersPageDTO {
    private List <User> usersList;
    private long totalElements;
    private  int totalPages;
    private int pageSize;

}
