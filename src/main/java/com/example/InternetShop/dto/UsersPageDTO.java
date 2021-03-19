package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersPageDTO {
    private List<UserDTO> usersList;
    private long totalElements;
    private int totalPages;
    private int pageSize;

}
