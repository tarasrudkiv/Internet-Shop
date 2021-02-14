package com.example.InternetShop.service.user;

import com.example.InternetShop.dto.UserRoleDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import org.springframework.data.domain.PageRequest;

public interface iUserService {
    String createUser(User user);

    UsersPageDTO getAllUsers(PageRequest pageRequest);

    User getUserByUserName(String name);
//     UserRoleDTO getUserRoleByUserName(String name);

//    public String changeRole(User user, int id);
    public User changeRole(String role, int id);
//    public void deleteUser(int id);
}
