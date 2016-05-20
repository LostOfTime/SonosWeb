'use strict';

angular.module('SonosWeb.Services').factory('SonosService', function ($http) {

    return {

        getDevices : function () {
            return $http.get('/api/device')
        }

    }
});