(function() {
  angular.module('starter')
    .controller('RemoteStationsListCtrl', function($state) {
      var vm = this;

      if(localStorage['remoteStations']) {
        vm.remoteStations = JSON.parse(localStorage['remoteStations']) || [];
      }
      else {
        vm.remoteStations = null;
      }
      vm.deleteStation = deleteStation;

      function deleteStation(serverIndex) {
        vm.remoteStations.splice(serverIndex, 1);

        //Save the new remoteStations array to localStorage
        localStorage['remoteStations'] = JSON.stringify(vm.remoteStations);
      }

    })
})();
