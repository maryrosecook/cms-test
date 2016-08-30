app.controller('controller', ['$scope','blockService','Popeye',function($scope, blockService, Popeye){
  $scope.test = blockService.test;
  $scope.finalArticle = blockService.finalArticle;
  $scope.allProducts = blockService.products;
  $scope.json = blockService.json;
  $scope.blocks = blockService.blocks;
  $scope.textInput = false;
  $scope.showBlock = false;
  $scope.imageSelection = false;
  $scope.editable = false;
  $scope.showButtons = false;

  $scope.addTextBlock = function(){
    blockService.addTextBlock($scope.titleText,$scope.bodyText);
    $scope.titleText = '';
    $scope.bodyText = '';
  };

  $scope.addImage = function(image){
    blockService.createImage(image);
  };

  $scope.editBlock = function(block){
    $scope.editable = true;
    $scope.textBlock = block;
  };

  $scope.saveBlock = function(){
    $scope.textBlock = {};
    $scope.editable = false;
  };

  $scope.deleteImage = function(image){
    var index = $scope.blocks.indexOf(image);
    $scope.blocks.splice(index, 1)
  };

  $scope.saveImageBlock = function(){
    blockService.saveImageBlock();
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



}]);
