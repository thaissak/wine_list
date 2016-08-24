app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.user = {} ;
	// $scope.pwd = /^[A-Za-z0-9]\w{5,12}$/;
	 // var pattern = '^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{5,12}$';

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

	$scope.changePwd = function(){
		// if($scope.user.newPwd != $scope.pwd){
		// 	console.log('no number and/or letters');
		// 	$scope.error = "Password must contain at least 5 alphanumeric characters";
		// }
		// if (pattern.test($scope.user.newPwd)) {
		// 	console.log('senha ok');
		// } 
		// else{
		// 	console.log('senha nok');
		// }
		if($scope.user.newPwd.length <5){
			console.log('less than 5');
			$scope.error = "Password must have at least 5 characters";
		}
		else if($scope.user.newPwd == $scope.user.confPwd){
			userFactory.changePwd($scope.user, function(data){
				if(data.update == true){
					$location.path('/Profile');
				}
				else if(data.update == false || data.userId == false || data.password == false){
					$scope.error = "There was an error trying to change your password. Please try again.";
				}
				else if(data.validation == false){
					$scope.error = "Password invalid. Please try again."
				}
			});
		}
		else{
			console.log('pwds dont match - in error msg');
			$scope.error = "Passwords don't match. Please try again!"
		}
	};

}]);
