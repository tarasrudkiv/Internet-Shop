package com.example.InternetShop.service.product;

import com.example.InternetShop.dao.ProductDao;
import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.exceptions.NotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@Slf4j
public class ProductService implements iProductService {
    @Autowired
    ProductDao productDao;

    @Override
    public ProductPageDTO getAllProducts(PageRequest pageRequest) {
        final Page<Product> productPage = productDao.findAll(pageRequest);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }
    @Override
    public ProductPageDTO getAllProductsByCategory(PageRequest pageRequest,String category) {
        final Page<Product> productPage = productDao.findByCategoryName(category, pageRequest);
        System.out.println(category);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }
    @Override
    public ProductPageDTO getAllProductsByCProductName(PageRequest pageRequest,String productName) {
        final Page<Product> productPage = productDao.findByProductName(productName, pageRequest);
        System.out.println(productName);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }

    @Override
    public Product getOneProduct(int id) {
        return productDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public byte[] getProductImage(int id) {
        return productDao.findById(id).orElseThrow(NotFoundException::new).getImage();
    }

    @Override
    public Product saveProduct(MultipartFile file, String product) {
        Product productForReturn = null;
        try {
            Product productForSave = new ObjectMapper().readValue(product, Product.class);
            productForSave.setImage(file.getBytes());
            productDao.save(productForSave);
            productForReturn = productForSave;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return productForReturn;
    }

    @Override
    public Product updateProduct(MultipartFile file, String product, int id) {
        Product productForReturn = null;
        try {
            Product productForUpdate = new ObjectMapper().readValue(product, Product.class);
            productForUpdate.setId(id);
            if (file == null) {
                Product productFromDatabase = productDao.findById(id).orElseThrow(NotFoundException::new);
                byte[] img = productFromDatabase.getImage();
                productForUpdate.setImage(img);
            } else {
                productForUpdate.setImage(file.getBytes());
            }
            productDao.save(productForUpdate);
            productForReturn = productForUpdate;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return productForReturn;
    }

    @Override
    public void deleteProduct(int id) {
        productDao.deleteById(id);
    }
}