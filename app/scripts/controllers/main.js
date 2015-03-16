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


$(document).on("ready", function() {
  $(document).on("scroll", onScroll);
});




// function goingDown(i) {
//    $(".timeline").children().eq(i).removeClass("current");
//     i++
//    $(".timeline").children().eq(i).addClass("current");
// }

// function goingUp(i) {
//    $(".timeline").children().eq(i).removeClass("current");
//     i = i - 1
//    $(".timeline").children().eq(i).addClass("current");
// }

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    for (var i = 0; i < $(".timeline").children().length; i++) {
    //$(".timeline").children().each(function () {
    //    var currNode = $(this);
        var currNode = $(".timeline").children().eq(i);
        var refElement = currNode.children().eq(0);
        if (refElement.offset().top <= scrollPos + 150 && refElement.offset().top + refElement.height() > scrollPos) {
          // if(i == 0) {
          //   $(".timeline").children().eq(i).addClass("current");
          // } else {
          $(".timeline").children().eq(i).removeClass("current");
          i++
          $(".timeline").children().eq(i).addClass("current");
          } else {
            currNode.removeClass("current");
        }
    };
}