/**
 * Created by Dheeraj on 13-06-2017.
 */
nameApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('toDo', {
        url: '/toDo',
        templateUrl: 'toDo.html',
        controller: 'NameCtrl'
    }).state('home', {
        url: '/home',
        templateUrl: 'home.html'
    }).state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'aboutUs.html'
    })
});
