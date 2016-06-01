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
				$scope.time = moment().format('LTS');
	      		$scope.date = moment().format('ll');
	      		$scope.day = moment().format('dddd');
				},1000);
		    }

		 getTime();
	}]);
  
