package com.example.InternetShop.service.component;

import com.example.InternetShop.dao.ComponentDao;
import com.example.InternetShop.entity.Component;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentService implements IComponentService {
    @Autowired
    ComponentDao componentDao;

    @Override
    public List<Component> getAllComponents() {
        return (componentDao.findAll());
    }

    @Override
    public Component getOneComponent(int id) {
        return componentDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Component insertComponent(Component component) {
        return componentDao.save(component);
    }

    @Override
    public Component updateComponent(Component component) {
        return componentDao.save(component);
    }


    @Override
    public void deleteComponent(int id) {
        componentDao.deleteById(id);
    }
}
