app.service('jsonService', [function(){
var self = this;
  self.json = [];
  self.blocks = [];
  self.productArray = [];


  self.createTextBlock = function(titleText,bodyText){
    self.json.push({
      "type" : "text",
      "title": titleText,
      "body": bodyText
    });
  };

  self.createProductBlock = function(){
    self.json.push({"type": "products", "products": self.productArray});
    self.productArray= [];
}

  self.addProduct = function(product){
    self.productArray.push(product);
  };

  self.deleteProduct = function(product){
    for (var i = 0; i < self.json.length; i++) {
      if (self.json[i].type === "products") {
        var index = self.json[i].products.indexOf(product[0].id);
        self.json[i].products.splice(index,1);
        self.deleteEmptyArray(self.json[i])
      };
    };
  };

  self.deleteEmptyArray = function(array){
    var index = self.json.indexOf(array);
    if (array.products.length < 1){
      self.json.splice(index, 1)
    }
  }
}]);
