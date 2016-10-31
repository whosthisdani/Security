(function () {
    'use strict';
var app = angular.module('app', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/login', { templateUrl: '/GaravaldiDani/html/login.html'});
    $routeProvider.when('/portfolio', { templateUrl: '/GaravaldiDani/html/portfolio.html'});
    $routeProvider.when('/test', { templateUrl: '/GaravaldiDani/html/test.html'})
    $routeProvider.otherwise('/login');
});

app.controller('ctrl', function ($routeProvider) {
   console.log('siii');
});

})();
