'use strict';

angular.module('ngkriApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutCtrl'
      });
  });
