'use strict';

angular.module('SonosWeb.Controller').controller('MainController', function ($scope, $http, SonosService) {

    var mainController = this;

    SonosService.getRooms().then(function(data){
        mainController.rooms = data;
    }, function (err) {
        console.log (err);
    });

    SonosService.getCurrentTrack().then(function (data) {
        mainController.currentTrack = data;
        console.log (data);
    }, function (err) {
        console.log (err);
    });


});