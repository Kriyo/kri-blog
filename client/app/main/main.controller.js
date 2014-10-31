'use strict';

angular.module('ngkriApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.blogPosts = [];

    var updateTime = function(){
      $scope.date = new Date();
    };
    setInterval(function(){
      $scope.$apply(updateTime);
    }, 1000);
    updateTime();


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });



    $http.get('/api/blogPost').success(function(blogPosts) {
      $scope.blogPosts = blogPosts;
      socket.syncUpdates('blogPost', $scope.blogPosts);
    });

    $scope.addPost = function(){

      if($scope.newTitlePost === ''){
        return;
      }
      if($scope.newContentPost === ''){
        return;
      }
      if($scope.newTimePost === ''){
        return;
      }
      $http.post('/api/blogPost', {
        title: $scope.newTitlePost,
        content: $scope.newContentPost,
        date: $scope.date
      });
      $scope.newTitlePost = '';
      $scope.newContentPost = '';
      $scope.date = '';
    };

    $scope.deletePost = function(blogPost) {
      $http.delete('/api/blogPost/' + blogPost._id);
    };

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('blogPost');
    });
  });
  
