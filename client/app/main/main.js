'use strict';

angular.module('exposeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('category',{
        url:'/category',
        templateUrl:"app/category/category.html",
        controller:'CategoryCtrl'
      });
  });
