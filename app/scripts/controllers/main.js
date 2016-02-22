'use strict';

/**
 * @ngdoc function
 * @name brewbioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the brewbioApp
 */
angular.module('brewbioApp')
  .controller('MainCtrl', function ($scope, $mdDialog, brewstyleFactory) {
    $scope.brews = brewstyleFactory.brewstyles;
    $scope.brewImage = '../../images/placeholder.jpg';

    $scope.openBrewstyleModal = function() {
      $mdDialog.show({
        templateUrl: '../../views/addBrewstyleModal.html',
        clickOutsideToClose: true
      });
    };

    $scope.addBrewStyle = function() {
      console.log($scope.brewBio.brewstyle);
      var brewStyle = {
        brewStyleImage: '../../app/images/BARLEYWINE',
        brewStyle: $scope.brewBio.brewstyle,
        brewDiscription: $scope.brewBio.discription
      };

      brewstyleFactory.addBrewstyle(brewStyle);
      $mdDialog.hide();
    };
  });
