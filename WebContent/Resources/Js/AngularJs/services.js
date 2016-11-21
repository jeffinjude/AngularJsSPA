//SERVICES
angularSpaAppModule.service('AverageCalculator', function(){
	var vm = this;
	vm.averageVal = function(mark1, mark2){
		return (mark1 + mark2)/2;
	};
});