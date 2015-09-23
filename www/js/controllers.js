angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

  })

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

  .controller('ReadingsCtrl', function($scope, $stateParams, $timeout, settings, $http) {
    $scope.data = null;
    $scope.keys = [];

    (function tick() {

      $http.get(settings.serverUrl)
        .then(function(responseData) {
          $scope.data = responseData.data;
          $scope.keys = Object.keys(responseData.data);
        })
        .catch(function(err) {
          console.error(err);
        });

      $timeout(tick, settings.pollRate * 1000);

    })();
  })
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

  .controller('GraphsCtrl', function($scope, $stateParams) {
  })

  .factory('settings', function($window) {

    var settingsObj = {
      serverUrl: $window.localStorage.getItem('serverUrl'),
      pollRate: Number($window.localStorage.getItem('pollRate')) || 10
    };

    return settingsObj;

  })

  .factory('dataService', function(settings) {


  });
