package com.example.InternetShop.service.product;

import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;

public interface iProductService {
    ProductPageDTO getAllProducts(PageRequest pageRequest);

    ProductPageDTO getAllProductsByCategory(PageRequest pageRequest, String category);

    ProductPageDTO getAllProductsByProductName(PageRequest pageRequest, String productName);

    Product getOneProduct(int id);

    Resource getProductImage(String imageId);

    Path load(String filename);

    Product saveProduct(MultipartFile file, String product);


    Product updateProduct(MultipartFile file, String product, int id);

    void deleteProduct(int id);
}
