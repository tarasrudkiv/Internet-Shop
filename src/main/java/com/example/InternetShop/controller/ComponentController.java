package com.example.InternetShop.controller;

import com.example.InternetShop.entity.Component;
import com.example.InternetShop.service.component.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Component insertComponent(@RequestBody Component component) {
        return (componentService.insertComponent(component));
    }
    @PutMapping(value = "{/id}")
    public Component updateComponent(@PathVariable int id, @RequestBody Component component ){
        component.setId(id);
        componentService.updateComponent(component);
        return (component);
    }
    @DeleteMapping(value = "/{id}")
    public  void deleteComponent(@PathVariable int id){
        componentService.deleteComponent(id);
    }
}
