// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
      templateUrl: 'views/layouts/menu.html',
      controller: 'AppCtrl'
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
    .state('app.graphs', {
      url: '/graphs',
      views: {
        'menuContent': {
          templateUrl: 'views/graphs/graphs.html',
          controller: 'GraphsCtrl'
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
    .state('app.remoteSettings', {
      url: '/remoteSettings',
      views: {
        'menuContent': {
          templateUrl: 'views/remoteSettings/remoteSettings.html',
          controller: 'RemoteSettingsCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'views/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.stations', {
      //url: '/stations',
      views: {
        'menuContent': {
          templateUrl: 'views/stations/stations.html',
          controller: 'StationsCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/readings');
});
