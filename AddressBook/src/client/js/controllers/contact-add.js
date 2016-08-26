angular.module('app.controllers.contact-add', [])
.controller('ContactAddCtrl', function($scope, $http, $location) {

    $scope.ajouter = function() {
        $http.post('/api/v1/contacts', $scope.contact)
            .then(function(res) {
               $location.url('/');
            });
    };
});