var app = angular.module('myMod',[$http]);
app.controller('TestController', function ($scope, $http) {
    //Get data from server
    $http.get("conn.js")
        .then(function(response) {
            //First function handles success
            $scope.content = response.data;
        }, function(response) {
            //Second function handles error
            $scope.content = "Something went wrong";
    });
});