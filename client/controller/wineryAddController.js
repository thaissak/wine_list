app.controller('wineryAddController', ['$scope', 'wineryFactory', '$routeParams', '$location', '$cookies', function($scope, wineryFactory, $routeParams, $location, $cookies){

	$scope.winery = [];
	$scope.userId = $cookies.get('user_id');

	$scope.addWinery = function(){
		console.log('user id:', $scope.userId, 'winery info:', $scope.newWinery);
		$scope.newWinery.user_id = $scope.userId;
		wineryFactory.addWinery($scope.newWinery,function(data){
			$scope.winery = data;
			console.log("in addWinery controller", data);
			$location.path('/Wineries');
		})
	};

}]);