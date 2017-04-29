'use strict';
/**
 * @ngdoc function
 * @name apifrontendApp.controller:BluePlateFlowood
 * @description
 * # BluePlateFlowood
 * Controller of the apifrontendApp
 */
angular.module('apifrontendApp')
  .controller('BluePlateFlowood', function ($scope, MenuItemsService, _, Notification, $routeParams, $location, $timeout) {

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
	          var items = _.filter(result.data, function(r) {
	            return r.itemtype == 'blueplateflowood';
	          });
	          $scope.items = _.clone(items);
	          console.log("ITEMS: ", $scope.items)
	          $scope.editableitem = _.find($scope.items, function(item) {
	            return item.id == $scope.itemid;
	          });
	        });
	    }
	    getItems();

	    function deleteBlueplate(item, id) {
	      var index = $scope.items.indexOf(item);
	      $scope.items.splice(index, 1);
	      MenuItemsService.destroy(id)
	    }

	    $scope.deleteBlueplate = deleteBlueplate;

	    function deleteBlueplate2(item, id) {
	      var index = $scope.items.indexOf(item);
	      $scope.items.splice(index, 1);
	      MenuItemsService.destroy(id)
	      .then(function() {
	        getItems();
	        $location.path('/blueplates')
	      })
	    }
	    $scope.deleteBlueplate2 = deleteBlueplate2;

	    function addBlueplate() {
	      if(($scope.icon.value != undefined) && ($scope.price != undefined) && ($scope.description != undefined) && ($scope.name != undefined)) {
	        var item = {};
	        item.name = $scope.name;
	        item.description = $scope.description;
	        item.itemtype = "blueplateflowood";
	        item.icon = $scope.icon.value;
	        item.price = $scope.price;
	        console.log("blueplate", item) 
	        MenuItemsService.create(item);
	        Notification.primary('Blue Plate successfully added...');
	        $scope.name = '';
	        $scope.description = '';
	        $scope.icon = [];
	        $scope.price = '';
	      } else {
	        Notification.error('Please fill out all fields...')
	      }
	    };

	    $scope.addBlueplate = addBlueplate;

  });
