'use strict';

/**
 * @ngdoc function
 * @name apifrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
