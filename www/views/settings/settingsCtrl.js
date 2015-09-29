(function() {
  angular.module('starter')
    .controller('SettingsCtrl', function($scope, settings, $window) {

      $scope.settings = {
        serverUrl: settings.serverUrl,
        pollRate: settings.pollRate
      };

      $scope.save = function() {

        settings.serverUrl = $scope.settings.serverUrl;
        settings.pollRate = $scope.settings.pollRate;

        $window.localStorage.setItem('serverUrl', $scope.settings.serverUrl);
        $window.localStorage.setItem('pollRate', $scope.settings.pollRate);
      }
    })
})();
