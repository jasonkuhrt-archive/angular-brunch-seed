window.app = angular.module('app', ['ngSanitize']);

app

.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl:'/views/route-home.html', controller: 'routeHome'});
});
