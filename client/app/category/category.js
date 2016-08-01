'use strict';

angular.module('exposeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });