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
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewStyleImage: baseImagePath + 'STOUT',
        brewStyle: 'Stout',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewStyleImage: baseImagePath + 'BARLEYWINE',
        brewStyle: 'Barleywine',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
      },
      {
        brewStyleImage: baseImagePath + 'IPA',
        brewStyle: 'IPA',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewStyleImage: baseImagePath + 'STOUT',
        brewStyle: 'Stout',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
      }
    ];

    $scope.rowspan = Math.round(($scope.brews.length)/3);
    console.log($scope.rowspan);
  });
