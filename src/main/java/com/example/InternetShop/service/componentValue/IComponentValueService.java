package com.example.InternetShop.service.componentValue;

import com.example.InternetShop.entity.ComponentValue;

import java.util.List;

public interface IComponentValueService {
    public List<ComponentValue> getAllComponentValues();
    public ComponentValue getOneComponentValue(int id);
    public ComponentValue insertComponentValue(ComponentValue componentValue);
    public ComponentValue updateComponentValue(ComponentValue componentValue);
    public void deleteComponentValue(int id);
}
