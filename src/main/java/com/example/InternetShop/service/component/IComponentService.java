package com.example.InternetShop.service.component;

import com.example.InternetShop.entity.Component;

import java.util.List;

public interface IComponentService {
    List<Component> getAllComponents();

    Component getOneComponent(int id);

    Component insertComponent(Component component);

    Component updateComponent(Component component);

    void deleteComponent(int id);
}
