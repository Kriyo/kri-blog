'use strict';

angular.module('ngkriApp')
  .controller('carouselCtrl', function ($scope) {

    function carouselSlider($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'http://lorempixel.com/400/200/'
      },
      {
        image: 'http://lorempixel.com/400/200/food'
      },
      {
        image: 'http://lorempixel.com/400/200/sports'
      },
      {
        image: 'http://lorempixel.com/400/200/people'
      }
    ];
  }
  });

  //, ['ui.bootstrap']
