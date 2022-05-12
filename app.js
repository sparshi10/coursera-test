(function(){
  'use strict'
  angular.module("NameCalculator", [])
  .controller("NameCalculatorController",function($scope){

$scope.name = '';
$scope.totalValue= 0;
$scope.totalNumeric = function(){
  var totalNameValue = calculateNumericValue($scope.name);
  $scope.totalValue = totalNameValue;
}
function calculateNumericValue(string){
  var totalStringValue = 0;
  for(var i = 0; i<string.length; i++){
    totalStringValue += string.charCodeAt()
  }
  return totalStringValue;
}
  });
})();
