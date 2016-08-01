'use strict';

angular.module('exposeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('incident', {
        url: '/incident',
        templateUrl: 'app/incident/incident.html',
        controller: 'IncidentCtrl'
      });
  });