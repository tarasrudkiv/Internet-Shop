package com.example.InternetShop.service.user;

import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import org.springframework.data.domain.PageRequest;

public interface iUserService {
    public UsersPageDTO getAllUsers(PageRequest pageRequest);
    public User getOneUser(int id);
    public User insertUser(User user);
    public User updateUser(User user);
    public void deleteUser(int id);
}
