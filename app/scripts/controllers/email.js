'use strict';

/**
 * @ngdoc function
 * @name alekNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alekNgApp
 */
angular.module('alekNgApp')
  .controller('EmailCtrl', function ($scope, Lightbox) {
    $scope.images= [ {msg: "Thank you, your email is on it's way. Chat soon!", 
      url: '/views/lightbox.html'
    } ];
    $scope.connectionRequest = {};
    console.log('I\'m here');
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, 0);
  };
});

angular.module('alekNgApp').config(function (LightboxProvider) {
  LightboxProvider.getResponse = function (res) {
    return res
  };
  LightboxProvider.templateUrl = '/views/lightbox.html';
});

console.log('loaded');
$(document).on('submit', "form", function (event) { 
  event.preventDefault();
  var message = {
    name: $('input#name').val(),
    email:  $('input#email').val(),
    mbody: $('textarea#message').val()
  };
  $.ajax({
    type: "GET",
    url: 'http://localhost:5858/getEmail',
    data: message,
    success:  console.log('email sent successfully'), 
  });
});
