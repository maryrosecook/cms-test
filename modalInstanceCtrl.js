app.controller('modalInstanceCtrl',['$scope','$uibModalInstance', function ($scope, $uibModalInstance, block) {

  $scope.block = block;

  $scope.ok = function () {
    $uibModalInstance.close($scope.block);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
