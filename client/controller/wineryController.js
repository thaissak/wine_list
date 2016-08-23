app.controller('wineryController', ['$scope', 'wineryFactory', '$routeParams', '$location','$cookies', function($scope, wineryFactory, $routeParams, $location, $cookies){

	$scope.winery = [];
	var wineryId = $routeParams.id;
	var userId = $cookies.get('user_id');

	wineryFactory.wineryInfo(userId, wineryId, function(wineryData){
		console.log('getting one winery controller', 'user id:', userId, 'winery id:', wineryId, 'data:', wineryData);
		$scope.winery = wineryData;

	});

	$scope.deleteWinery = function(){
		console.log('delete winery controller', $scope.winery.id);
		wineryFactory.deleteWinery(userId, wineryId, function(data){
			if(data.deletion==true){
				console.log('winery deleted successfully');
				$location.path('/Wineries');
			}
			else{
				$scope.error = "There was an error deleting this winery. Please try again.";
			}
		})
	};

	$scope.updateWinery = function(){
		console.log('update winery controller', userId, $scope.winery);
		wineryFactory.updateWinery(userId, $scope.winery, function(data){
			if(data.update==true){
				console.log('winery updated', data);
				$location.path('/Wineries');
			}
			else{
				console.log('winery not updated', data);
				$scope.msg = "There was an error editing this winery. Please try again.";
			}
		})
	};

}]);