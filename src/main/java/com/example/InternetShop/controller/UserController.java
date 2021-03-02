package com.example.InternetShop.controller;

import com.example.InternetShop.dto.AuthRequest;
import com.example.InternetShop.dto.AuthenticationResponse;
import com.example.InternetShop.dto.UserDTO;
import com.example.InternetShop.dto.UsersPageDTO;
import com.example.InternetShop.entity.User;
import com.example.InternetShop.service.JwtService;
import com.example.InternetShop.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
    UserService userService;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;


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

    @GetMapping(value = ("/name/{userName}"))
    public UsersPageDTO getAllUsersByUserName(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size, @PathVariable String userName) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                userService.getAllUsersByUserName(pageRequest, userName)
        );
    }

    @GetMapping("/{name}")
    public UserDTO getUserByUserName(@PathVariable String name) {
        return (userService.getUserByUserName(name));
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public String registerUser(@RequestBody @Valid User user) {
        System.out.println(user);
        return (userService.createUser(user));
    }

    @PostMapping("/authenticate")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthenticationResponse generateJWT(@RequestBody AuthRequest authRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        return new AuthenticationResponse(jwtService.generateToken(authRequest.getUsername()));
    }

    @PutMapping("/changeRole/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public User changeRole(@RequestBody String role, @PathVariable int id) {
        return (
                userService.changeRole(role, id));
    }
}
