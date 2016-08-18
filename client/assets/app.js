var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider

// MAIN	
	.when('/', {
		templateUrl: 'partial/main.html',
		controller: 'userController'
	})

	.when('/Registration', {
		templateUrl: 'partial/registration.html',
		controller: 'userController'
	})

	.when('/Login', {
		templateUrl: 'partial/login.html',
		controller: 'userController'
	})

// LOGGED USER
	.when('/Home', {
		templateUrl: 'partial/home.html',
		controller: 'userController'
	})

// PROFILE
	.when('/Profile', {
		templateUrl: 'partial/profile.html',
		controller: 'userController'
	})

	.when('/Profile/Edit', {
		templateUrl: 'partial/editUser.html',
		controller: 'userController'
	})

	.when('/Profile/Edit/Password', {
		templateUrl: 'partial/changePwd.html',
		controller: 'userController'
	})

// WINES
	.when('/Wines', {
		templateUrl: 'partial/wines.html',
		controller: 'wineController'
	})


//WINERIES
	.when('/Wineries', {
		templateUrl: 'partial/wineries.html',
		controller: 'wineriesController'
	})

// LISTS
	.when('/Lists', {
		templateUrl: 'partial/lists.html',
		controller: 'listsController'
	})

// OTHER
	.otherwise({
		redirecTo: '/'
	})
});