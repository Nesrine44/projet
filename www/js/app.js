
angular.module('starter', ['ionic','angular-svg-round-progressbar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

     
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})
.config(function($stateProvider, $urlRouterProvider) {
	
  $stateProvider.state('index', {
      url: '/www/index',
      templateUrl: 'index.html',
      controller: 'Mainctrl'
    })
	 $urlRouterProvider.otherwise('/www/index')
});
