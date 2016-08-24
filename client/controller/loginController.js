app.controller('loginController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.addUser = function(){
		if($scope.newUser.password.length < 5){
			console.log('less than 5');
			$scope.error = "Password must have at least 5 characters";
		}
		else if($scope.newUser.password == $scope.newUser.confPwd){
			userFactory.addUser($scope.newUser, function(data){
				if(data.id){
					$cookies.put('user_id', data.id);
					// console.log("in adduser controller", "data:", data, "cookie:", $cookies.get('user_id'));
					$location.path('/Home');
				}
				else if(data.email == true){
					$scope.error = "E-mail already registered!";
				}
				else if(data.validation == false){
					$scope.error = "There was an error creating your profile. Please try again.";
				}
				
			})
		}
		else{
			console.log('validation:', $scope.newUser);
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
				$cookies.put('user_id', data.id);
				console.log("login controller", "data:", data.id, "cookie:", $cookies.get('user_id'));
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
