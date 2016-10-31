(function () {
    'use strict';
    var app = angular.module('app');

    app.component('loginBegin', {
        // Load the template
        templateUrl: '/GaravaldiDani/html/login.html',

    });

    app.controller('myCtrl', function($scope, $location){
        $scope.loginstate = true;
        $scope.loggedin = false;
        $scope.validation = function validation(username, password) {
            if(username === 'Portfolio' && password === '1234'){
                $scope.loginstate = true;
                $location.path("/portfolio");
            }
            else {
                $scope.loginstate = false;
            }

        }
    });

})();
