package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class UsersPageDTO {
    private List <UserDTO> usersList;
    private long totalElements;
    private  int totalPages;
    private int pageSize;

}
