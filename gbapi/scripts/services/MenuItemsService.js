"use strict";

angular
  .module('apifrontendApp')
  .service('MenuItemsService', function($http, ENDPOINT_URI) {
  	 var service = this,
    path = '/menuitems/';

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
      return getUrl(path) + itemId;
    }

    service.all = function () {
      return $http.get(getUrl());
    };

    service.fetch = function (itemId) {
      return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
      return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
      return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
      return $http.delete(getUrlForId(itemId));
    };

  })