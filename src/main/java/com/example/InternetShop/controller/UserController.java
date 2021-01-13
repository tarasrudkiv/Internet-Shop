package com.example.InternetShop.controller;

import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UsersPageDTO getAllUsers(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                userService.getAllUsers(pageRequest)
        );
    }

    @GetMapping("/{id}")
    public User getOneUser(@PathVariable int id) {
        return (
                userService.getOneUser(id)
        );
    }

    @PostMapping()
    public User insertUser(@RequestBody User user) {
        return (userService.insertUser(user));
    }

    @PutMapping(value = "/{id}")
    public User updateUser(@RequestBody User user, @PathVariable int id) {
        user.setId(id);
        userService.updateUser(user);
        return (user);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
