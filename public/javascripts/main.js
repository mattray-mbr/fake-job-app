var app = angular.module('JobApp', [])
	app.controller('homeController', ['$scope', function($scope){
		
	}]);




	app.controller('applicantController', ['$scope', '$http', function($scope, $http){
		
		$http.get('/allApplicants').then(function(returnData){
			console.log('getting: ', returnData)
			$scope.allApplicants = returnData.data
		})

		$scope.removePersion = function(){
			$http.remove('/removeApplicant', something).then(function(returnData){

			})
		}

	}]);
