app.factory('custFactory', function($http){

	var factory = {};
	var customers = [];

	factory.addCustomer = function(data, callback){
		console.log('Im in addCustomer', data);
		$http.post('/Customers', data).then(function(result){
			console.log('Inserted new customer into db', result);
			customers.push(result.data);
			callback(customers);
		})
	}

	factory.updateCustomer = function(updateCustomer, callback){
		$http.post('/Customers/' + updateCustomer._id + '/edit', updateCustomer).then(function(customer){
			console.log('updateCustomer - client', customer.data);
			callback(customer.data);
		})
	}

	factory.loadCustomers = function(callback){
		console.log('Im in loadCustomers');
		$http.get('/Customers').then(function(list){
			console.log('retrieved customers list', list);
			customers = list.data;
			console.log('my list of customers', customers);
			callback(customers);
		})
	}

	factory.loadCustomer = function(customer_id, callback){
		console.log("in loadcustomer", customer_id);
		$http.get('/Customers/'+ customer_id +'/edit').then(function(customer){
			console.log("Retrieved customer from db", customer);
			callback(customer.data[0]);
		})
	}


	return factory;
})