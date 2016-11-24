//ROUTES
angularSpaAppModule.config(['$routeProvider', '$httpProvider', function($routeProvider,$httpProvider) {
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
    
    
    //CODE TO DISABLE CACHING OF ANGULAR HTTP GET REQUESTS
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    // extra
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);