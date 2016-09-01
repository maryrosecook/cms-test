app.controller('modalInstanceCtrl',['$scope','$uibModalInstance','$log', function($scope, $uibModalInstance, $log){

  $scope.data = {};
  $scope.data.title = block.title;
  $scope.data.body = block.body;

  $scope.saveBlock = function () {
    block.title = $scope.data.title;
    block.body = $scope.data.body;
    $uibModalInstance.close($scope.block);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


}])
