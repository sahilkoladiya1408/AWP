var myApp = angular.module('myMod', ["ngRoute"]);

 myApp.controller('myController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from bill");
    $scope.model = undefined;
    $scope.billing = [];
    $scope.searchProduct = function(id) {
        console.log("search");
        /*$http.get('/billing/' + id).success(function(response) {
            $scope.billing.push(response[0]);
        });*/
        
        $scope.billing = [{"code":"a1","name":"a1","price":100,"gst":0.1},{"code":"a2","name":"a2","price":200,"gst":0.2},{"code":"a3","name":"a3","price":300,"gst":0.3},{"code":"a4","name":"a4","price":400,"gst":0.4}];
    }
    
    $scope.total = function() {
        //console.log($scope.model[0].qty);
        var total = 0;
        angular.forEach($scope.billing, function(product, index) {
            total += product.total;
        })
        console.log(total);
        return total;
    }
  }]);