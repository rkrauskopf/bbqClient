(function() {
  angular.module('starter')
    .controller('StationsCtrl', function($scope, $http, settings ) {

      var vm = this;

      vm.stations = [];
      vm.getStations = getStations;
      vm.toggleView = toggleView;

      getStations();

      function getStations() {
        $http.get(settings.awsServerUrl + 'user/' + settings.userID + '/stations')
          .then(function(success) {
            vm.stations = success.data;
            vm.stations.forEach(function(station) {
              station.isCollapsed = true;
            });

          })
          .catch(function(error){

          });
      }

      function toggleView(station) {
        station.isCollapsed = !station.isCollapsed;
      }

    })
})();
