function BooksController($scope, $http, $routeParams) {
  $scope.id = $routeParams.libroId;

  $http.get('json-lib/libro'+$scope.id+'.json').success(function(data) {
	  $scope.libro = data[0];
  });
}