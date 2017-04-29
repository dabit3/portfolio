'use strict'

angular.module('portfolioApp.config', [])

portfolioApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
		
    // Main Nav
		.state('index', {
      url: '/',
      templateUrl: 'views/blog.html'
		})
		
		.state('about', {
			url: "/about",
			templateUrl: 'views/about.html'
		})
		.state('contact', {
			url: "/contact",
			templateUrl: 'views/contact.html',
       controller: 'ContactCtrl'
		})

    .state('book', {
      url: '/book-time',
      templateUrl: 'views/book-time.html'
    })

		// Blog states

		.state('blog', {
			url: '/blog', 
			templateUrl: 'views/blog.html'
		})

		.state('angulardirectives1', {
			url: '/angular-directives-with-jquery-one',
			templateUrl: 'views/angulardirectives1.html'
		})

		// Greensock presentation

		.state('greensock', {
			url: '/blog/greensock', 
			templateUrl: 'views/greensock/main.html'
		})

		.state('pageone', {
			url: '/blog/greensock/one',
			templateUrl: 'views/greensock/pageone.html'
		})

		.state('pagetwo', {
			url: '/blog/greensock/two',
			templateUrl: 'views/greensock/pagetwo.html'
		})

		.state('pagethree', {
			url: '/blog/greensock/three',
			 templateUrl: 'views/greensock/pagethree.html'
		})

		.state('pagefour', {
			url: '/blog/greensock/four',
			 templateUrl: 'views/greensock/pagefour.html'
		})

		.state('pagefive', {
			url: '/blog/greensock/five',
			 templateUrl: 'views/greensock/pagefive.html'
		})

		// Ionic Blog

		.state('ionicone', {
			url: '/blog/ionic/one',
			templateUrl: 'views/ionic/pageone.html'
		})

		.state('ionictwo', {
			url: '/blog/ionic/two',
			templateUrl: 'views/ionic/pagetwo.html'
		})

		.state('ionicthree', {
			url: '/blog/ionic/three',
			templateUrl: 'views/ionic/pagethree.html'
		})

		.state('ionicfour', {
			url: '/blog/ionic/four',
			templateUrl: 'views/ionic/pagefour.html'
		})

		.state('ionicfive', {
			url: '/blog/ionic/five',
			templateUrl: 'views/ionic/pagefive.html'
		})
		
		.state('ionicsix', {
			url: '/blog/ionic/six',
			templateUrl: 'views/ionic/pagesix.html'
		})

		.state('ionicseven', {
			url: '/blog/ionic/seven',
			templateUrl: 'views/ionic/pageseven.html'
		})

		// EzSchedule
		// .state('index.shots.ezschedule', {
		// 	url: '/ezschedule',
		// 	templateUrl: 'views/ezschedule.html',
		// 	controller: 'EzscheduleController'
		// })
		// .state('index.shots.ezschedule.one', {
		// 	url: '/one',
		// 	templateUrl: 'views/ezschedule/one.html'
		// })
		// .state('index.shots.ezschedule.two', {
		// 	url: '/two',
		// 	templateUrl: 'views/ezschedule/two.html'
		// })
		// .state('index.shots.ezschedule.three', {
		// 	url: '/three',
		// 	templateUrl: 'views/ezschedule/three.html'
		// })
		// .state('index.shots.ezschedule.four', {
		// 	url: '/four',
		// 	templateUrl: 'views/ezschedule/four.html'
		// })
		
		// FirstGraphix
		// .state('index.shots.firstgraphix', {
		// 	url: '/firstgraphix',
		// 	templateUrl: 'views/firstgraphix/firstgraphix.html',
		// 	controller: 'FirstGraphixController'
		// })
		// .state('index.shots.firstgraphix.one', {
		// 	url: '/firstgraphix/one',
		// 	templateUrl: 'views/firstgraphix/one.html'
		// })
		// .state('index.shots.firstgraphix.two', {
		// 	url: '/firstgraphix/two',
		// 	templateUrl: 'views/firstgraphix/two.html'
		// })
		// .state('index.shots.firstgraphix.three', {
		// 	url: '/firstgraphix/three',
		// 	templateUrl: 'views/firstgraphix/three.html'
		// })
		// .state('index.shots.firstgraphix.four', {
		// 	url: '/firstgraphix/four',
		// 	templateUrl: 'views/firstgraphix/four.html'
		// })

		// HBAM
		// .state('index.shots.hbam', {
		// 	url: '/homebuildersassociationofmississippi',
		// 	templateUrl: 'views/hbam/hbam.html',
		// 	controller: 'HbamController'
		// })
		// .state('index.shots.hbam.one', {
		// 	url: '/homebuildersassociationofmississippi/one',
		// 	templateUrl: 'views/hbam/one.html'
		// })

      // Martin
      // .state('index.shots.martin', {
      //     url: '/martin',
      //     templateUrl: 'views/martin/martin.html',
      //     controller: 'MartinCtrl'
      // })
      // .state('index.shots.martin.one', {
      //     url: '/one',
      //     templateUrl: 'views/martin/one.html'
      // })

      // Hamilton
      // .state('index.shots.hamilton', {
      //     url: '/hamilton',
      //     templateUrl: 'views/hamilton/hamilton.html',
      //     controller: 'HamiltonCtrl'
      // })
      // .state('index.shots.hamilton.one', {
      //     url: '/one',
      //     templateUrl: 'views/hamilton/one.html'
      // })
		
		// Bridgers Smith
		// .state('index.shots.bridgerssmith', {
		// 	url: '/bridgerssmith',
		// 	templateUrl: 'views/bridgerssmith/bridgerssmith.html',
		// 	controller: 'BridgersSmithCtrl'
		// })
		// .state('index.shots.bridgerssmith.one', {
		// 	url: '/one',
		// 	templateUrl: 'views/bridgerssmith/one.html'
		// })
		// .state('index.shots.bridgerssmith.two', {
		// 	url: '/two',
		// 	templateUrl: 'views/bridgerssmith/two.html'
		// })
		// USOGA
		// .state('index.shots.usoga', {
		// 	url: '/usoga',
		// 	templateUrl: 'views/usoga/usoga.html',
		// 	controller: 'UsogaCtrl'
		// })
		// .state('index.shots.usoga.one', {
		// 	url: '/usoga/one',
		// 	templateUrl: 'views/usoga/one.html'
		// })
		// Connect 
		// .state('index.shots.connect', {
		// 	url: '/connect',
		// 	templateUrl: 'views/connect/connect.html',
		// 	controller: 'ConnectCtrl'
		// })
		// .state('index.shots.connect.one', {
		// 	url: '/connect/one',
		// 	templateUrl: 'views/connect/one.html'
		// })

		// MSDOC 
		// .state('index.shots.msdoc', {
		// 	url: '/msdoc',
		// 	templateUrl: 'views/msdoc/msdoc.html',
		// 	controller: 'MsdocCtrl'
		// })
		// .state('index.shots.msdoc.one', {
		// 	url: '/msdoc/one',
		// 	templateUrl: 'views/msdoc/one.html'
		// })
		// .state('index.shots.msdoc.two', {
		// 	url: '/msdoc/two',
		// 	templateUrl: 'views/msdoc/two.html'
		// })

		// OGP
		// .state('index.shots.ogp', {
		// 	url: '/ogp',
		// 	templateUrl: 'views/ogp/ogp.html',
		// 	controller: 'OgpCtrl'
		// })
		// .state('index.shots.ogp.one', {
		// 	url: '/ogp/one',
		// 	templateUrl: 'views/ogp/one.html'
		// })
		// .state('index.shots.ogp.two', {
		// 	url: '/ogp/two',
		// 	templateUrl: 'views/ogp/two.html'
		// })
		// .state('index.shots.ogp.three', {
		// 	url: '/ogp/three',
		// 	templateUrl: 'views/ogp/three.html'
		// })
		// .state('index.shots.ogp.four', {
		// 	url: '/ogp/four',
		// 	templateUrl: 'views/ogp/four.html'
		// })
		// .state('index.shots.ogp.five', {
		// 	url: '/ogp/five',
		// 	templateUrl: 'views/ogp/five.html'
		// })
		// .state('index.shots.ogp.six', {
		// 	url: '/ogp/six',
		// 	templateUrl: 'views/ogp/six.html'
		// })
		// .state('index.shots.ogp.seven', {
		// 	url: '/ogp/seven',
		// 	templateUrl: 'views/ogp/seven.html'
		// })

		// $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

	}])