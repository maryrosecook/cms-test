app.controller('controller', ['$scope','$uibModal','$log','blockService','jsonService',function($scope, $uibModal, $log, blockService, jsonService){

  $scope.allProducts = blockService.products;
  $scope.json = jsonService.json;
  $scope.blocks = blockService.blocks;
  $scope.textInput = false;
  $scope.showBlock = false;
  $scope.imageSelection = false;
  $scope.editable = false;
  $scope.showButtons = false;


  $scope.createTextBlock = function(){
    if((!$scope.titleText || $scope.titleText === '') && (!$scope.bodyText || $scope.bodyText === '')) { return; };
    blockService.createTextBlock($scope.titleText,$scope.bodyText);
    jsonService.createTextBlock($scope.titleText,$scope.bodyText);
    $scope.titleText = '';
    $scope.bodyText = '';
  };

  $scope.addImage = function(image){
    blockService.createImage(image);
    jsonService.createImage(image);
  };

  $scope.deleteBlock = function(block){
    var index = $scope.blocks.indexOf(block);
    $scope.blocks.splice(index, 1)
  }

  $scope.deleteImage = function(image){
    var index = $scope.blocks.indexOf(image);
    $scope.blocks.splice(index, 1)
  };

  $scope.saveImageBlock = function(){
    jsonService.saveImageBlock();
  };

  $scope.showTextInput = function(){
    if ($scope.textInput === false){
      $scope.textInput = true;
    } else {$scope.textInput = false};
  };

  $scope.showImageSelection = function(){
    if ($scope.imageSelection === false){
      $scope.imageSelection = true;
    } else {$scope.imageSelection = false};
  };

  $scope.textBlock = function(block){
    if(block.type === "text"){
      return true
    } else {return false};
  };

  $scope.showEditButtons = function(){
    if ($scope.showButtons === false){
      $scope.showButtons = true;
    } else {$scope.showButtons = false};
  };

  $scope.openModal = function(){
    var modal = Popeye.openModal({
      templateUrl: "my_modal.html"
    });
  };

  $scope.onDropComplete = function (index, block, evt) {
    var otherBlock = $scope.blocks[index];
    var otherIndex = $scope.blocks.indexOf(block);
    $scope.blocks[index] = block;
    $scope.blocks[otherIndex] = otherBlock;
  };

  //modal

  $scope.animationsEnabled = true;

  $scope.modalUpdate = function (selectedBlock) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',

      controller: function($scope, $uibModalInstance, block){
        $scope.backUp = angular.copy(block);
        $scope.block = block;

        $scope.saveBlock = function () {
          $uibModalInstance.close($scope.block);
        };

        $scope.cancel = function () {
          block = $scope.backUp;
          $uibModalInstance.dismiss('cancel');
        };
      },
      size: 'lg',
      resolve: {
        block: function () {
          return selectedBlock;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


}]);
