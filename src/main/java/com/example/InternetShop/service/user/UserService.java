package com.example.InternetShop.service.user;

import com.example.InternetShop.dao.UserDao;
import com.example.InternetShop.dto.UserDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.exceptions.NotFoundException;
import com.example.InternetShop.exceptions.NotValidEmailException;
import com.example.InternetShop.exceptions.NotValidPhoneNumberException;
import com.example.InternetShop.exceptions.NotValidUserNameException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    public String createUser(User user) {
        this.checkUser(user);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User userFromDatabase = userDao.save(user);
        int userId = userFromDatabase.getId();
        if (userId == 1) {
            userFromDatabase.setRole("ROLE_ADMIN"); //first registered user gets the admin role
        } else {
            userFromDatabase.setRole("ROLE_USER");
        }
        userDao.save(userFromDatabase);
        return userFromDatabase.getUsername();
    }

    @Override
    public User updateUser(User user, int id) {
        this.checkUserForUpdate(user);
        User userFromDatabase = userDao.findById(user.getId()).orElseThrow(NotFoundException::new);
        user.setPassword(userFromDatabase.getPassword());
        user.setRole(userFromDatabase.getRole());
        return userDao.save(user);
    }


    @Override
    public UsersPageDTO getAllUsers(PageRequest pageRequest) {
        final Page<User> userPage = userDao.findAll(pageRequest);
        List<UserDTO> userDTOS = new ArrayList<>();
        List<UserDTO> userDtoList = convertUserListToUserDtoList(userPage.getContent(), userDTOS);
        System.out.println(new UsersPageDTO(userDtoList, userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize()));
        return new UsersPageDTO(userDtoList, userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize());

    }

    @Override
    public UsersPageDTO getAllUsersByUserName(PageRequest pageRequest, String userName) {
        final Page<User> userPage = userDao.findByUsername(userName, pageRequest);
        List<UserDTO> userDTOS = new ArrayList<>();
        List<UserDTO> userDtoList = convertUserListToUserDtoList(userPage.getContent(), userDTOS);
        return new UsersPageDTO(userDtoList, userPage.getTotalElements(), userPage.getTotalPages(), userPage.getSize());
    }

    @Override
    public UserDTO getUserByUserName(String name) {
        final User user = userDao.findByUsername(name);
        return new UserDTO(user.getId(), user.getFirstName(), user.getLastName(), user.getUsername(), user.getPhoneNumber(), user.getEmail(), user.getRole());
    }

    @Override
    public User changeRole(String role, int id) {
        User userFromDatabase = null;
        try {
            userFromDatabase = userDao.findById(id).orElseThrow(NotFoundException::new);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        if (userFromDatabase != null) {
            userFromDatabase.setId(id);
            userFromDatabase.setRole(role);
            userDao.save(userFromDatabase);
        }

        return userFromDatabase;
    }

    @Override
    public List<UserDTO> convertUserListToUserDtoList(List<User> users, List<UserDTO> userDTOS) {
        for (User user : users) {
            UserDTO userDTO = new UserDTO(user.getId(), user.getFirstName(), user.getLastName(), user.getUsername(), user.getPhoneNumber(), user.getEmail(), user.getRole());
            userDTOS.add(userDTO);
        }
        return userDTOS;
    }

    @Override
    public void checkUser(User user) {
        if (userDao.findByUsername(user.getUsername()) != null) {
            throw new NotValidUserNameException("User with this username is already registered");
        }
        if (userDao.findByPhoneNumber(user.getPhoneNumber()) != null) {
            throw new NotValidPhoneNumberException("User with this phone number is already registered");
        }
        if (userDao.findByEmail(user.getEmail()) != null) {
            throw new NotValidEmailException("User with this email is already registered");
        }
    }

    @Override
    public void checkUserForUpdate(User user) {
        if (userDao.findByUsernameAndNotById(user.getId(), user.getUsername()) != null) {
            throw new NotValidUserNameException("User with this username is already registered");
        }
        if (userDao.findByPhoneNumberAndNotById(user.getId(), user.getPhoneNumber()) != null) {
            throw new NotValidPhoneNumberException("User with this phone number is already registered");
        }
        if (userDao.findByEmailAndNotById(user.getId(), user.getEmail()) != null) {
            throw new NotValidEmailException("User with this email is already registered");
        }
    }
}
