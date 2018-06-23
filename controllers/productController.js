let uploader = {}
const auth = require('../services/authService')
const product = require('../services/productService')






uploader.home = function(req, res) {
  const ValidAuth = auth.ValidAuth
  if (ValidAuth == true) {
    res.render('agregar')
  }
  else {
    res.redirect('/auth')
  }
}

uploader.auth = function(req, res) {
  res.render('auth')
}

uploader.updateStatus = function(req, res) {
  auth.updateStatus(req.body.id);
  res.redirect('/')
}




uploader.authenticate = function(req, res) {
  const body = req.body
    if (body.username && body.password) {
      const ValidAuth = auth.authenticate(body);
      if (ValidAuth == true) {
        auth.updateStatus(ValidAuth);
        res.sendStatus(302)
      } else {
          res.sendStatus(400);}
    } else {

    res.sendStatus(400);

  }
}

uploader.addNew = function(req, res) {
  const body = req.body;
  if (body.name && body.url && body.price) {
    product.addProduct(body)
  } else {
    return res.sendStatus(400)
  }
}




module.exports = uploader;
