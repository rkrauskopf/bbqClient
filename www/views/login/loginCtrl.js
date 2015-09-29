(function() {
  angular.module('starter')
    .controller('LoginCtrl', function($scope, $http, $state, settings) {

      var vm = this;

      vm.status = {
        message: ''
      };

      vm.inputs = {
        email: '',
        password: ''
      };

      vm.login = function() {
        vm.status.message = '';
        $http.post(settings.awsServerUrl + 'login', {
          email: vm.inputs.email,
          password: vm.inputs.password
        })
          .then(function(success) {
            vm.status.message = 'successful login';

            settings.userID = success.data.id;
            //$state.go('app.login.stations')

            $state.go('app.stations');
          })
          .catch(function(error) {
            vm.status.message = 'error on login';
          });
      }
    });
})();
