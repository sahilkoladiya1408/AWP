var myApp = angular.module("myMod", []);

myApp.controller("myController", function ($scope) {
  $scope.products = [
    { Name: "", Price: "", gst: "", qty: "", total: 0 },
    { Name: "", Price: "", gst: "", qty: "", total: 0 },
    { Name: "", Price: "", gst: "", qty: "", total: 0 },
    { Name: "", Price: "", gst: "", qty: "", total: 0 },
    { Name: "", Price: "", gst: "", qty: "", total: 0 },
  ];

  $scope.total = function () {
    var total = 0;
    angular.forEach($scope.products, function (product, index) {
      total += product.total;
    });
    console.log(total);
    return total;
  };
});