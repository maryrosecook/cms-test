app.service('jsonService', [function(){
var self = this;
  self.json = [];
  self.blocks = [];
  self.productArray = [];
  self.productBlock = {"type": "products",
"products": self.productArray};

  self.createTextBlock = function(titleText,bodyText){
    self.json.push({
      "type" : "text",
      "title": titleText,
      "body": bodyText
    });
  };

  self.saveImageBlock = function(){
    self.json.push(self.productBlock);
    self.productArray= [];
}

  self.createImage = function(image){
    self.productArray.push(image);
  };
}]);
