angular.module('store', []).
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/libros', {
		  templateUrl: 'todos-libros.html',
		  controller: StoreController
		  }).
      when('/libro/:libroId', {
		  templateUrl: 'libro.html',
		  controller: BooksController
		  }).
      otherwise({
		  redirectTo: '/libros'});


}]);

  