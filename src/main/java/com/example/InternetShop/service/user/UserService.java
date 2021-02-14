package com.example.InternetShop.service.user;

import com.example.InternetShop.dao.UserDao;
import com.example.InternetShop.dto.UserDTO;
import com.example.InternetShop.dto.UserRoleDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.exceptions.NotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONStringer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.NotActiveException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements iUserService, UserDetailsService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }

    //    @Override
//    public String createUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        if (!user.getRole().startsWith("ROLE_")) {
//            throw new RuntimeException("User role should start with 'ROLE_' ");
//        }
//        User userFromDatabase = userDao.save(user);
//
//        return userFromDatabase.getUsername();
//    }
    @Override
    public String createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User userFromDatabase = userDao.save(user);
        int userId = userFromDatabase.getId();
        if (userId == 1) {
            userFromDatabase.setRole("ROLE_MAIN_ADMIN");
        } else {
            userFromDatabase.setRole("ROLE_USER");
        }
        userDao.save(userFromDatabase);
        return userFromDatabase.getUsername();
    }


        @Override
    public UsersPageDTO getAllUsers(PageRequest pageRequest) {
        final Page<User> userPage = userDao.findAll(pageRequest);
        return new UsersPageDTO(userPage.getContent(), userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize());
    }
//    @Override
//    public UsersPageDTO getAllUsers(PageRequest pageRequest) {
//        final Page<User> userPage = userDao.findAll(pageRequest);
//        User user = new User();
//        UserDTO userDTO = new UserDTO(user.getId(), user.getUsername(),user.getPhoneNumber(),user.getEmail(),user.getRole());
//        List<UserDTO> userList = new ArrayList<>();
//        return new UsersPageDTO(userList,userPage.getTotalElements(),userPage.getTotalPages(),userPage.getSize());
//    }

    @Override
    public User getUserByUserName(String name) {
        return userDao.findByUsername(name);
    }

//    @Override
//    public UserRoleDTO getUserRoleByUserName(String name) {
//        User user = userDao.findByUsername(name);
//        return new UserRoleDTO(user.getRole());
//    }

    //
//    @Override
//    public String changeRole(User user, int id) {
//        User userFromDatabase = null;
//        try {
//            userFromDatabase = userDao.findById(id).orElseThrow(NotFoundException::new);
//        } catch (NotFoundException e) {
//            e.printStackTrace();
//        }
//        String password = null;
//        if (userFromDatabase != null) {
//            password = userFromDatabase.getPassword();
//        }
//        user.setId(id);
//        user.setPassword(password);
//        User savedUser = userDao.save(user);
//        return savedUser.getRole();
//    }
    @Override
    public User changeRole(String role, int id) {
        System.out.println(role);
        User userFromDatabase = null;
        try {
            userFromDatabase = userDao.findById(id).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        System.out.println(userFromDatabase);
        System.out.println(id);
        if (userFromDatabase != null) {
            userFromDatabase.setId(id);
        userFromDatabase.setRole(role);
        userDao.save(userFromDatabase);
        }
        System.out.println(userFromDatabase);

        return userFromDatabase;
    }

//
//    @Override
//    public void deleteUser(int id) {
//        userDao.deleteById(id);
//    }

}
