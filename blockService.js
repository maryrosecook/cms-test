app.service('blockService', [function(){
  var self = this;
  self.test = 'Hello world!';
  self.json = [];
  self.blocks = [];
  self.productArray = [];
  self.productBlock = {"type": "products",
"products": self.productArray};

  self.addTextBlock = function(titleText,bodyText){
    self.blocks.push({
      "type" : "text",
      "title": titleText,
      "body": bodyText
    });
    self.json.push({
      "type" : "text",
      "title": titleText,
      "body": bodyText
    });
  };

  self.saveImageBlock = function(){
    self.json.push(self.productBlock);
    console.log(self.json);
    console.log(self.blocks);
}

  self.createImage = function(image){
    self.productArray.push(image);
    self.blocks.push(
      self.products.filter(function(product){
        return (product.id === image);
      })
    );
  };


  self.products = [{
    "id": 167687,
    "title": "A Kind of Guise Mindelo T-Shirt (White)",
    "price": "80.00",
    "retailer": "Oipolloi",
    "image": "https://static.grabble.com/products/167687/149509c8ea32f07ab0027064b9b2b7ce.jpg"
  }, {
    "id": 167790,
    "title": "Linen-Cotton crew pullover",
    "price": "29.95",
    "retailer": "Gap",
    "image": "https://static.grabble.com/products/167790/dba4bd52b9764818c780fb4e471fa741.jpg"
  }, {
    "id": 168012,
    "title": "ASOS Skinny Blazer In Cotton",
    "price": "65.00",
    "retailer": "ASOS",
    "image": "https://static.grabble.com/products/168012/324927f3437e024b7301bdc05c542c28.jpg"
  }, {
    "id": 168013,
    "title": "Julep Printed Crew Neck Jumper",
    "price": "50.00",
    "retailer": "French Connection",
    "image": "https://static.grabble.com/products/168013/c1385ee4ba25e9c67cbade7071a9670c.jpg"
  }];


}]);
