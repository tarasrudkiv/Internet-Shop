package com.example.InternetShop.controller;

import com.example.InternetShop.entity.Component;
import com.example.InternetShop.service.component.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/component")
public class ComponentController {
    ComponentService componentService;

    @Autowired
    public ComponentController(ComponentService componentService) {
        this.componentService = componentService;
    }

    @GetMapping
    public List<Component> getAllComponents() {
        return (
                componentService.getAllComponents()
        );
    }

    @GetMapping("/{id}")
    public Component getOneComponent(@PathVariable int id) {
        return (
                componentService.getOneComponent(id)
        );
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Component insertComponent(@RequestBody @Valid Component component) {
        return (componentService.insertComponent(component));
    }

    @PutMapping(value = "{/id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Component updateComponent(@PathVariable int id, @RequestBody Component component) {
        component.setId(id);
        componentService.updateComponent(component);
        return (component);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComponent(@PathVariable int id) {
        componentService.deleteComponent(id);
    }
}
