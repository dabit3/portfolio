'use strict';

/**
 * @ngdoc function
 * @name apifrontendApp.controller:SaladsController
 * @description
 * # SaladsController
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('SaladsController', function ($scope, MenuItemsService, _, Notification, $routeParams, $location, $timeout) {
    $scope.icon = {};
    $scope.icons = [
      {
        id: 0,
        name: 'none',
        value: ''
      },
      { 
        id: 1, 
        name: 'signature',
        value: 'signature'
      },
      {
        id: 2, 
        name: 'healthy',
        value: 'healthy'
      },
      {
        id: 3,
        name: 'new',
        value: 'new'
      },
      {
        id: 4, 
        name: 'cajun',
        value: 'cajun'
      },
      {
        id: 5,
        name: 'glutenfree',
        value: 'glutenfree'
      }
    ]

    $timeout(function() {
      $('select').material_select();
    }, 0)

    var main = this;

    $scope.itemid = $routeParams.id

    function getItems() {
      MenuItemsService.all()
        .then(function (result) {
          var items = _.filter(result.data, function(r) {
            return r.itemtype == 'salad';
          });
          $scope.items = _.clone(items);
          console.log($scope.items)
          $scope.editableitem = _.find($scope.items, function(item) {
            return item.id == $scope.itemid;
          });
          console.log("editableitem::: ", $scope.editableitem)
        });
    }
    getItems();

    function deleteSalad(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
    }

    $scope.deleteSalad = deleteSalad;

    function deleteSalad2(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
      .then(function() {
        getItems();
        $location.path('/salads')
      })
    }

    $scope.deleteSalad2 = deleteSalad2;

    function addSalad() {
      if(($scope.icon.value != undefined) && ($scope.price != undefined) && ($scope.description != undefined) && ($scope.name != undefined)) {
        var apptoadd = {};
        apptoadd.name = $scope.name;
        apptoadd.description = $scope.description;
        apptoadd.itemtype = "salad";
        apptoadd.icon = $scope.icon.value;
        apptoadd.price = $scope.price;
        MenuItemsService.create(apptoadd);
        Notification.primary('Salad successfully added...');
        $scope.name = '';
        $scope.description = '';
        $scope.icon = '';
        $scope.price = '';
      } else {
        Notification.error('Please fill out all fields...')
      }

    };

    $scope.addSalad = addSalad;

  });
