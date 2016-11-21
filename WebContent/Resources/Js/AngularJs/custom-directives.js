//CUSTOM DIRECTIVES
angularSpaAppModule.directive('userDetailsTable',function(){
    return{
        restrict: 'EA',
        scope:{
            info:'=info'
        },
        templateUrl : 'Pages/tabledisplay.jsp'
    }
});