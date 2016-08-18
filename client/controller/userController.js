app.controller('custController', ['$scope', 'custFactory', '$routeParams', '$location', function($scope, custFactory, $routeParams, $location){

	$scope.customers = [];
	var customer_id = $routeParams.id;

	custFactory.loadCustomers(function(list){
		console.log('in loadCustomers - client controller', list);
		$scope.customers = list;
	})

	custFactory.loadCustomer(customer_id, function(customer){
		console.log('in loadcustomer - client controller', customer);
		$scope.customer = customer;
	})

	$scope.addCustomer = function(){
		console.log('in addCustomer - client controller');
		custFactory.addCustomer($scope.newCustomer, function(data){
			$scope.customers = data;
			console.log('data from add customer controller', data);
		})
	}

	$scope.updateCustomer = function(){
		console.log('in updateCustomer - client controller');
		custFactory.updateCustomer($scope.customer, function(data){
			$scope.customer = data;
			console.log('data from update customer controller', data);
			$location.path('/Customers');
		})
	}

	
}]);
