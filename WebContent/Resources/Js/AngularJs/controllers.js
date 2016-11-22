//CONTROLLERS
angularSpaAppModule.controller('DefaultController',['$scope', function($scope) {

}]);

angularSpaAppModule.controller('AdduserController', ['$scope','AverageCalculator','$http','$location',function($scope,AverageCalculator,$http,$location) {
	var vm = this;
	
	vm.userData = {
			name: "",
			phone: "",
			email: "",
			mark1: 0,
			mark2: 0,
			average: 0
	};
	
	vm.submitForm = function(form){
		if(form.$valid){
			vm.userData.average = AverageCalculator.averageVal(vm.userData.mark1, vm.userData.mark2);
			// ajax call to backend
			$http.post('UserAdd', vm.userData)
            .success(function (data, status, headers, config) {
            	 $location.path( "/listuser" );
            })
            .error(function (data, status, header, config) {
            	 alert("Insert Failed!");
            });
		}
		else{
			window.alert("Enter valid inputs!");
		}
	};
	
	vm.cancel = function(){
		$location.path( "/listuser" );
	};
}]);

angularSpaAppModule.controller('ListuserController',['$scope','$http', function($scope, $http) {
	var vm = this;
	
	vm.userList = {
			
	};
	$scope.isLoading = true;
	
	$http({
	  method: 'GET',
	  url: 'UserList'
	}).then(function successCallback(response) {
		$scope.userList = response.data;
		$scope.isLoading = false;
	}, function errorCallback(response) {
		  alert("Data fetch failed!");
	});
	
}]);

angularSpaAppModule.controller('EdituserController',['$scope','$http', '$routeParams', 'AverageCalculator', '$location', function($scope, $http, $routeParams, AverageCalculator, $location) {
	var id = $routeParams.userId;
	var vm = this;
	
	vm.userData = {
	};
	
	$http({
	  method: 'GET',
	  url: 'UserDetails?userId='+id
	}).then(function successCallback(response) {
		vm.userData =  response.data;
	}, function errorCallback(response) {
		  alert("Data fetch failed!");
	});
	
	vm.submitForm = function(form){
		if(form.$valid){
			vm.userData.average = AverageCalculator.averageVal(vm.userData.mark1, vm.userData.mark2);
			// ajax call to backend
			$http.post('UserEdit', vm.userData)
            .success(function (data, status, headers, config) {
            	 $location.path( "/listuser" );
            })
            .error(function (data, status, header, config) {
            	 alert("Update Failed!");
            });
		}
		else{
			window.alert("Enter valid inputs!");
		}
	};
	
	vm.cancel = function(){
		$location.path( "/listuser" );
	};
}]);

angularSpaAppModule.controller('DeleteuserController',['$scope','$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
	var userId = $routeParams.userId;
	var vm = this;
	
	// ajax call to backend
	$http.post('UserDelete', userId)
    .success(function (data, status, headers, config) {
    	$location.path( "/listuser" );
    })
    .error(function (data, status, header, config) {
    	 alert("Delete Failed!");
    });
}]);