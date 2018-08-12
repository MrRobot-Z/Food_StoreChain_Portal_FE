/**
 * Created by M.Zaher on 8/7/2018.
 */

'use strict';

var app = angular.module("FoodApp", ["ui.router"]);


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state({
        name: "Home",
        url: "/home",
        templateUrl: "templates/main.html",
        controller: "MainCtrl"
    });


    $stateProvider.state({
        name: "Menu",
        url: "/menu",
        templateUrl: "templates/menu.html",
        controller: "MenuCtrl"
    });

    $stateProvider.state({
        name: "Cart",
        url: "/cart",
        templateUrl: "templates/cart.html",
        controller: "CartCtrl"
    });

    $stateProvider.state({
        name: "Account",
        url: "/account",
        templateUrl: "templates/account.html",
        controller: "AccountCtrl"
    });


});



