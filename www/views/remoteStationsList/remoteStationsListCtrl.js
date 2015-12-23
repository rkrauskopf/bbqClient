(function() {
  angular.module('starter')
    .controller('RemoteStationsListCtrl', function($scope) {

      $scope.remoteStations = localStorage['remoteStations'] || [];


    })
})();
