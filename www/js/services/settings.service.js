(function() {
  angular.module('starter')
    .factory('settings', function($window) {

      var settingsObj = {
        serverUrl: $window.localStorage.getItem('serverUrl'),
        pollRate: Number($window.localStorage.getItem('pollRate')) || 10,
        awsServerUrl: 'http://52.89.180.140:1337/',
        userID: ''
      };

      return settingsObj;

    });
})();
