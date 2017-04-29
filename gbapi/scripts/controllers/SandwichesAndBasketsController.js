'use strict';
/**
 * @ngdoc function
 * @name apifrontendApp.controller:SandwichesAndBasketsController
 * @description
 * # SandwichesAndBasketsController
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('SandwichesAndBasketsController', function ($scope, MenuItemsService, _, Notification, $routeParams, $location, $timeout) {

    $timeout(function() {
      $('select').material_select();
    }, 0);

    var main = this;

    $scope.itemid = $routeParams.id;
    $scope.icon = {}
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

    function getItems() {
      MenuItemsService.all()
        .then(function (result) {
          console.log("RESULT: " ,result)
          var items = _.filter(result.data, function(r) {
            return r.itemtype == 'sandb';
          });
          $scope.items = _.clone(items);
          console.log("ITEMS: ", $scope.items)
          $scope.editableitem = _.find($scope.items, function(item) {
            return item.id == $scope.itemid;
          });
        });
    }
    getItems();

    function deletesandb(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
    }

    $scope.deletesandb = deletesandb;

    function deletesandb2(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
      .then(function() {
        getItems();
        $location.path('/sandwichesandbaskets')
      }) 
    }

    $scope.deletesandb2 = deletesandb2;

    function addsandb() {
      if(($scope.icon.value != undefined) && ($scope.price != undefined) && ($scope.description != undefined) && ($scope.name != undefined)) {
        var apptoadd = {};
        apptoadd.name = $scope.name;
        apptoadd.description = $scope.description;
        apptoadd.itemtype = "sandb";
        apptoadd.icon = $scope.icon.value;
        apptoadd.price = $scope.price;
        console.log("sandbtoadd", apptoadd) 
        MenuItemsService.create(apptoadd);
        Notification.primary('Sandwich / Basket successfully added...');
        $scope.name = '';
        $scope.description = '';
        $scope.icon = [];
        $scope.price = '';
      } else {
        Notification.error('Please fill out all fields...')
      }

    };

    $scope.addsandb = addsandb;


  });
