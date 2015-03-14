'use strict';

/**
 * @ngdoc function
 * @name alekNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alekNgApp
 */
angular.module('alekNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.menu = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
