package com.example.InternetShop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    int id;
    String userName;
    String phoneNumber;
    String email;
    String role;
}
