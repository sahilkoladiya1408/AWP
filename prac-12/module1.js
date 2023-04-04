var app = angular.module("myMod", []);
app.controller("productController", function ($scope, $http) {
  $http.get("http://localhost:8000/product").then(function (response) {
    $scope.myData = response.data;
  });
});