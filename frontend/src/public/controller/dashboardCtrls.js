var dashboardCtrls = angular.module('dashboardCtrls', []);

dashboardCtrls.controller('dashboardCtrl',
['$scope','$state','$http',
function($scope, $state, $http) {
  console.log("Hello world from the dashboard body");

  //TODO:  Issue: The docker DNS doesn't hold for the angular frontend code, since this is executed on 
  // the client side.
  $http({
    method: 'GET',
    url: 'http://backend:8080/api/1/test'
  }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });

}]);
