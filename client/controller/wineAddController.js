app.controller('wineAddController', ['$scope', 'wineFactory', '$routeParams', '$location', '$cookies', function($scope, wineFactory, $routeParams, $location, $cookies){

	$scope.wine = [];
	$scope.userId = $cookies.get('user_id');

	$scope.addWine = function(){
		console.log('user id:', $scope.userId, 'wine info:', $scope.newWine);
		$scope.newWine.user_id = $scope.userId;
		wineFactory.addWine($scope.newWine,function(data){
			$scope.wine = data;
			console.log("in addWine controller", data);
			$location.path('/Wines');
		})
	};

}]);