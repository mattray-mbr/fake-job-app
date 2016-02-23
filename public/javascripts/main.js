var app = angular.module('JobApp', [])
	app.controller('homeController', ['$scope', function($scope){
		
	}]);




	app.controller('applicantController', ['$scope', '$http', function($scope, $http){
		
		$http.get('/allApplicants').then(function(returnData){
			console.log('getting: ', returnData)
			$scope.allApplicants = returnData.data
		})

		$scope.removePerson = function(index){
			console.log($scope.allApplicants[index]._id)
			$http.post('/removeApplicant', {appID: $scope.allApplicants[index]._id})
			.then(function(returnData){
				$scope.allApplicants = returnData.data
			})
		}

	}]);
