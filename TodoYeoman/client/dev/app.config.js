;(function(ng) {
  'use strict';

  ng.module('TodoYeoman')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
