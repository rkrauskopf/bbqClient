angular.module('starter.controllers', [])

.factory('settings', function() {

    return {
      serverUrl: 'http://localhost:3000/',
      pollRate: 10
    }


});
