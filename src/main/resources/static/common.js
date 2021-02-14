(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "ZO+i":
/*!********************************************************************!*\
  !*** ./src/app/product-module/services/product-resolve.service.ts ***!
  \********************************************************************/
/*! exports provided: ProductResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolveService", function() { return ProductResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "pU8F");



class ProductResolveService {
    constructor(productService) {
        this.productService = productService;
        this.pageNumber = 0;
    }
    resolve() {
        return (this.productService.getAllProducts(this.pageNumber));
    }
}
ProductResolveService.ɵfac = function ProductResolveService_Factory(t) { return new (t || ProductResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ProductResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductResolveService, factory: ProductResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "pU8F":
/*!************************************************************!*\
  !*** ./src/app/product-module/services/product.service.ts ***!
  \************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllProducts(page) {
        return (this.httpClient.get(`http://localhost:8080/product?page=${page}`));
    }
    getAllProductsByCategory(page, category) {
        return (this.httpClient.get(`http://localhost:8080/product/${category}/?page=${page}`));
    }
    getAllProductsByName(page, name) {
        return (this.httpClient.get(`http://localhost:8080/product/name/${name}/?page=${page}`));
    }
    save(formData) {
        let token = localStorage.getItem("token");
        let tokenSTR = 'Bearer ' + token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", tokenSTR);
        return (this.httpClient.post('http://localhost:8080/product', formData, { headers }));
    }
    update(formData, id) {
        let token = localStorage.getItem("token");
        let tokenSTR = 'Bearer ' + token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", tokenSTR);
        return (this.httpClient.put(`http://localhost:8080/product/${id}`, formData, { headers }));
    }
    deleteProduct(id) {
        let token = localStorage.getItem("token");
        let tokenSTR = 'Bearer ' + token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", tokenSTR);
        return (this.httpClient.delete(`http://localhost:8080/product/${id}`, { headers }).subscribe());
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map