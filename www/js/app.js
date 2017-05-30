// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

						 .state('login', {
						url: '/login',
						templateUrl: 'templates/login.html',
						//controller: 'AppCtrl'
					  })
						.state('welcome', {
						url: '/welcome',
						templateUrl: 'templates/welcome.html',
						//controller: 'AppCtrl'
					  })
						.state('register', {
						url: '/register',
						templateUrl: 'templates/register.html',
						//controller: 'AppCtrl'
					  })
						.state('regist2', {
						url: '/regist2',
						templateUrl: 'templates/welcome.html',
						//controller: 'AppCtrl'
					  })
						.state('manage', {
						url: '/manage',
						templateUrl: 'templates/manage.html',
						//controller: 'AppCtrl'
					  })
						.state('general', {
						url: '/general',
						templateUrl: 'templates/general.html',
						//controller: 'AppCtrl'
					  })
						.state('general_et', {
						url: '/general_et',
						templateUrl: 'templates/general_et.html',
						//controller: 'AppCtrl'
					  })
						.state('security', {
						url: '/security',
						templateUrl: 'templates/security.html',
						//controller: 'AppCtrl'
					  })
						.state('security_et', {
						url: '/security_et',
						templateUrl: 'templates/security_et.html',
						//controller: 'AppCtrl'
					  })
						.state('security_et_cf', {
						url: '/security_et_cf',
						templateUrl: 'templates/security_et_cf.html',
						//controller: 'AppCtrl'
					  })
						.state('search', {
						url: '/search',
						templateUrl: 'templates/search.html',
						//controller: 'AppCtrl'
					  })

  $urlRouterProvider.otherwise('/login');   
});