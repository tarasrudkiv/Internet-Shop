package com.example.InternetShop.service.user;

import com.example.InternetShop.dto.UserDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface iUserService {
    String createUser(User user);

    UsersPageDTO getAllUsers(PageRequest pageRequest);

    UsersPageDTO getAllUsersByUserName(PageRequest pageRequest, String productName);

    UserDTO getUserByUserName(String name);

    User changeRole(String role, int id);

    User updateUser(User user, int id);

    List<UserDTO> convertUserListToUserDtoList(List<User> users, List<UserDTO> userDTOS);

    void checkUser(User user);
    void checkUserForUpdate(User user);

}
