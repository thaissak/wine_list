app.controller('wineController', ['$scope', 'wineFactory', '$routeParams', '$location','$cookies', function($scope, wineFactory, $routeParams, $location, $cookies){

	$scope.wine = [];
	var wineId = $routeParams.id;
	var userId = $cookies.get('user_id');

	wineFactory.wineInfo(userId, wineId, function(wineData){
		console.log('getting one wine controller', 'user id:', userId, 'wine id:', wineId, 'data:', wineData);
		$scope.wine = wineData;

	});

	$scope.deleteWine = function(){
		console.log('delete wine controller', $scope.wine.id);
		wineFactory.deleteWine(userId, wineId, function(data){
			if(data.deletion==true){
				console.log('wine deleted successfully');
				$location.path('/Wines');
			}
			else{
				$scope.error = "There was an error deleting this wine. Please try again.";
			}
		})
	};

	$scope.updateWine = function(){
		console.log('update wine controller', userId, $scope.wine);
		wineFactory.updateWine(userId, $scope.wine, function(data){
			if(data.update==true){
				console.log('wine updated', data);
				$location.path('/Wines');
			}
			else{
				console.log('wine not updated', data);
				$scope.error = "There was an error editing this wine. Please try again.";
			}
		})
	};

}]);