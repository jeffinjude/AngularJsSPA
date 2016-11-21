//Filters
angularSpaAppModule.filter('capitalize', function(){
	return function(value){
		var result = null;
		var words = value.split(' ');
		words.forEach(function(item){
			if(result){
				result += ' ';
			}
			else{
				result = '';
			}
			result += item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase();
		});
		return result;
	};
});