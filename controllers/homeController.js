self = {}
const productService = require('../services/productService');
const products = productService.getProducts;


self.home = function(req, res) {
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
