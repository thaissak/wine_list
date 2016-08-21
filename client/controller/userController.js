app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.user = {} ;

	userFactory.userInfo($cookies.get('user_id'), function(userData){
		console.log('in logged user controller', userData);
		$scope.user = userData;
	});

	$scope.updateUser = function(){
		userFactory.updateUser($scope.user, function(data){
			if(data.update == true){
				$location.path('/Profile');
			}
			else{
				$scope.error = "There was an error trying to update your profile. Please try again.";
			}
		});
	};

}]);
