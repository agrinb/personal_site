'use strict';

/**
 * @ngdoc function
 * @name alekNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alekNgApp
 */
angular.module('alekNgApp')
  .controller('EmailCtrl', function ($scope) {
    $scope.connectionRequest = {}
  });

console.log('loaded');
$(document).on('submit', "form", function (event) { 
  alert("submit");
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