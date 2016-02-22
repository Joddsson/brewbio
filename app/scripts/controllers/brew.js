'use strict';

/**
 * @ngdoc function
 * @name brewbioApp.controller:BrewctrlCtrl
 * @description
 * # BrewctrlCtrl
 * Controller of the brewbioApp
 */
angular.module('brewbioApp')
  .controller('BrewCtrl', function ($scope, brewfactory) {
    $scope.homeBrews = brewfactory.getBrews();
    $scope.brewImage = '../../images/placeholder.jpg';
  });
