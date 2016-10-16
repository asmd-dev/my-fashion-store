angular.module('FashionStoreApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ($routeProvider) {

    'use strict';

    $routeProvider
      .when('/', {
          templateUrl: 'js/components/products-listings/templates/productlist.html',
          controller: 'ProductsCtrl',
          controllerAs: 'productlist'
      }).otherwise({
          redirectTo: '/'
      });
}).run(function ($rootScope) {
    $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        console.log(event, current, previous, rejection)
    })
});