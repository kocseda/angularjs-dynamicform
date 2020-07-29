var formApp = angular.module('formApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
formApp.config(function ($routeProvider) {
    $routeProvider

        // home page route
        .when('/', {
            templateUrl: 'pages/create-form.html',
            controller: 'CreateFormController'
        })

        // show home page
        .when('/forms', {
            templateUrl: 'pages/create-form.html',
            controller: 'CreateFormController'
        })

        // dynamic form display route.
        .when('/forms/:formName', {
            templateUrl: 'pages/dynamic-form.html',
            controller: 'DynamicFormController'
        });
});



