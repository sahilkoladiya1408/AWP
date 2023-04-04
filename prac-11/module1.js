var myApp = angular.module("myMod", []);

myApp.controller("myController", function ($scope) {
  $scope.products = [];

  $scope.myFunc = (x) => {
    $scope.order = x;
  };
  $scope.add = (name, price, qty) => {
    if (!name || !price || !qty) return;
    $scope.products.push({ Name: name, Price: price, qty });
  };
});