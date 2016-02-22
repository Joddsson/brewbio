'use strict';

/**
 * @ngdoc service
 * @name brewbioApp.brewstyleFactory
 * @description
 * # brewstyleFactory
 * Factory in the brewbioApp.
 */
angular.module('brewbioApp')
  .factory('brewstyleFactory', function () {
    var baseImagePath = '../../app/images/';

    return {
      brewstyles:
      [
        {
          brewStyleImage: baseImagePath + 'IPA',
          brewStyle: 'IPA',
          brewStyleDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
        },
        {
          brewStyleImage: baseImagePath + 'STOUT',
          brewStyle: 'Stout',
          brewStyleDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
        },
        {
          brewStyleImage: baseImagePath + 'BARLEYWINE',
          brewStyle: 'Barleywine',
          brewStyleDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
        },
        {
          brewStyleImage: baseImagePath + 'IPA',
          brewStyle: 'IPA',
          brewStyleDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.'
        },
        {
          brewStyleImage: baseImagePath + 'STOUT',
          brewStyle: 'Stout',
          brewStyleDiscription: 'Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.',
        }
      ],

      addBrewstyle: function(brewstyle) {
        this.brewstyles.push(brewstyle);
      }
    };
  });
