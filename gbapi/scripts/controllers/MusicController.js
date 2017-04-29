'use strict';

angular.module('apifrontendApp')
	.controller('MusicController', function($scope, MusicItemService, _, $routeParams, $location, $timeout, Notification) {

		$timeout(function() {
      $('select').material_select();
      $('.datepicker').pickadate({
		    selectMonths: true, // Creates a dropdown to control month
		  });
    }, 0);

    $scope.locations = [
      {
        location: 'Hattiesburg'
      },
      { 
        location: 'Madison'
      },
      {
        location: 'Flowood'
      },
      {
        location: 'Brookhaven'
      }
    ]

		var main = this;
		$scope.id = $routeParams.id;

		function getAllMusic() {
			MusicItemService.all()
				.then(function(result) {
					console.log(result);
					$scope.performers = _.clone(result.data);
					
					var hattiesburgMusic = _.filter($scope.performers, function(performer) {
						return performer.location == 'Hattiesburg';
					});

					var flowoodMusic = _.filter($scope.performers, function(performer) {
						return performer.location == 'Flowood';
					});

					var madisonMusic = _.filter($scope.performers, function(performer) {
						return performer.location == 'Madison';
					});

					var brookhavenMusic = _.filter($scope.performers, function(performer) {
						return performer.location == 'Brookhaven';
					});

					$scope.hattiesburgMusic = hattiesburgMusic;
					$scope.flowoodMusic = flowoodMusic;
					$scope.madisonMusic = madisonMusic;
					$scope.brookhavenMusic = brookhavenMusic;

				})
		};

		getAllMusic();

		$scope.addPerformer = addPerformer;
		
		$scope.deleteHattiesburg = deleteHattiesburg;
		$scope.deleteFlowood = deleteFlowood;
		$scope.deleteMadison = deleteMadison;
		$scope.deleteBrookhaven = deleteBrookhaven;	

		function addPerformer() {
			console.log("$SCOPE: ", $scope)
			console.log("Location: ", $scope.location)
			console.log("NAME: ", $scope.name);
			console.log("Date: ", $scope.date)
      if(($scope.location != undefined) && ($scope.name != undefined) && ($scope.date != undefined)) {
        var performer = {};
        performer.starttime = $scope.starttime;
        performer.endtime = $scope.endtime;
        performer.name = $scope.name;
        performer.location = $scope.location.location;
        performer.date = $scope.date;
        console.log("performer", performer) 
        MusicItemService.create(performer);
        Notification.primary('Performer successfully added...');
        $scope.name = '';
        $scope.date = '';
      } else {
        Notification.error('Please fill out all fields...')
      }

    };

		function deleteFlowood(item, id) {
      var index = $scope.flowoodMusic.indexOf(item);
      $scope.flowoodMusic.splice(index, 1);
      MusicItemService.destroy(id)
		};
		
		function deleteHattiesburg(item, id) {
      var index = $scope.hattiesburgMusic.indexOf(item);
      $scope.hattiesburgMusic.splice(index, 1);
      MusicItemService.destroy(id)
		};

		function deleteMadison(item, id) {
      var index = $scope.madisonMusic.indexOf(item);
      $scope.madisonMusic.splice(index, 1);
      MusicItemService.destroy(id)
		};

		function deleteBrookhaven(item, id) {
      var index = $scope.brookhavenMusic.indexOf(item);
      $scope.brookhavenMusic.splice(index, 1);
      MusicItemService.destroy(id)
		};

	});