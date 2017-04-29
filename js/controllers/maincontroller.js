'use strict';

angular.module('portfolioApp.controllers.main', [])
    .controller('MasterCtrl', ['$scope', function($scope) {
        
        $scope.shotsPage = false;
        $scope.portFolioPage = false; 
        $scope.blogPage = true

        $scope.bookClass = function() {
          $scope.bookPage = true;
          $scope.blogPage = false;
          $scope.aboutPage = false;
        }

        $scope.shotsClass = function() {
            $scope.shotsPage = true;
            $scope.portFolioPage = true;
            $scope.sitesPage = false;
            $scope.blogPage = false;
            $scope.aboutPage = false;
        };
        $scope.sitesClass = function() {
            $scope.shotsPage = false;
            $scope.portFolioPage = true;
            $scope.sitesPage = true;
            $scope.blogPage = false;
            $scope.aboutPage = false;
        };
        $scope.portfolioClass = function() {
            $scope.shotsPage = true;
            $scope.portFolioPage = true;
            $scope.sitesPage = false;
            $scope.blogPage = false;
            $scope.aboutPage = false;
        };
        $scope.aboutClass = function() {
            $scope.shotsPage = false;
            $scope.portFolioPage = false;
            $scope.sitesPage = false;
            $scope.blogPage = false;
            $scope.aboutPage = true;
            $scope.bookPage = false;
        };
        $scope.blogClass = function() {
            $scope.shotsPage = false;
            $scope.portFolioPage = false;
            $scope.sitesPage = false;
            $scope.aboutPage = false;
            $scope.blogPage = true;
            $scope.bookPage = false;
        };

        
    }])
    .controller('BlogCtrl', ['$scope', '$state', '$document', function($scope, $state, $document) {
        
        $scope.ScrollTop = function() {
            var top = 155;
            var duration = 500; //milliseconds
            //Scroll to the exact position
            $document.scrollTop(top, duration);
        }

    }])
    .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
        // Anchor Scroll
        $scope.ScrollTop = function() {
            var top = 200;
            var duration = 1000; //milliseconds
            //Scroll to the exact position
            $document.scrollTop(top, duration);
        };

    }])

    .controller('ContactCtrl', ['$scope', function($scope) {
        $scope.banner = 'one';
    }])
    .controller('AccordianCtrl',['$scope', '$modal', function($scope, $modal) {

        $scope.oneAtATime = true;

        $scope.status = {
            isFirstOpen: false,
            isFirstDisabled: false
        };

    }])
    .controller('ConnectCtrl', ['$scope', '$modal', '$log', '$state', function($scope, $modal, $log, $state) {
        $scope.ctOpen1 = function() {
            $modal.open({
                templateUrl: 'views/connect/modalOne.html'
            });
        }
    }])

    .controller('MsdocCtrl', ['$scope', '$modal', '$log', '$state', function($scope, $modal, $log, $state) {
        $scope.msdocOpen1 = function() {
            $modal.open({
                templateUrl: 'views/msdoc/modalOne.html'
            });
        }

        $scope.msdocOpen2 = function() {
            $modal.open({
                templateUrl: 'views/msdoc/modalTwo.html'
            });
        }
        $scope.image1 = "img/logo-links-8/msdoc-1-display.jpg";
        $scope.image2 = "img/logo-links-8/msdoc-2-display.jpg"
    }])

    .controller('ShotsCtrl', ['$scope', '$modal', '$log', '$state',  function($scope, $modal, $log, $state) {

        // First Graphix

        $scope.fgOpen1 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalOne.html'
            });

        };
        $scope.fgOpen2 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalTwo.html'
            });
        };
        $scope.fgOpen3 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalThree.html'
            });
        };
        $scope.fgOpen4 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalFour.html'
            });
        };
        // Home Builders Association of Mississippi
        $scope.hbamOpen1 = function () {
            $modal.open({
                templateUrl: 'views/hbam/modalOne.html'
            });
        }

    }])
    .controller('PortfolioCtrl', ['$scope', '$state', function($scope, $state) {
        $state.go('index.shots.usoga.one');
    }])
    .controller('MainNavCtrl', ['$scope', '$state', function($scope, $state) {
        
    }])
    .controller('EzscheduleController', ['$scope', '$state', '$modal', function($scope, $state, $modal) {

        // MyEzSchedule
        $scope.open = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalOne.html'
            });
        };
        $scope.open2 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalTwo.html'
            });
        };
        $scope.open3 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalThree.html'
            });
        };
        $scope.open4 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalFour.html'
            });
        };
    }])
    .controller('ShotsGoCtrl', ['$scope', '$state', function($scope, $state) {

    }])
    .controller('MartinCtrl', ['$scope', '$state', '$modal', function($scope, $state, $modal) {

        $scope.martinOpen1 = function () {
            $modal.open({
                templateUrl: 'views/martin/modalOne.html'
            });
        };

    }])
    .controller('HamiltonCtrl', ['$scope', '$state', '$modal', function($scope, $state, $modal) {

        $scope.hamiltonOpen1 = function () {
            $modal.open({
                templateUrl: 'views/hamilton/modalOne.html'
            });
        };

    }])
    .controller('FirstGraphixController', ['$scope', '$state', function($scope, $state) {

    }])
    .controller('HbamController', ['$scope', '$state', function($scope, $state) {

    }])
    .controller('BridgersSmithCtrl', ['$scope', '$state', '$modal', function($scope, $state, $modal) {

        // Bridgers Smith
        $scope.bsOpen1 = function() {
            $modal.open({
                templateUrl: 'views/bridgerssmith/modalOne.html'
            })
        };
        $scope.bsOpen2 = function() {
            $modal.open({
                templateUrl: 'views/bridgerssmith/modalTwo.html'
            })
        };
    }])
    .controller('UsogaCtrl', ['$scope', '$state', '$modal', function($scope, $state, $modal) {
        $scope.usogaOpen1 = function() {
            $modal.open({
                templateUrl: 'views/usoga/modalOne.html'
            })
        }
    }])
    .controller('OgpCtrl', ['$scope', '$state', '$modal', function($scope, $state, $modal) {
        $scope.ogOpen1 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalOne.html'
            });
        };
        $scope.ogOpen2 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalTwo.html'
            });
        };
        $scope.ogOpen3 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalThree.html'
            });
        };
        $scope.ogOpen4 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalFour.html'
            });
        };
        $scope.ogOpen5 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalFive.html'
            });
        };
        $scope.ogOpen6 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalSix.html'
            });
        };
        $scope.ogOpen7 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalSeven.html'
            });
        };
    }])

// Responsive Controller 

    .controller("ResponsiveCtrl", ['$scope', '$modal', '$document', function($scope, $modal, $document) {

        $scope.ScrollTop2 = function() {
            var top = 200;
            var duration = 1000; //milliseconds
            //Scroll to the exact position
            $document.scrollTop(top, duration);
        };

        $scope.ogOpen1 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalOne.html'
            });
        };
        $scope.ogOpen2 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalTwo.html'
            });
        };
        $scope.ogOpen3 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalThree.html'
            });
        };
        $scope.ogOpen4 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalFour.html'
            });
        };
        $scope.ogOpen5 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalFive.html'
            });
        };
        $scope.ogOpen6 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalSix.html'
            });
        };
        $scope.ogOpen7 = function () {
            $modal.open({
                templateUrl: 'views/ogp/modalSeven.html'
            });
        };

        $scope.usogaOpen1 = function() {
            $modal.open({
                templateUrl: 'views/usoga/modalOne.html'
            })
        };

        $scope.bsOpen1 = function() {
            $modal.open({
                templateUrl: 'views/bridgerssmith/modalOne.html'
            })
        };
        $scope.bsOpen2 = function() {
            $modal.open({
                templateUrl: 'views/bridgerssmith/modalTwo.html'
            })
        };

        $scope.fgOpen1 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalOne.html'
            });

        };
        $scope.fgOpen2 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalTwo.html'
            });
        };
        $scope.fgOpen3 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalThree.html'
            });
        };
        $scope.fgOpen4 = function () {
            $modal.open({
                templateUrl: 'views/firstgraphix/modalFour.html'
            });
        };
        // Home Builders Association of Mississippi
        $scope.hbamOpen1 = function () {
            $modal.open({
                templateUrl: 'views/hbam/modalOne.html'
            });
        };

        // MyEzSchedule
        $scope.open = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalOne.html'
            });
        };
        $scope.open2 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalTwo.html'
            });
        };
        $scope.open3 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalThree.html'
            });
        };
        $scope.open4 = function () {
            $modal.open({
                templateUrl: 'views/ezschedule/modalFour.html'
            });
        };

        $scope.msdocOpen1 = function() {
            $modal.open({
                templateUrl: 'views/msdoc/modalOne.html'
            });
        }
        $scope.msdocOpen2 = function() {
            $modal.open({
                templateUrl: 'views/msdoc/modalTwo.html'
            });
        }

        $scope.ctOpen1 = function() {
            $modal.open({
                templateUrl: 'views/connect/modalOne.html'
            });
        }

        $scope.martinOpen1 = function () {
            $modal.open({
                templateUrl: 'views/martin/modalOne.html'
            });
        }

        $scope.hamiltonOpen1 = function () {
            $modal.open({
                templateUrl: 'views/hamilton/modalOne.html'
            });
        }

    }])
