app.controller('wineryController', ['$scope', 'wineryFactory', '$routeParams', '$location', function($scope, wineryFactory, $routeParams, $location){

	$scope.winery = [];
	var winery_id = $routeParams.id;

	$scope.addWinery = function(){
		console.log('pwd', $scope.newWinery.password, 'confpwd', $scope.newWinery.confPwd);
		if($scope.newWinery.password == $scope.newWinery.confPwd){
			wineryFactory.addWinery($scope.newWinery, function(data){
				$scope.winery = data;
				console.log("in addWinery controller", data);
				$location.path('/Winerys');
			})
		}
	};

}]);