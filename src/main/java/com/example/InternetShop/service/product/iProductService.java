package com.example.InternetShop.service.product;

import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Path;

public interface iProductService {
    public ProductPageDTO getAllProducts(PageRequest pageRequest);

    public ProductPageDTO getAllProductsByCategory(PageRequest pageRequest, String category);
    public ProductPageDTO getAllProductsByCProductName(PageRequest pageRequest, String productName);

    public Product getOneProduct(int id);

    public byte[] getProductImage(int id);

    public Product saveProduct(MultipartFile file, String product);

    public Product updateProduct(MultipartFile file, String product, int id);

    public void deleteProduct(int id);
}
