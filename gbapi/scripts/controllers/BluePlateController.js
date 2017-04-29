'use strict';
/**
 * @ngdoc function
 * @name apifrontendApp.controller:BluePlateController
 * @description
 * # BluePlateController
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('BluePlateController', function ($scope, MenuItemsService, _, Notification, $routeParams, $location, $timeout) {

    var cities = [
      'hattiesburg',
      'madison',
      'flowood',
      'brookhaven'
    ];

    $scope.city = cities[0];

    $scope.makeHattiesburg = function() {
      $scope.city = cities[0];
    }
    $scope.makeMadison = function() {
      $scope.city = cities[1];
    }
    $scope.makeFlowood = function() {
      $scope.city = cities[2];
    }
    $scope.makeBrookhaven = function() {
      $scope.city = cities[3];
    }

  });
