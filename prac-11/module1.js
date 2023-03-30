const myApp = angular.module("myMod",[]);

myApp.controller("myController", function ($scope) {
  $scope.products = [
    {name:'', price:'', qty: ''},
    {name:'', price:'', qty: ''},
    {name:'', price:'', qty: ''},
    {name:'', price:'', qty: ''},
    {name:'', price:'', qty: ''}
  ]
  
  $scope.myFunction = (x)=>{
    $scope.order = x;
  }

});