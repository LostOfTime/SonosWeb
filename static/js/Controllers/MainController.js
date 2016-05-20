'use strict';

angular.module('SonosWeb.Controller').controller('MainController', function ($scope, $http, SonosService) {

    SonosService.getDevices().then(function (data) {
        console.log (data);
    }, function (err) {
        console.log (err);
    })
});