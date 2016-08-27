app.controller('controller', ['$scope','blockService',function($scope, blockService){
  $scope.test = blockService.test;
  $scope.finalArticle = blockService.finalArticle;

  $scope.addTextBlock = function(block){
    blockService.addTextBlock($scope.bodyText,$scope.titleText);
  };
 }]);
