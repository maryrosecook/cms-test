app.controller('controller', ['$scope','blockService',function($scope, blockService){
  $scope.test = blockService.test;
  $scope.finalArticle = blockService.finalArticle;
  $scope.allProducts = blockService.products;
  $scope.json = blockService.json;

  $scope.addTextBlock = function(block){
    blockService.addTextBlock($scope.bodyText,$scope.titleText);
  };

  $scope.addImage = function(image){
    blockService.addImage(image);
  };

  $scope.saveImageBlock = function(){
    blockService.saveImageBlock();
  };



 }]);
