'use strict';

angular.module('ngkriApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {

    // Arrays for thumbnails and posts
    $scope.awesomeThings = [];
    $scope.blogPosts = [];

    // Auth for ng-show
    $scope.isAdmin = Auth.isAdmin;

    // Dynamic Clock.
    var updateTime = function(){
      $scope.date = new Date();
    };
    setInterval(function(){
      $scope.$apply(updateTime);
    }, 1000);
    updateTime();


    // API Request to populate tooltip thumbs.
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    // Add a new thumb
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    // Delete a thumb
    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });


    // API request for pulling in the blogposts
    $http.get('/api/blogPost').success(function(blogPosts) {
      //console.log(blogPosts._id.getTimestamp() );
      $scope.blogPosts = blogPosts;
      socket.syncUpdates('blogPost', $scope.blogPosts);
    });

    $scope.addPost = function(blogPosts){
      //$scope.postDate = blogPost._id;

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
      $scope.time = '';
    };

    $scope.deletePost = function(blogPost) {
      $http.delete('/api/blogPost/' + blogPost._id);
    };

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('blogPost');
    });
  });
