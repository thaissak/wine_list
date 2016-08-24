app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){

	$scope.user = {} ;
	$scope.pwd = /^[A-Za-z0-9]\w{5,8}$/;

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
		console.log('in password validation')
		if($scope.user.newPwd == $scope.user.confPwd){
			userFactory.changePwd($scope.user, function(data){
				if(data.update == true){
					$location.path('/Profile');
				}
				else{
					$scope.error = "There was an error trying to change your password. Please try again.";
				}
			});
		}
		else{
			console.log('in error msg', $error);
			$scope.error = "Passwords don't match. Please try again!"
		}
	};

}]);
