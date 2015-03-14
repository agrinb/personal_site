'use strict';

/**
 * @ngdoc function
 * @name alekNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alekNgApp
 */
angular.module('alekNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
