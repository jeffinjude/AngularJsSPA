//ROUTES
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
        })
    
        // route for the edit user page
	    .when('/edituser', {
	        templateUrl : 'Pages/edituser.jsp',
	        //controller  : 'EdituserController'
	    })
	    
	     // route for the list page after deletion
        .when('/deleteuser', {
            templateUrl : 'Pages/listuser.jsp',
            controller  : 'DeleteuserController'
        });
}]);