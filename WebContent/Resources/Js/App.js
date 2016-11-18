"use strict";

var angularSpaAppModule = angular.module('angularSpaApp', ['ngRoute']);

//configure our routes
angularSpaAppModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'Pages/default.jsp',
            controller  : 'DefaultController'
        })

        // route for the add user page
        .when('/adduser', {
            templateUrl : 'Pages/adduser.jsp',
            controller  : 'AdduserController'
        })

        // route for the list page
        .when('/listuser', {
            templateUrl : 'Pages/listuser.jsp',
            controller  : 'ListuserController'
        });
}]);

angularSpaAppModule.controller('DefaultController',['$scope', function($scope) {

}]);

angularSpaAppModule.service('AverageCalculator', function(){
	this.averageVal = function(mark1, mark2){
		return (mark1 + mark2)/2;
	};
});

angularSpaAppModule.controller('AdduserController', ['$scope','AverageCalculator','$http','$location',function($scope,AverageCalculator,$http,$location) {
	this.userData = {
			name: "",
			phone: "",
			email: "",
			mark1: 0,
			mark2: 0,
			average: 0
	};
	
	this.submitForm = function(form){
		if(form.$valid){
			this.userData.average = AverageCalculator.averageVal(this.userData.mark1, this.userData.mark2);
			// ajax call to backend
			$http.post('UserAdd', this.userData)
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
}]);

angularSpaAppModule.controller('ListuserController',['$scope','$http', function($scope, $http) {
	this.userList = {
			
	};
	
	$http({
	  method: 'GET',
	  url: 'UserList'
	}).then(function successCallback(response) {
		$scope.userList = response.data;
		console.log($scope.userList);
	}, function errorCallback(response) {
		  alert("Data fetch failed!");
	});
	
}]);