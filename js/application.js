var app = angular.module('ZackAndrewsPhoto', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/',                                                  {templateUrl: 'views/photoreel.html', controller: 'PhotosController'})
        .when('/404',                                               {templateUrl: 'views/404.html'})
        .otherwise(                                                 {redirectTo:  '/404'});
}]);