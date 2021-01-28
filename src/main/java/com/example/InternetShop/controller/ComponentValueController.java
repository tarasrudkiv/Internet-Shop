package com.example.InternetShop.controller;

import com.example.InternetShop.entity.ComponentValue;
import com.example.InternetShop.service.componentValue.ComponentValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/componentValue")
public class ComponentValueController {
    ComponentValueService componentValueService;

    @Autowired
    public ComponentValueController(ComponentValueService componentValueService) {
        this.componentValueService = componentValueService;
    }

    @GetMapping
    public List<ComponentValue> getAllComponentValues() {
        return (
                componentValueService.getAllComponentValues()
        );
    }

    @GetMapping("/{id}")
    public ComponentValue getOneComponentValue(@PathVariable int id) {
        return (
                componentValueService.getOneComponentValue(id)
        );
    }

    @PostMapping()
    public ComponentValue insertComponentValue(@RequestBody ComponentValue componentValue) {
        return (componentValueService.insertComponentValue(componentValue));
    }

    @PutMapping(value = "{/id}")
    public ComponentValue updateComponentValue(@PathVariable int id, @RequestBody ComponentValue componentValue) {
        componentValue.setId(id);
        componentValueService.updateComponentValue(componentValue);
        return (componentValue);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteComponentValue(@PathVariable int id) {
        componentValueService.deleteComponentValue(id);
    }
}
