(function() {
  angular.module('starter')
    .controller('ReadingsCtrl', function($scope, $stateParams, $timeout, $http) {
      $scope.data = null;
      $scope.keys = [];

      //if(settings.serverUrl) {
      //  (function tick() {
      //
      //    $http.get(settings.serverUrl)
      //      .then(function(responseData) {
      //        $scope.data = responseData.data;
      //        $scope.keys = Object.keys(responseData.data);
      //      })
      //      .catch(function(err) {
      //        console.error(err);
      //      });
      //
      //    $timeout(tick, settings.pollRate * 1000);
      //
      //  })();
      //}
    })
})();
