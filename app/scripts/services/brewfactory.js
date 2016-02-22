'use strict';

/**
 * @ngdoc service
 * @name brewbioApp.brewfactory
 * @description
 * # brewfactory
 * Factory in the brewbioApp.
 */
angular.module('brewbioApp')
  .factory('brewfactory', function (filterFilter) {
    var baseImagePath = '../../app/images/';
    var service = [];
    var brews =
    [
      {
        brewImage: baseImagePath + 'IPA',
        brewName: 'IPA',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewImage: baseImagePath + 'STOUT',
        brewName: 'Stout',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewImage: baseImagePath + 'BARLEYWINE',
        brewName: 'Barleywine',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
      },
      {
        brewImage: baseImagePath + 'IPA',
        brewName: 'IPA',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
      },
      {
        brewImage: baseImagePath + 'STOUT',
        brewName: 'Stout',
        brewDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
      }
    ];

    service.getBrews = function() {
      var filt = filterFilter(brews, 'IPA');
      return filt;
    };

    return service;
  });
