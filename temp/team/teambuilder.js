angular.module('teambuilder', [])
.directive('openTeam', function($window) {
	return {
		restrict: 'A',
		link: clicker
	}

	function clicker(scope, element, attr) {

		$('.teamhovercontainer').bind('click', function() {
			var top = $window.pageYOffset
			if (top > 10) {
				$('html, body').animate({scrollTop: 0}, 400);
				TweenMax.to('.teamdrilldownwrapper', .5, {height:300, delay:.6})
				TweenMax.to('.teamdrilldowncontainer', .3, {opacity:1, delay:1.1})
			} else {
				TweenMax.to('.teamdrilldownwrapper', .3, {height:300})
				TweenMax.to('.teamdrilldowncontainer', .3, {opacity:1, delay:.6})
			}
			
		})
	}
})
.controller('TeamController', TeamController);

function TeamController($scope, $timeout, $window) {
	var open = false;
	$scope.show = false;
	$scope.visible = false

	$scope.openTeam = function(name) {
		console.log($window.pageYOffset)
		$scope.show = true;
		$scope.visible = true;

		$scope.name = '';
		$scope.title = '';
		$scope.quote = '';
		$scope.bio = '';
		$scope.linkedinUrl = '';
		$scope.email = '';
		$scope.img = '';
		$scope.spotify = '';

		if(open) {
			var top = $window.pageYOffset
			if(top > 10) {
				TweenMax.to('.teamdrilldowncontainer', .2, {opacity:0, delay:.6})
				TweenMax.to('.teamdrilldowncontainer', .2, {opacity:1, delay:.8})
			} else {
				TweenMax.to('.teamdrilldowncontainer', .2, {opacity:0})
				TweenMax.to('.teamdrilldowncontainer', .2, {opacity:1, delay:.2})
			}
			
		} else {
			if(top > 10) {
				TweenMax.to('.teamdrilldowncontainer', 0, {opacity:0})
				TweenMax.to('.teamdrilldowncontainer', .3, {opacity:1, delay:.6})
			} else {
				TweenMax.to('.teamdrilldowncontainer', 0, {opacity:0})
				TweenMax.to('.teamdrilldowncontainer', .3, {opacity:1, delay:.3})
			}
		}

		$scope.name = people[name].name;
		$scope.title = people[name].title;
		$scope.quote = people[name].quote;
		$scope.bio = people[name].bio;
		$scope.linkedinUrl = people[name].linkedinUrl;
		$scope.email = people[name].email;
		$scope.img = people[name].img
		$scope.spotify = people[name].spotify;

		}

	var people = {
		russ: {
			name: 'Russ Davis',
			title: 'Founder & CEO',
			quote: 'Be the change you wish to see in the world." -Mahatma Gandhi',
			bio: 'Having both extensive practical and academic knowledge of K-12 data systems, Russ is the driver and day-to-day overseer of SchoolStatus. He uses his previous experience running a successful consulting firm coupled with his tours working with education on both the local and state levels to help improve education from within. He strives to change education, forever.',
			linkedinUrl: 'https://www.linkedin.com/profile/view?id=11133282',
			email: 'russ@schoolstatus.com',
			spotify: 'https://play.spotify.com/user/russdavisdotcom',
			visible:false,
			img: 'russl.png'
		},
		nick: {
			name: 'Nick Peterman', 
			title: 'Customer Experience', 
			quote: '"Human salvation lies in the hands of the creatively maladjusted." -Dr. Martin Luther King, Jr.',
			bio: 'As a former classroom teacher, Nick drives to constantly improve our customer experience. Having served in various roles, including technology director, for several K-12 institutions, Nick brings a wealth of practical knowledge to SchoolStatus. In charge of customer experiences at SchoolStatus, his experience and strong work ethic make him an invaluable member of our team. ',
			linkedinUrl: '',
			email: 'nick@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'nickl.png'
		},
		josh: {
			name: 'Josh Deere',
			title: 'Lead Engineer',
			quote: '"Fortuna Favet Fortibus. (Fortune Favors the Strong)" -Latin Proverb',
			bio: 'Building interfaces between complex data systems is a monumental task. With his extensive background in healthcare, Josh leads our efforts to integrate the various data systems in K-12. Never backing down from a programming challenge, he enables our company to develop elegant, powerful solutions that drive our passion for education forward.',
			linkedinUrl: 'http://www.linkedin.com/in/joshdeere?__hstc=34816510.b6b639c60019ea0de8dd9c6e9a3a47d1.1437768782184.1437768782184.1437768782184.1&__hssc=34816510.2.1437768782185&__hsfp=894087851',
			email: 'josh@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'joshl.png'
		},
		leslie: {
			name: 'Leslie Ortego',
			title: 'Operations Manager',
			quote: '"We make a living by what we get, but we make a life by what we give." -Sir Winston Churchill',
			bio: 'As a company that prides itself on attention to even the smallest detail, keeping everyone on the same page can be difficult. Hailing from the financial sector and tasked with the management of millions of dollars in financial transactions over the years, Leslie brings a keen fiscal management style and advanced logistical capabilities to SchoolStatus.',
			linkedinUrl: 'https://www.linkedin.com/profile/view?id=321628409',
			email: 'leslie@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'lesliel.png'
		},
		robert: {
			name: 'Robert Reeder',
			title: 'Customer Liason',
			quote: '"To know even one life has breathed easier because you have lived. This is to have succeeded."-Ralph Waldo Emerson',
			bio: 'With a proven background working with the public, Robert strives to listen to and advocate for our customers. Squashing bugs, solving issues, or even performing one-on-one trainings are just a few of Robert\'s important tasks at SchoolStatus. At SchoolStatus, Robert provides a conduit with which we determine customer need and help make them successful in any way we can.',
			linkedinUrl: '',
			email: 'robert@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'robertl.png'
		},
		lee: {
			name: 'Lee Johnson',
			title:'Senior Mobile Developer',
			quote: '"Vision is the art of seeing what is invisible to others." -Jonathan Swift',
			bio: 'At SchoolStatus we strive to create apps that change the world. As more and more data pours in, our customers must be ready to analyze and take action... anywhere. Lees experience creating mobile applications for some of the largest public and private entities in the United States makes him uniquely suited to lead our mobile development team. ',
			/* had to remove the apostrophe from "Lee's" */
			linkedinUrl: 'https://www.linkedin.com/pub/lee-johnson/5/75/6b8',
			email: 'lee@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'leel.png'
		},
		gary: {
			name: 'Gary Mathews, Phd',
			title: 'Marketing Consultant',
			quote: '"Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible." -St. Francis of Assisi',
			bio: 'Leadership is a trait often learned through experience. Having over 25 years leading some of the largest school disricts in the southeastern United States, Gary brings a wealth of practical and personal knowledge to the SchoolStatus team. Gary works in our developing markets to create a one-on-one connection with educational leaders to help us understand their needs.',
			linkedinUrl: '',
			email: 'gary@schoolstatus.com',
			spotify: '',
			visible: false,
			img: '1l.png'
		},
		linell: {
			name: 'Linell Bonnette',
			title: 'Jr. Software Developer',
			quote: '"All we have to decide is what to do with the time that is given us." -J. R. R. Tolkien',
			bio: 'Inspired by educators to become a software developer, Linell enjoys helping to create a product that is for educators. Programming his calculator in high school to help with hard to remember formulas turned into creating and testing the code that teachers and administrators use on a daily basis.',
			linkedinUrl: '',
			email: 'linell@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'linelll.png'
		},
		blake: {
			name: 'Blake M. Haller',
			title: 'Director of Marketing',
			quote: '"The true sign of intelligence is not knowledge but imagination." -Albert Einstein',
			bio: 'Blake’s passion in serving the EdTech community for the past four years stems from a deep-seeded desire to see students achieve more and compete at a global level. It is that passion that drives her to help improve education through sharing best practices, promoting truly cutting edge resources, and equipping educators with knowledge and information to succeed.',
			linkedinUrl: '',
			email: 'blake@schoolstatus.com',
			spotify: 'https://www.linkedin.com/profile/view?id=24345756',
			visible: false,
			img: 'blakel.png'
		},
		joy: {
			name: 'Joy Smithson, PhD',
			title: 'Data Scientist',
			quote: '"Many of the most gratifying experiences in life are those that are the most demanding." -David Miller, AWOL on the Appalachian Trail',
			bio: 'Armed with a substantial background in research, Joy explores connections between the vast amounts of data available at SchoolStatus. Drawing conclusions from these relationships, she identifies potential problems so teachers and administrators can implement strategies to prevent negative outcomes. ',
			linkedinUrl: '',
			email: 'joy@schoolstatus.com',
			spotify: '',
			visible: false,
			img: 'joyl.png'
		},
		hector: {
			name: 'Hector',
			title: '',
			quote: '',
			bio: '',
			linkedinUrl: '',
			email: '',
			visible: false,
			img: 'hectorl.png'
		},
		richard: {
			name: 'Richard Walter',
			title: 'Senior Trainer',
			quote: '',
			bio: '',
			linkedinUrl: 'https://www.linkedin.com/pub/richard-walter/6/376/788',
			email: 'richard@schoolstatus.com',
			visible: false,
			img: 'richard2l.png'
		},
		ellen: {
			name: 'Ellen',
			title: '',
			quote: '',
			bio: '',
			linkedinUrl: '',
			email: '', 
			visible: false,
			img: 'ellenl.png'
		},
		nader: {
			name: 'Nader Dabit',
			title: 'Associate Software Developer',
			quote: '"The good we secure for ourselves is precarious and uncertain until it is secured for all of us and incorporated into our common life." - Jane Addams',
			bio: '',
			linkedinUrl: '',
			email: 'nader@schoolstatus.com',
			img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/0a8/120/1b3ec24.jpg'

		}
	}
}