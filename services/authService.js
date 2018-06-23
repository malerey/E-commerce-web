let self = {}


self.ValidAuth = false;


self.updateStatus = function(status) {
  console.log(status);
  self.ValidAuth = status;
  console.log(self.ValidAuth, "2");

}

const user = {
  username: 'admin',
  password: 'admin',
}

self.authenticate = function (data) {
  if (data.username == user.username && data.password == user.password ) {
    return true;
  } else {
    return false;
  }
}



module.exports = self
