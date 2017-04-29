'use strict';

/**
 * @ngdoc function
 * @name apifrontendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('MenuController', function ($scope, MenuItemsService) {
    var main = this;

    function getItems() {
      MenuItemsService.all()
        .then(function (result) {
          $scope.items = result.data;
          console.log(result)
        });
    }
    getItems();
  });
