'use strict';

/**
 * @ngdoc overview
 * @name brewbioApp
 * @description
 * # brewbioApp
 *
 * Main module of the application.
 */
angular
  .module('brewbioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:brewStyle', {
        templateUrl: 'views/brew.html',
        controller: 'BrewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // Remove # from URL.
      $locationProvider.html5Mode(true);
  });
