var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider

// MAIN	
	.when('/', {
		templateUrl: 'partial/main.html',
		
	})

	.when('/Registration', {
		templateUrl: 'partial/registration.html',
		controller: 'loginController'
	})

	.when('/Login', {
		templateUrl: 'partial/login.html',
		controller: 'loginController'
	})

// LOGGED USER
	.when('/Home', {
		templateUrl: 'partial/user_home.html',
		controller: 'userController'
	})

// PROFILE
	.when('/Profile', {
		templateUrl: 'partial/user_profile.html',
		controller: 'userController'
	})

	.when('/Profile/Edit', {
		templateUrl: 'partial/user_edit.html',
		controller: 'userController'
	})

	.when('/Profile/Edit/Password', {
		templateUrl: 'partial/user_changePwd.html',
		controller: 'userController'
	})

// WINES
	.when('/Wines', {
		templateUrl: 'partial/wine.html',
		controller: 'wineHomeController'
	})

	.when('/Wines/New', {
		templateUrl: 'partial/wine_add.html',
		controller: 'wineAddController'
	})

	.when('/Wines/Edit/:id', {
		templateUrl: 'partial/wine_edit.html',
		controller: 'wineController'
	})

	.when('/Wines/Show/:id', {
		templateUrl: 'partial/wine_show.html',
		controller: 'wineController'
	})


//WINERIES
	.when('/Wineries', {
		templateUrl: 'partial/winery.html',
		controller: 'wineryHomeController'
	})

	.when('/Wineries/New', {
		templateUrl: 'partial/winery_add.html',
		controller: 'wineryAddController'
	})

	.when('/Wineries/Edit/:id', {
		templateUrl: 'partial/winery_edit.html',
		controller: 'wineryController'
	})

	.when('/Wineries/Show/:id', {
		templateUrl: 'partial/winery_show.html',
		controller: 'wineryController'
	})

// LISTS
	// .when('/Lists', {
	// 	templateUrl: 'partial/lists.html',
	// 	controller: 'listsController'
	// })

	// .when('/Lists/New', {
	// 	templateUrl: 'partial/add_list.html',
	// 	controller: 'listController'
	// })

	// .when('/Lists/Edit', {
	// 	templateUrl: 'partial/edit_list.html',
	// 	controller: 'listController'
	// })

	// .when('/Lists/Show', {
	// 	templateUrl: 'partial/show_list.html',
	// 	controller: 'listController'
	// })

// OTHER
	.otherwise({
		redirecTo: '/'
	})
});