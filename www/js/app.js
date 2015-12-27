// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  })
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'views/layouts/menu.html'
    })
    .state('app.readings', {
      url: '/readings',
      views: {
        'menuContent': {
          templateUrl: 'views/readings/readings.html',
          controller: 'ReadingsCtrl'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'views/settings/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })
    .state('app.remoteStations', {
      url: '/remoteStations',
      views: {
        'menuContent': {
          templateUrl: 'views/remoteStations/remoteStations.html',
          controller: 'RemoteStationsCtrl as vm'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'views/login/login.html',
          controller: 'LoginCtrl as vm'
        }
      }
    })
    .state('app.stations', {
      //url: '/stations',
      views: {
        'menuContent': {
          templateUrl: 'views/stations/stations.html',
          controller: 'StationsCtrl as vm'
        }
      }
    })
    .state('app.remoteStationsList', {
      url: '/remoteStationsList',
      views: {
        'menuContent': {
          templateUrl: 'views/remoteStationsList/remoteStationsList.html',
          controller: 'RemoteStationsListCtrl as vm'
        }
      }
    })
    .state('app.newStation', {
      url: '/newStation/:stationIndex',
      views: {
        'menuContent': {
          templateUrl: 'views/newStation/newStation.html',
          controller: 'NewStationCtrl as vm'
          //params: {
          //    stationIndex: 'test '
          //}
        }
      }
    });
  $urlRouterProvider.otherwise('/app/remoteStations');
});
