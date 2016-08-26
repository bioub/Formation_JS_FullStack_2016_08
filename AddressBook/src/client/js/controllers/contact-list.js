angular.module('app.controllers.contact-list', [
    'app.services.contact'
])
.controller('ContactListCtrl', function($scope, Contact) {
    //var Contact = $resource('/api/v1/contacts/:contactId', {contactId:'@_id'});

    $scope.contacts = Contact.query();

    // $http.get('/api/v1/contacts')
    //     .then(function(res) {
    //         $scope.contacts = res.data;
    //     });

});