angular.module('FashionStoreApp')
  .directive('productlist', function ProductListDrctv() {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/components/products-listings/directives/product.tmpl.html",
      controllerAs: 'productlist',

      controller: function (ProductsFactory) {
        this.products = [];

          ProductsFactory.getProducts()
          .then(angular.bind(this, function then() {
              this.apiHits = ProductsFactory.apiHits;
              this.products = ProductsFactory.products;
            }) );

      }
    }
  });