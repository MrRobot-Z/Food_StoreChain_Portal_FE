/**
 * Created by M.Zaher on 8/7/2018.
 */

'use strict';

app.controller("MenuCtrl", function($scope, $http){


    $scope.ctrlName = "Hello this is menu controller";

    $http({
        method: 'GET',
        url: '//localhost:8080/food-portal/menu'
    }).then(function success(response) {
        console.log("Yeeees");
        console.log(response);
        $scope.menu = response.data;
    }, function error(response) {
        console.log("Noooooooo");
        console.log(response);
    });


    $scope.addToCart = function (item) {
        console.log(item);
    }

});


