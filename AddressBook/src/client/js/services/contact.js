angular.module('app.services.contact', [
    'ngResource'
]).factory('Contact', function($resource) {
    return $resource('/api/v1/contacts/:contactId', {contactId:'@_id'});
});