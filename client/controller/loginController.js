app.controller('loginController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.addUser = function(){
		if($scope.newUser.password == $scope.newUser.confPwd){
			userFactory.addUser($scope.newUser, function(data){
				$cookies.put('user_id', data);
				// console.log("in adduser controller", "data:", data, "cookie:", $cookies.get('user_id'));
				$location.path('/Home');
			})
		}
		else{
			$scope.error = "Passwords don't match. Please try again!";
		}
	};

	$scope.login = function(){
		console.log('in login controller', $scope.userLogin.email, $scope.userLogin.password);
		userFactory.login($scope.userLogin, function(data){
			if(data.validation == false){
				$scope.error = "Login invalid! Please try again or Register."
			}
			else{
				$cookies.put('user_id', data[0].id);
				console.log("login controller", "data:", data, "cookie:", $cookies.get('user_id'));
				$location.path('/Home');
			}
		})
	};

	$scope.logout = function(){
		$cookies.remove('user_id');
		console.log("cookie:", $cookies.getAll());
		$location.path('/');
	};

}]);
