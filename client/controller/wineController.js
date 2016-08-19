app.controller('wineController', ['$scope', 'wineFactory', '$routeParams', '$location', function($scope, wineFactory, $routeParams, $location){

	$scope.wine = [];
	var wine_id = $routeParams.id;

	$scope.addWine = function(){
		console.log('pwd', $scope.newWine.password, 'confpwd', $scope.newWine.confPwd);
		if($scope.newWine.password == $scope.newWine.confPwd){
			wineFactory.addWine($scope.newWine, function(data){
				$scope.wine = data;
				console.log("in addWine controller", data);
				$location.path('/Wines');
			})
		}
	};

}]);