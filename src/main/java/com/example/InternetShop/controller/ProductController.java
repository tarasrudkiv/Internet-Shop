package com.example.InternetShop.controller;

import com.example.InternetShop.dto.ProductPageDTO;
import com.example.InternetShop.entity.Product;
import com.example.InternetShop.service.product.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {
    ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ProductPageDTO getAllProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "24") int size) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                productService.getAllProducts(pageRequest)
        );
    }

    @GetMapping("/id/{id}")
    public Product getProductById(@PathVariable int id) {
        return (
                productService.getOneProduct(id)
        );
    }

    @GetMapping(value = ("/{category}"))
    public ProductPageDTO getAllProductsByCategory(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "24") int size, @PathVariable String category) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                productService.getAllProductsByCategory(pageRequest, category)
        );
    }

    @GetMapping(value = ("/name/{productName}"))
    public ProductPageDTO getAllProductsByProductName(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "24") int size, @PathVariable String productName) {
        final PageRequest pageRequest = PageRequest.of(page, size);
        return (
                productService.getAllProductsByProductName(pageRequest, productName)
        );
    }


    @GetMapping(value = ("/image/{id}"), produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getProductImage(@PathVariable int id) {
        return productService.getProductImage(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Product saveProduct(@RequestParam("file") MultipartFile file, @ModelAttribute @RequestParam("product") String product) {
        return productService.saveProduct(file, product);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Product updateProduct(@RequestBody @ModelAttribute("file") MultipartFile file,
                                 @RequestBody @RequestParam("product") String product,
                                 @PathVariable int id) {
        return (productService.updateProduct(file, product, id));
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }

}
