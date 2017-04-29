'use strict';

/**
 * @ngdoc overview
 * @name apifrontendApp
 * @description
 * # apifrontendApp
 *
 * Main module of the application.
 */
angular
  .module('apifrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-notification',
    'angularMoment'
  ])
  .constant('ENDPOINT_URI', 'https://boiling-tor-9692.herokuapp.com/api')
  .constant('_', window._)
  .config(function ($routeProvider, NotificationProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuController'
      })
      .when('/appetizers', {
        templateUrl: 'views/appetizers/appetizers.html',
        controller:'AppetizerController'
      })
      .when('/appetizer/new', {
        templateUrl: 'views/appetizers/newappetizer.html',
        controller: 'AppetizerController'
      })
      .when('/appetizer/:id', {
        templateUrl: 'views/appetizers/viewappetizer.html',
        controller: 'AppetizerController'
      })
      .when('/salads', {
        templateUrl: 'views/salads/salads.html',
        controller:'SaladsController'
      })
      .when('/salad/new', {
        templateUrl: 'views/salads/newsalad.html',
        controller: 'SaladsController'
      })
      .when('/salads/:id', {
        templateUrl: 'views/salads/viewsalad.html',
        controller: 'SaladsController'
      })
      .when('/pastas', {
        templateUrl: 'views/pastas/pastas.html',
        controller:'PastaController'
      })
      .when('/pastas/new', {
        templateUrl: 'views/pastas/newpasta.html',
        controller: 'PastaController'
      })
      .when('/pastas/:id', {
        templateUrl: 'views/pastas/viewpasta.html',
        controller: 'PastaController'
      })
      .when('/entrees', {
        templateUrl: 'views/entrees/entrees.html',
        controller:'EntreeController'
      })
      .when('/entrees/new', {
        templateUrl: 'views/entrees/newentree.html',
        controller: 'EntreeController'
      })
      .when('/entrees/:id', {
        templateUrl: 'views/entrees/viewentree.html',
        controller: 'EntreeController'
      })
      .when('/sandwichesandbaskets', {
        templateUrl: 'views/sandwichesandbaskets/sandwichesandbaskets.html',
        controller:'SandwichesAndBasketsController'
      })
      .when('/sandwichesandbaskets/new', {
        templateUrl: 'views/sandwichesandbaskets/newsandwichandbasket.html',
        controller: 'SandwichesAndBasketsController'
      })
      .when('/sandwichesandbaskets/:id', {
        templateUrl: 'views/sandwichesandbaskets/viewsandwichandbasket.html',
        controller: 'SandwichesAndBasketsController'
      })
      .when('/desserts', {
        templateUrl: 'views/desserts/desserts.html',
        controller:'DessertsController'
      })
      .when('/desserts/new', {
        templateUrl: 'views/desserts/newdessert.html',
        controller: 'DessertsController'
      })
      .when('/desserts/:id', {
        templateUrl: 'views/desserts/viewdessert.html',
        controller: 'DessertsController'
      })
      .when('/blueplates', {
        templateUrl: 'views/blueplates/blueplates.html',
        controller: 'BluePlateController'
      })
      .when('/blueplates/hattiesburg/new', {
        templateUrl: 'views/blueplates/hattiesburg/newblueplate.html',
        controller: 'BluePlateHattiesburg'
      })
      .when('/blueplates/hattiesburg/:id', {
        templateUrl: 'views/blueplates/hattiesburg/viewblueplate.html',
        controller: 'BluePlateHattiesburg'
      })
      .when('/blueplates/flowood/new', {
        templateUrl: 'views/blueplates/flowood/newblueplate.html',
        controller: 'BluePlateFlowood'
      })
      .when('/blueplates/flowood/:id', {
        templateUrl: 'views/blueplates/flowood/viewblueplate.html',
        controller: 'BluePlateFlowood'
      })
      .when('/blueplates/madison/new', {
        templateUrl: 'views/blueplates/madison/newblueplate.html',
        controller: 'BluePlateMadison'
      })
      .when('/blueplates/madison/:id', {
        templateUrl: 'views/blueplates/madison/viewblueplate.html',
        controller: 'BluePlateMadison'
      })
      .when('/blueplates/brookhaven/new', {
        templateUrl: 'views/blueplates/brookhaven/newblueplate.html',
        controller: 'BluePlateBrookhaven'
      })
      .when('/blueplates/brookhaven/:id', {
        templateUrl: 'views/blueplates/brookhaven/viewblueplate.html',
        controller: 'BluePlateBrookhaven'
      })
      .when('/music/new', {
        templateUrl: 'views/music/newMusic.html',
        controller: 'MusicController'
      })
      .when('/music', {
        templateUrl: 'views/music/liveMusic.html',
        controller: 'MusicController'
      })
      .otherwise({
        redirectTo: '/'
      });

  });