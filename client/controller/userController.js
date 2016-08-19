app.controller('userController', ['$scope', 'userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location){

	$scope.user = [];
	var user_id = $routeParams.id;

	$scope.addUser = function(){
		console.log('pwd', $scope.newUser.password, 'confpwd', $scope.newUser.confPwd);
		if($scope.newUser.password == $scope.newUser.confPwd){
			userFactory.addUser($scope.newUser, function(data){
				$scope.user = data;
				console.log("in adduser controller", data);
				$location.path('/Home');
			})
		}
		else{
			$scope.error = "Passwords don't match. Please try again!";
		}
	};

}]);
