(function() {
  angular.module('starter')
    .controller('RemoteSettingsCtrl', function($scope, $stateParams, $timeout, settings, $http) {
      //$scope.data = null;
      //$scope.keys = [];
      $scope.textInputs = [];
      $scope.numberInputs = [];
      $scope.toggleInputs = [];

      $scope.getSettings = getSettings;
      $scope.getSettings();

      function getSettings() {
        $scope.textInputs = [];
        $scope.numberInputs = [];
        $scope.toggleInputs = [];

        $http.get(settings.serverUrl + 'settings')
          .then(function(responseData) {
            formatData(responseData.data);
          })
          .catch(function(err) {
            console.log(err);
          });
      }

      function formatData(data) {
        var keys = Object.keys(data);
        keys.forEach(function(key) {
          if (angular.isNumber(data[key])) {
            $scope.numberInputs.push({key: key, value: data[key]});
          }
          else if (angular.isString(data[key])) {
            $scope.textInputs.push({key: key, value: data[key]});
          }
          else if (typeof(data[key] === 'boolean')) {
            $scope.toggleInputs.push({key: key, value: data[key]});
          }
        });
      }

      $scope.updateSettings = function() {

        var jsonObj = {};

        $http.post(settings.serverUrl + 'settings', jsonObj)
          .then(function() {

          })
          .catch(function(error) {

          })
      };
      //
      //(function tick() {
      //
      //  $http.get(settings.serverUrl)
      //    .then(function(responseData) {
      //      $scope.data = responseData.data;
      //      $scope.keys = Object.keys(responseData.data);
      //    })
      //    .catch(function(err) {
      //      console.error(err);
      //    });
      //
      //  $timeout(tick, settings.pollRate * 1000);
      //
      //})();
    })
})();
