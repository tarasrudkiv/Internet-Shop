package com.example.InternetShop.service.user;

import com.example.InternetShop.dto.UserRoleDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import org.springframework.data.domain.PageRequest;

public interface iUserService {
     String createUser(User user);
     UsersPageDTO getAllUsers(PageRequest pageRequest);
     User getUserByUserName(String name);
     UserRoleDTO getUserRoleByUserName(String name);

//    public User updateUser(User user);
//    public void deleteUser(int id);
}
