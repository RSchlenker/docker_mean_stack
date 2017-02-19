var router = angular.module('routes',['ui.router']);

router.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    views: {
      'navigation': {
        templateUrl: 'public/partials/navbar/navbar.html',
        controller: 'navbarCtrl'
      },
      'content': {
        templateUrl: 'public/partials/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })
  $urlRouterProvider.otherwise('dashboard');
}]);
