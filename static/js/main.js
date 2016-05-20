var SonosWeb = angular.module('SonosWeb', ['ui.router', 'SonosWeb.Controller', 'SonosWeb.Services']);

SonosWeb.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('index', {
            url        : '/',
            templateUrl: "partials/index.html",
            controller : "MainController"
        });
});
angular.module('SonosWeb.Controller', []);
angular.module('SonosWeb.Services', []);