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

$(document).on('submit', "form", function (event) { 
  event.preventDefault();
  var message = {
    name: $('input#name').val(),
    email:  $('input#email').val(),
    mbody: $('textarea#message').val()
  };
  $.ajax({
    type: "POST",
    url: 'http://job-sniper.herokuapp.com/send_email',
    data: message,
    success:  function (res) {
      console.log(res);
    }
  });
});

