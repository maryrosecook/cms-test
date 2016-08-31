app.controller('modalInstanceCtrl',['$scope','$uibModalInstance', function ($scope, $uibModalInstance) {

  $scope.items = ['item1', 'item2', 'item3'];
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
