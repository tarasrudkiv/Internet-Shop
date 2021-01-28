package com.example.InternetShop.service.user;

import com.example.InternetShop.dao.UserDao;
import com.example.InternetShop.dto.UserRoleDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
//@AllArgsConstructor
public class UserService implements iUserService, UserDetailsService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username);
    }

    @Override
    public String createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (!user.getRole().startsWith("ROLE_")) {
            throw new RuntimeException("User role should start with 'ROLE_' ");
        }
        User savedUser = userDao.save(user);

        return savedUser.getUsername();
    }


    @Override
    public UsersPageDTO getAllUsers(PageRequest pageRequest) {
        final Page<User> userPage = userDao.findAll(pageRequest);
        return new UsersPageDTO(userPage.getContent(), userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize());
    }


    @Override
    public User getUserByUserName(String name) {
        return userDao.findByUsername(name);
    }

    @Override
    public UserRoleDTO getUserRoleByUserName(String name) {
      User user= userDao.findByUsername(name);
      return new UserRoleDTO(user.getRole());
    }

    //
//    @Override
//    public User updateUser(User user) {
//        return userDao.save(user);
//    }
//
//
//    @Override
//    public void deleteUser(int id) {
//        userDao.deleteById(id);
//    }

}
