"use strict";angular.module("tandaleApp",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("tandaleApp").controller("MainCtrl",["$scope","$interval",function(a,b){function c(){b(function(){a.time=moment().format("LTS"),a.date=moment().format("ll"),a.day=moment().format("dddd")},1e3)}this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],c()}]),angular.module("tandaleApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("tandaleApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="hidden-xs"> <div class="hidden-xm"> <div class="row"> <div class="col-md-4"> <h3>Tandale Ward</h3> </div> </div> <div class="row"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Today Weather</h3> </div> <div class="panel-body todayContent"> <div class="row"> <div class="col-md-3 col-sm-3 today"> <div class="panel panel-default"> <!-- <div class="panel-heading">\n                        <h3 class="panel-title">Panel title</h3>\n                      </div> --> <div class="panel-body"> <div class="row"> <div id="time"> {{ time }} </div> </div> <div class="row"> <div id="date"> {{ date }} </div> </div> <div> <div id="day"> {{ day }} </div> </div> </div> </div> </div> <div class="col-md-3 col-sm-3 today"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Temperature in &#x2103;</h3> </div> <div class="panel-body"> Panel content </div> </div> </div> <div class="col-md-3 col-sm-3 today"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Panel title</h3> </div> <div class="panel-body"> Panel content </div> </div> </div> <div class="col-md-3 col-sm-3 today"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Panel title</h3> </div> <div class="panel-body"> Panel content </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="hidden-md"> <div class="hidden-lg"> <div class="row"> <div class="col-sm-12 col-xs-12"> <h3>Tandale Ward</h3> </div> </div> </div> </div>')}]);