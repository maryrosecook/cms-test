app.controller('mainCtrl', ['$scope','$uibModal','$log','blockService','jsonService',function($scope, $uibModal, $log, blockService, jsonService){

  $scope.allProducts = blockService.products;
  $scope.json = jsonService.json;
  $scope.blocks = blockService.blocks;
  $scope.textInput = false;
  $scope.showBlock = false;
  $scope.productSelection = false;
  $scope.editable = false;
  $scope.showButtons = false;


  $scope.createTextBlock = function(){
    if((!$scope.titleText || $scope.titleText === '') && (!$scope.bodyText || $scope.bodyText === '')) { return; };
    jsonService.createTextBlock($scope.titleText,$scope.bodyText);
    $scope.updateBlocks($scope.json);
    $scope.titleText = '';
    $scope.bodyText = '';
  };

  $scope.addProduct = function(product){
    jsonService.addProduct(product);
  };

  $scope.createProductBlock = function(){
    if (jsonService.productArray.length < 1) {return; };
    jsonService.createProductBlock();
    $scope.updateBlocks($scope.json);
  };

  $scope.showProductSelection = function(){
    if ($scope.productSelection === false){
      $scope.productSelection = true;
    } else {$scope.productSelection = false};
  };

  $scope.cancelProductBlock = function(){
    jsonService.productArray = [];
    $scope.productSelection = false;
  };

  $scope.deleteTextBlock = function(block){
    var index = $scope.json.indexOf(block);
    $scope.json.splice(index, 1);
    $scope.updateBlocks($scope.json);
  }

  $scope.deleteProduct = function(product){
    jsonService.deleteProduct(product);
    $scope.updateBlocks($scope.json);
  };

  $scope.showTextInput = function(){
    if ($scope.textInput === false){
      $scope.textInput = true;
    } else {$scope.textInput = false};
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
    var otherBlock = $scope.json[index];
    var otherIndex = $scope.json.indexOf(block);
    $scope.json[index] = block;
    $scope.json[otherIndex] = otherBlock;
    $scope.updateBlocks($scope.json);
  };

  //modal

  $scope.animationsEnabled = true;

  $scope.modalUpdate = function (selectedBlock) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',

      controller:'modalInstanceCtrl',
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

  $scope.updateBlocks = function(json){
    blockService.updateBlocks(json);
    $scope.blocks = blockService.blocks;
  };


}]);
