var myApp = /**
* todoApp Module
*
* Description
*/
angular.module('cartApp', [])

.service('cartS', function(){
	this.data = [
	{mat: 'Chair', price:'100',active:false},
	{mat: 'Table', price:'2000',active:false},
	{mat: 'Door', price:'500',active:false},
	{mat: 'Tool', price:'50',active:false}
	];
})

.controller('cartCon', ['$scope','cartS', function($scope,cartS){
	$scope.cart = cartS.data;
	
	$scope.toggle = function(c){
		c.active = !c.active;
	}

	$scope.total = function(){
		var tx=0
		angular.forEach($scope.cart, function(c){
			if(c.active){
				tx+=parseInt(c.price);
			}
		});
		return tx;
	}
}])


