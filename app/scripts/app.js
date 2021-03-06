'use strict';

/**
 * @ngdoc overview
 * @name alekNgApp
 * @description
 * # alekNgApp
 *
 * Main module of the application.
 */

angular
  .module('alekNgApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/page.html',
        controller: 'MainCtrl'
      })
      .when('/lightbox', {
        templateUrl: 'views/lightbox.html',
        controller: 'EmailCtrl'
      })
      .when('/page', {
        templateUrl: 'views/page.html',
        controller: 'MainCtrl'
      })

      // .otherwise({
      //   redirectTo: '/'
      // });
  });
