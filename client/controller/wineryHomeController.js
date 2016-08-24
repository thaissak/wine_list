app.controller('wineryHomeController', ['$scope', 'wineryFactory', '$routeParams', '$location', '$cookies', function($scope, wineryFactory, $routeParams, $location, $cookies){

	$scope.wineries = [];
	var userId = $cookies.get('user_id');


	wineryFactory.getAllWineries(userId,function(wineryList){
		console.log('getting all wineries controller', wineryList);
		if(wineryList.msg){
			$scope.msg = wineryList.msg;
			$scope.show = false;
		}
		else{
			// for(var i = 0; i<wineryList.length; i++){
			// 	for (var prop in wineryList[i]) {
			// 		if (prop == 'null') {
			// 			prop = '';
			// 		}
			// 	}
			// }

			for(var i = 0; i<wineryList.length; i++){
				var winery = wineryList[i];
				Object.keys(winery).map(function(value, index){
					if (winery[value] == 'null') {
						winery[value] = null;
					}
				});
			}

			// console.log('after:', wineryList);
			// $scope.winery = wineryList;

			$scope.wineries = wineryList;
			$scope.show = true;
			console.log('wineries list:', $scope.wineries);
		}
		
	});

}]);