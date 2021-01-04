package com.example.InternetShop.service.product;
import com.example.InternetShop.dao.ProductDao;
import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements iProductService {
    @Autowired
    ProductDao productDao;
    @Override
    public ProductPageDTO getAllProducts(PageRequest pageRequest) {
       final Page<Product> productPage = productDao.findAll(pageRequest);
       return new ProductPageDTO(productPage.getContent(),productPage.getTotalElements(),productPage.getTotalPages(),productPage.getSize());
    }

    @Override
    public Product getOneProduct(int id) {
        return productDao.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Product insertProduct(Product product) {
        return productDao.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return productDao.save(product);
    }


    @Override
    public void deleteProduct(int id) {
         productDao.deleteById(id);
    }
}
