app.controller('wineHomeController', ['$scope', 'wineFactory', '$routeParams', '$location', '$cookies', function($scope, wineFactory, $routeParams, $location, $cookies){

	$scope.wines = [];
	var userId = $cookies.get('user_id');


	wineFactory.getAllWines(userId,function(wineList){
		console.log('getting all wines controller', wineList);
		if(wineList.msg){
			$scope.msg = wineList.msg;
			$scope.show = false;
		}
		else{
			$scope.wines = wineList;
			$scope.show = true;
			console.log('wine list:', $scope.wines);
		}
		
	});

}]);