package com.example.InternetShop.service.product;

import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import org.springframework.data.domain.PageRequest;

public interface iProductService {
    public ProductPageDTO getAllProducts(PageRequest pageRequest);
    public Product getOneProduct(int id);
    public Product insertProduct(Product product);
    public Product updateProduct(Product product);
    public void deleteProduct(int id);
}
