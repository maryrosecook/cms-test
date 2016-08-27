app.controller('controller', ['$scope','blockService',function($scope, blockService){
  $scope.test = blockService.test;
 }]);
