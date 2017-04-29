'use strict';

/**
 * @ngdoc function
 * @name apifrontendApp.controller:PastaController
 * @description
 * # PastaController
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('PastaController', function ($scope, MenuItemsService, _, Notification, $routeParams, $location, $timeout) {
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
            return r.itemtype == 'pasta';
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

    function deletePasta(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
    }

    $scope.deletePasta = deletePasta;

    function deletePasta2(item, id) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      MenuItemsService.destroy(id)
      .then(function() {
        getItems();
        $location.path('/pastas')
      })
    }

    $scope.deletePasta2 = deletePasta2;

    function addPasta() {
      if(($scope.icon.value != undefined) && ($scope.price != undefined) && ($scope.description != undefined) && ($scope.name != undefined)) {
        var apptoadd = {};
        apptoadd.name = $scope.name;
        apptoadd.description = $scope.description;
        apptoadd.itemtype = "pasta";
        apptoadd.icon = $scope.icon.value;
        apptoadd.price = $scope.price;
        MenuItemsService.create(apptoadd);
        Notification.primary('Pasta successfully added...');
        $scope.name = '';
        $scope.description = '';
        $scope.icon = '';
        $scope.price = '';
      } else {
        Notification.error('Please fill out all fields...')
      }

    };

    $scope.addPasta = addPasta;

  });
