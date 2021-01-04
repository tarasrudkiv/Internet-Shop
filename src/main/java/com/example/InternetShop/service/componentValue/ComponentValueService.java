package com.example.InternetShop.service.componentValue;

import com.example.InternetShop.dao.ComponentValueDao;
import com.example.InternetShop.entity.ComponentValue;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentValueService implements IComponentValueService {
    @Autowired
    ComponentValueDao componentValueDao;

    @Override
    public List<ComponentValue> getAllComponentValues() {
        return (componentValueDao.findAll());
    }

    @Override
    public ComponentValue getOneComponentValue(int id) {
        return componentValueDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public ComponentValue insertComponentValue(ComponentValue componentValue) {
        return componentValueDao.save(componentValue);
    }

    @Override
    public ComponentValue updateComponentValue(ComponentValue componentValue) {
        return componentValueDao.save(componentValue);
    }


    @Override
    public void deleteComponentValue(int id) {
        componentValueDao.deleteById(id);
    }
}
