var angularApp = angular.module('SvcWeb', ['ui.bootstrap','ngRoute','ngAnimate','ngSanitize']);
angularApp.controller('MainDefaultController', ['$scope', '$location', '$rootScope','$http', '$timeout', function($scope, $location, $rootScope, $http, $timeout){
  'use strict';

  $scope.oneAtATime =false;
  $scope.totalItems = 0;
  $scope.currentPage = 1;
  $scope.itemsPerPage =  5;
  $scope.maxSize = 5;
  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
  //start carousel
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(img) {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: img,
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 3; i++) {
    var images = new Array("./upload/img/ball-de-gitanes-svc.jpg","./upload/img/capcelera.jpg","./upload/img/parc-b.jpg");
    $scope.addSlide(images[i]);
  }
  //end carrousel

  $scope.initApp = function(){
    $rootScope.flag = false;
    $rootScope.session = false;
    $rootScope.accio = "login";
    /*$http({
      method:"POST",
      url:"getAllElements"
    }).then(function(results){
      $scope.posts = results.data;
      $scope.totalItems = $scope.posts.length;
      console.log(results.data);
    });
    */
  };

  function setTimeout(){
    $rootScope.flag = false;
    $rootScope.printFlag = false;
  }

  $scope.setPage = function(pageNo){
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function(){
    $log.log('Pagina canviada a :'+$scope.currentPage);
  };

}]).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
  'use strict';
  $locationProvider.html5Mode('true');
}]);
