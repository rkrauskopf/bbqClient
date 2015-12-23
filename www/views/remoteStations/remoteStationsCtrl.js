(function() {
  angular.module('starter')
    .controller('RemoteStationsCtrl', function($scope, $http, settings) {

      $scope.textInputs = [];
      $scope.numberInputs = [];
      $scope.toggleInputs = [];

      $scope.getSettings = getSettings;

      $scope.successMessage = '';
      $scope.errorMessage = '';

      $scope.clearStatusMessages = clearStatusMessages;

      activate();

      function activate() {
        $scope.getSettings();

        $scope.remoteServers = localStorage['remoteServers'] || [];
      }

      function getSettings() {
        $scope.textInputs = [];
        $scope.numberInputs = [];
        $scope.booleanInputs = [];
        $scope.listInputs = [];

        clearStatusMessages();

        $http.get(settings.serverUrl + 'settings')
          .then(function(responseData) {
            formatData(responseData.data);
          })
          .catch(function(err) {
            console.log(err);
            $scope.errorMessage = err.message;
          });
      }

      function clearStatusMessages() {
        $scope.successMessage = '';
        $scope.errorMessage = '';
      }

      function formatData(data) {
        var keys = Object.keys(data);
        keys.forEach(function(key) {

          if(data[key]['options']) {
            $scope.listInputs.push(
              {
                'key': key,
                'options': data[key]['options'],
                'selectedValue': data[key]['selectedValue']
              }
            );
          }
          else if (angular.isNumber(data[key])) {
            $scope.numberInputs.push({key: key, value: data[key]});
          }
          else if (angular.isString(data[key])) {
            $scope.textInputs.push({key: key, value: data[key]});
          }
          else if (typeof(data[key] === 'boolean')) {
            $scope.booleanInputs.push({key: key, value: data[key]});
          }
        });
      }

      $scope.updateSettings = function() {

        clearStatusMessages();

        var jsonObj = {};

        $scope.textInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        $scope.numberInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        $scope.toggleInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        $scope.listInputs.forEach(function(item) {
          jsonObj[item.key] = {'selectedValue': item.selectedValue};
        });

        $http.post(settings.serverUrl + 'settings', jsonObj)
          .then(function() {
            $scope.successMessage = 'Settings Updated Successfully!';
          })
          .catch(function(error) {
            $scope.errorMessage = 'Error Updating Settings';
          })
      };
    })
})();
