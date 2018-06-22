self = {}
const productService = require('../services/productService');
const products = productService.getProducts;
/* GET home page. */
self.home = function(req, res) {
  console.log(products)
  res.render('index', {
    title: 'Ava de Faye',
    product: products,
  })
}

self.comingsoon = function(req, res) {
  res.render('comingsoon', {
  })
}

module.exports = self
