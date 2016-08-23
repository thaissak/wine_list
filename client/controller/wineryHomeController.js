app.controller('wineryHomeController', ['$scope', 'wineryFactory', '$routeParams', '$location', '$cookies', function($scope, wineryFactory, $routeParams, $location, $cookies){

	$scope.wineries = [];
	var userId = $cookies.get('user_id');


	wineryFactory.getAllWineries(userId,function(wineryList){
		console.log('getting all wineries controller', wineryList);
		if(wineryList.msg){
			$scope.msg = wineryList.msg;
		}
		else{
			$scope.wineries = wineryList;
			console.log('wineries list:', $scope.wineries);
		}
		
	});

}]);