var app = angular.module('app',[]);

app.controller('LoginController', ($scope) => {

});

app.controller('RegisterController', ($scope, $http) => {
	$scope.user = {};

	$scope.createUser = function(user) {
		console.log('user', user);
       $http({
         "method": "POST",
         "url": "/createUser",
         "data": user
       }).then(function mySuccess(response){
          $scope.myWelcome = response.data;
       },function myError(reponse){
          $scope.myWelcome = response.data;
       });
	}
});