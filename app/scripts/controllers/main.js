'use strict';

/**
 * @ngdoc function
 * @name brewbioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brewbioApp
 */
angular.module('brewbioApp')
  .controller('MainCtrl', function ($scope) {
    var baseImagePath = '../../app/images/';
    $scope.Math = window.Math;

    $scope.brews = [
      {
        brewStyleImage: baseImagePath + 'IPA',
        brewStyle: 'IPA',
        brewDiscription: 'IPA is my life, my struggle and pain itself.'
      },
      {
        brewStyleImage: baseImagePath + 'STOUT',
        brewStyle: 'Stout',
        brewDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        brewStyleImage: baseImagePath + 'BARLEYWINE',
        brewStyle: 'Barleywine',
        brewDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        brewStyleImage: baseImagePath + 'IPA',
        brewStyle: 'IPA',
        brewDiscription: 'IPA is my life, my struggle and pain itself.'
      },
      {
        brewStyleImage: baseImagePath + 'STOUT',
        brewStyle: 'Stout',
        brewDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        brewStyleImage: baseImagePath + 'BARLEYWINE',
        brewStyle: 'Barleywine',
        brewDiscription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ];

    $scope.rowspan = Math.round(($scope.brews.length)/3);
    console.log($scope.rowspan);
  });
