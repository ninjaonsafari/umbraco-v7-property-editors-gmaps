angular.module("umbraco.directives").directive('gmapsLocalize', function (gmapsLocalizationService) {
	var linker = function (scope, element, attrs){

		var key = scope.key;
        
        gmapsLocalizationService.localize(key).then(function(value){
        	if(value){
        		element.html(value);
        	}
        });
	}   

	return {
	    restrict: "E",
	    rep1ace: true,
	    link: linker,
	    scope: {
	    	key: '@'
	    }
	}
});