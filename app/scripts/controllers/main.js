'use strict';


angular.module('alekNgApp')
  .controller('MainCtrl', ['$anchorScroll', '$location', '$scope',
  function ($anchorScroll, $location, $scope) {
    $scope.scrollTo = function(x) {
      if ($location.hash() !== x ) {
        $location.hash(x);
      } else {
        $anchorScroll();
      }
    };
  }
]);



$(document).on("ready", function() {
  $(document).on("scroll", onScroll);
});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    for (var i = - 1 ; i < $(".timeline").children().length - 1; i++) {
        var currNode = $(".timeline").children().eq(i + 1);
        var refElement = currNode.children().eq(0);
        if (typeof(refElement.offset()) === "undefined") {
          console.log("this");
        }
        if (refElement.offset().top <= scrollPos + 350 && refElement.offset().top + refElement.height() - 100 > scrollPos) {
          $(".timeline").children().eq(i).removeClass("current");
          i++
          $(".timeline").children().eq(i).addClass("current");
          } else {
            currNode.removeClass("current");
        }
    };
}

 
