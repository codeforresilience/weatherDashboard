'use strict';

/**
 * @ngdoc function
 * @name tandaleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tandaleApp
 */
angular.module('tandaleApp')
	.controller('MainCtrl',['$scope','$interval', function($scope,$interval){
		this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		function getTime(){
	    	$interval(function(){
	    		$scope.days = [];
				$scope.time = moment().format('LTS');
	      		$scope.date = moment().format('ll');
	      		$scope.day = moment().format('dddd');
	      		$scope.day1 = moment().subtract(1, 'days');
	      		$scope.day2 = moment($scope.day1).subtract(1, 'days');
	      		$scope.day3 = moment($scope.day2).subtract(1, 'days');
	      		$scope.day4 = moment($scope.day3).subtract(1, 'days');
	      		$scope.day5 = moment($scope.day4).subtract(1, 'days');
	      		$scope.day6 = moment($scope.day5).subtract(1, 'days');
	      		$scope.day7 = moment($scope.day6).subtract(1, 'days');
	      		$scope.days.push({day: $scope.day1.format('dddd'), date: $scope.day1.format('ll') });
	      		$scope.days.push({day: $scope.day2.format('dddd'), date: $scope.day2.format('ll') });
	      		$scope.days.push({day: $scope.day3.format('dddd'), date: $scope.day3.format('ll') });
	      		$scope.days.push({day: $scope.day4.format('dddd'), date: $scope.day4.format('ll') });
	      		$scope.days.push({day: $scope.day5.format('dddd'), date: $scope.day5.format('ll') });
	      		$scope.days.push({day: $scope.day6.format('dddd'), date: $scope.day6.format('ll') });
	      		$scope.days.push({day: $scope.day7.format('dddd'), date: $scope.day7.format('ll') });
	      		
	      		

				},1000);
		    }

		 getTime();
	}]);
  
