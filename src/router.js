'use strict';

/**
 * Router class
 */
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'components/tabs/tabs.html'
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'components/tabs/controllers/home.html',
          controller: 'HomeCtrl as vm'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'components/tabs/controllers/about.html',
          controller: 'AboutCtrl as vm'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/home');
}

module.exports = Router;