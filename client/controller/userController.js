app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.user = {} ;
	$scope.pattern = /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{5,12}$/;

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
		if($scope.user.newPwd == $scope.pattern){
			console.log('pwd validation ok');
			if($scope.user.newPwd == $scope.user.confPwd){
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
				console.log('pwds dont match');
				$scope.error = "Passwords don't match. Please try again!"
			}
		}
		else{
			console.log('pwd validation nok');
			$scope.error = "Password must have at least 5 alphanumeric characters";
		} 
	};

}]);
