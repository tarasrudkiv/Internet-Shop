package com.example.InternetShop.controller;

import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {
    ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ProductPageDTO getAllProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                productService.getAllProducts(pageRequest)
        );
    }

    @GetMapping("/{id}")
    public Product getOneProduct(@PathVariable int id) {
        return (
                productService.getOneProduct(id)
        );
    }

    @PostMapping()
    public Product insertProduct(@RequestBody Product product) {
        return (productService.insertProduct(product));
    }

    @PutMapping(value = "/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable int id) {
        product.setId(id);
        productService.updateProduct(product);
        return (product);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}
