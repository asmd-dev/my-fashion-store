/**
 * Factory: EmailFactory
 */
angular.module('FashionStoreApp')
  .factory('ProductsFactory', function ProductsFactory($q, $http, $routeParams) {
      'use strict';
      var exports = {};

      exports.getProducts = function (params) {

          var deferred = $q.defer();
          $http.get('mock-api-responses/get-products-list.json')
            .success(function (data) {
                var hits = localStorage.getItem('APIhits');
                localStorage.setItem("APIhits", hits === null ? 0 : ++hits);
                exports.apiHits = hits;
                exports.products = data.products;
                deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });
          return deferred.promise;

      };

      return exports;
  });
