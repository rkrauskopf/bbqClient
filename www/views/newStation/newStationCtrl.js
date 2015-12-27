(function() {
  angular.module('starter')
    .controller('NewStationCtrl', function($state, $stateParams) {
      var vm = this;

      if(localStorage['remoteStations']) {
        var stationsList = JSON.parse(localStorage['remoteStations']);
      }
      else {
        stationsList = [];
      }
      var station = '';

      if($stateParams.stationIndex !== '') {
        station = stationsList[Number($stateParams.stationIndex)];
      }

      vm.viewName = station ? 'Edit Station' : 'New Station';
      vm.btnLabel = station ? 'Save Station' : 'Create Station';
      vm.stationName = station.name || '';
      vm.stationUrl = station.url || '';

      vm.saveStation = saveStation;

      function saveStation() {

        //new Station?
        if(!station) {

          //initialize localStorage entry if it doesn't currently exist
          if(!localStorage['remoteStations']) {
            localStorage['remoteStations'] = JSON.stringify([
              {
                name: vm.stationName,
                url: vm.stationUrl
              }
            ])
          }
          else {
            var stationsList = JSON.parse(localStorage['remoteStations']);
            stationsList.push({name: vm.stationName, url: vm.stationUrl});
            localStorage['remoteStations'] = JSON.stringify(stationsList);
          }
        }

        //Edit a current station
        else {
          var stationsList = JSON.parse(localStorage['remoteStations']);
          stationsList[Number($stateParams.stationIndex)] = {
            name: vm.stationName,
            url: vm.stationUrl
          };

          localStorage['remoteStations'] = JSON.stringify(stationsList);
        }

        $state.go('app.remoteStationsList');
      }

    })
})();
