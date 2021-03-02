package com.example.InternetShop.service.componentValue;

import com.example.InternetShop.entity.ComponentValue;

import java.util.List;

public interface IComponentValueService {
    List<ComponentValue> getAllComponentValues();

    ComponentValue getOneComponentValue(int id);

    ComponentValue insertComponentValue(ComponentValue componentValue);

    ComponentValue updateComponentValue(ComponentValue componentValue);

    void deleteComponentValue(int id);
}
