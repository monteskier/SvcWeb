angular.module("SvcWeb")
.controller("seleccioController", ['$scope', '$location', '$http', '$rootScope', '$timeout', function($scope, $location, $http, $rootScope, $timeout ){

$scope.carregar = function(url){
  $location.path("/"+url);
};

/*$scope.getPost = function(){
  var id = $rootScope.id;
  $http({
      method:"post",
      url:"getPost",
      data:{id:id}
  }).then(function(results){
    $scope.post = results.data.data;
  });
};
*/
}]);
