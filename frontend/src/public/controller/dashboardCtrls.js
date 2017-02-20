var dashboardCtrls = angular.module('dashboardCtrls', []);

dashboardCtrls.controller('dashboardCtrl',
['$scope','$state','$http',
function($scope, $state, $http) {
  console.log("Hello world from the dashboard body");

  // Simple GET request example:
  $http({
    method: 'GET',
    url: 'http://api:8080/api/1/test'
  }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
    
}]);
