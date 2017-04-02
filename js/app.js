angular.module('triviaApp',['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/easy', {
    templateUrl: 'views/easy.html',
    controller: 'mainCtrl'
  })


});
