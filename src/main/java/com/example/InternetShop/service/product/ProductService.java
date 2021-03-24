package com.example.InternetShop.service.product;

import com.example.InternetShop.config.StorageProperties;
import com.example.InternetShop.dao.ProductDao;
import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.exceptions.BlankFieldException;
import com.example.InternetShop.exceptions.FileNotFoundException;
import com.example.InternetShop.exceptions.NotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@Service
@Slf4j
public class ProductService implements iProductService {
    @Autowired
    ProductDao productDao;


    @Autowired
    StorageProperties storageProperties;
    Path rootFolder;

    @PostConstruct
    public void init() {
        try {
            rootFolder = Paths.get(storageProperties.getLocation()).toAbsolutePath().normalize();
            Files.createDirectory(rootFolder);
        } catch (IOException e) {
            log.error("Unable to create folder " + e.getMessage());
        }
    }

    @Override
    public ProductPageDTO getAllProducts(PageRequest pageRequest) {
        final Page<Product> productPage = productDao.findAll(pageRequest);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }

    @Override
    public ProductPageDTO getAllProductsByCategory(PageRequest pageRequest, String category) {
        final Page<Product> productPage = productDao.findByCategoryName(category, pageRequest);
        System.out.println(category);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }

    @Override
    public ProductPageDTO getAllProductsByProductName(PageRequest pageRequest, String productName) {
        final Page<Product> productPage = productDao.findByProductName(productName, pageRequest);
        return new ProductPageDTO(productPage.getContent(), productPage.getTotalElements(), productPage.getTotalPages(), productPage.getSize());
    }


    @Override
    public Product getOneProduct(int id) {
        return productDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Path load(String filename) {
        return rootFolder.resolve(filename);
    }


    @Override
    public Resource getProductImage(String imageName) {
        Path file = load(imageName);
        Resource resource = null;
        try {
            resource = new UrlResource(file.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        if (resource != null) {
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new FileNotFoundException(
                        "Could not read file: " + imageName);
            }
        }
        return resource;
    }


    @Override
    public Product saveProduct(MultipartFile file, String product) {
        Product productForSave = null;
        try {
            productForSave = new ObjectMapper().readValue(product, Product.class);
            if (productForSave.getProductName().equals("")) {
                throw new BlankFieldException("Field 'ProductName'  must not be blank");
            }
            if (productForSave.getDescription().equals("")) {
                throw new BlankFieldException("Field 'Description'  must not be blank");
            }
            if (productForSave.getPrice() <= 0) {
                throw new BlankFieldException("Field 'Price'must not be blank or zero");
            }
            if (productForSave.getStatus().equals("")) {
                throw new BlankFieldException("Field 'Status'must not be blank");
            }
            if (productForSave.getCategory().equals("")) {
                throw new BlankFieldException("Field 'Category'must not be blank");
            } else {
                Product savedProduct = productDao.save(productForSave);
                String productId = String.valueOf(savedProduct.getId());
                final String extension = Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().indexOf("."));
                String imageName = productId + extension;
                savedProduct.setImageName(imageName);
                productForSave = savedProduct;
                productDao.save(savedProduct);
                Path filePath = Paths.get(imageName).normalize();
                Files.copy(file.getInputStream(), rootFolder.resolve(filePath));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return productForSave;
    }

    @Override
    public Product updateProduct(MultipartFile file, String product, int id) {
        Product productForReturn = null;
        try {
            Product productForUpdate = new ObjectMapper().readValue(product, Product.class);
            if (productForUpdate.getProductName().equals("")) {
                throw new BlankFieldException("Field 'ProductName'  must not be blank");
            }
            if (productForUpdate.getDescription().equals("")) {
                throw new BlankFieldException("Field 'Description'  must not be blank");
            }
            if (productForUpdate.getPrice() <= 0) {
                throw new BlankFieldException("Field 'Price'must not be blank or zero");
            }
            if (productForUpdate.getStatus().equals("")) {
                throw new BlankFieldException("Field 'Status'must not be blank");
            }
            if (productForUpdate.getCategory().equals("")) {
                throw new BlankFieldException("Field 'Category'must not be blank");
            }
            productForUpdate.setId(id);
            Product productFromDatabase = productDao.findById(id).orElseThrow(NotFoundException::new);
            if (file == null) {
                productForUpdate.setImageName(productFromDatabase.getImageName());
                productDao.save(productForUpdate);
            } else {
                final String extension = Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().indexOf("."));
                Path path = Paths.get("./uploads/" + productFromDatabase.getImageName());
                String newImageName = id + extension;
                productForUpdate.setImageName(newImageName);
                productDao.save(productForUpdate);
                try {
                    Files.delete(path);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                Path filePath = Paths.get(newImageName).normalize();
                Files.copy(file.getInputStream(), rootFolder.resolve(filePath));
            }
            productForReturn = productForUpdate;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return productForReturn;
    }

    @Override
    public void deleteProduct(int id) {
        Product productToRemove = productDao.findById(id).orElseThrow(NotFoundException::new);
        Path path = Paths.get("./uploads/" + productToRemove.getImageName());
        try {
            Files.delete(path);
            productDao.deleteById(id);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}