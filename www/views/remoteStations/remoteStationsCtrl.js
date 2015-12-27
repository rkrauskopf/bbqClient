(function() {
  angular.module('starter')
    .controller('RemoteStationsCtrl', function($http, $window, settings) {

      var vm = this;

      vm.textInputs = [];
      vm.numberInputs = [];
      vm.toggleInputs = [];

      vm.getSettings = getSettings;

      vm.successMessage = '';
      vm.errorMessage = '';

      vm.clearStatusMessages = clearStatusMessages;

      vm.selectedStationUrl = '';

      activate();

      function activate() {
        if(localStorage['remoteStations']) {
          vm.remoteStations = JSON.parse(localStorage['remoteStations']) || [];
        }
        else {
          vm.remoteStations = [];
        }

      }

      function getSettings() {
        vm.textInputs = [];
        vm.numberInputs = [];
        vm.booleanInputs = [];
        vm.listInputs = [];

        clearStatusMessages();

        $http.get(vm.selectedStationUrl)
          .then(function(responseData) {
            formatData(responseData.data);
          })
          .catch(function(err) {
            console.log(err);
            vm.errorMessage = err.message;
          });
      }

      function clearStatusMessages() {
        vm.successMessage = '';
        vm.errorMessage = '';
      }

      function formatData(data) {
        var keys = Object.keys(data);
        keys.forEach(function(key) {

          if(data[key]['options']) {
            vm.listInputs.push(
              {
                'key': key,
                'options': data[key]['options'],
                'selectedValue': data[key]['selectedValue']
              }
            );
          }
          else if (angular.isNumber(data[key])) {
            vm.numberInputs.push({key: key, value: data[key]});
          }
          else if (angular.isString(data[key])) {
            vm.textInputs.push({key: key, value: data[key]});
          }
          else if (typeof(data[key] === 'boolean')) {
            vm.booleanInputs.push({key: key, value: data[key]});
          }
        });
      }

      vm.updateSettings = function() {

        clearStatusMessages();

        var jsonObj = {};

        vm.textInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        vm.numberInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        vm.toggleInputs.forEach(function(item) {
          jsonObj[item.key] = item.value;
        });

        vm.listInputs.forEach(function(item) {
          jsonObj[item.key] = {'selectedValue': item.selectedValue};
        });


        if($window.confirm('Are you sure you want to update these settings?')) {
          $http.post(vm.selectedStationUrl, jsonObj)
            .then(function () {
              vm.successMessage = 'Settings Updated Successfully!';
            })
            .catch(function (error) {
              vm.errorMessage = 'Error Updating Settings';
            });
        }
      };
    })
})();
