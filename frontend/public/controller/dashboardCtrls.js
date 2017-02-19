var dashboardCtrls = angular.module('dashboardCtrls', []);

dashboardCtrls.controller('dashboardCtrl',
['$scope','$state',
function($scope, $state) {
  console.log("Hello world from the dashboard body");
}]);
