function StoreController($scope, $http) {
  $http.get('json-lib/libros.json').success(function(data) {
	$scope.libros = data;
  });
    
  $scope.orderField = "id";
}