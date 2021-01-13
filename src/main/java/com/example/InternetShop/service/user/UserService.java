package com.example.InternetShop.service.user;

import com.example.InternetShop.dao.UserDao;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class UserService implements iUserService {
    @Autowired
    UserDao userDao;

    @Override
    public UsersPageDTO getAllUsers(PageRequest pageRequest) {
        final Page<User> userPage = userDao.findAll(pageRequest);
        return new UsersPageDTO(userPage.getContent(), userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize());
    }

    @Override
    public User getOneUser(int id) {
        return userDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public User insertUser(User user) {
        return userDao.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userDao.save(user);
    }


    @Override
    public void deleteUser(int id) {
        userDao.deleteById(id);
    }
}
