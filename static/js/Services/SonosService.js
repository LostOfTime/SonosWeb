'use strict';

angular.module('SonosWeb.Services').factory('SonosService', function ($http) {

    return {

        getRooms : function () {
            return $http.get('/api/rooms')
        },

        getCurrentTrack : function(){
            return $http.get('/api/device/currentTrack')
    }

    }
});