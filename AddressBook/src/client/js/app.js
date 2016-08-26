angular.module('app', [
    'app.controllers.contact-list',
    'app.controllers.contact-add',
    'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/contact-list.html',
            controller: 'ContactListCtrl'
        })
        .when('/ajouter', {
            templateUrl: 'js/views/contact-add.html',
            controller: 'ContactAddCtrl'
        })
        .otherwise({
            templateUrl: 'js/views/404.html'
        });


    $locationProvider.html5Mode(true);
});