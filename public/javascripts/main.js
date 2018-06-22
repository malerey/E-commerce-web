$('#logout').on('click', function() {

  $.ajax({
    url: 'http://localhost:3000/authenticate',
    method: 'POST',
    data: {
      username: 'a',
      password: 'a',
    }
}).done(function() {
  alert("new pass")
});
});

$('#validate').on('click', function() {
  let username = $('#username').val();
  let password = $('#password').val();

  $.ajax({
    url: 'http://localhost:3000/authenticate',
    method: 'POST',
    data: {
      username: username,
      password: password,
    },
    statusCode: {
  		'302': function() {
	  	   window.location.replace('/agregar');
	    }
    }
  })
});


$('#send').on('click', function() {
  let name = $('#product-name').val();
  let url = $('#product-url').val();
  let price = $('#product-price').val();

  $.ajax({
    url: 'http://localhost:3000/add',
    method: 'POST',
    data: {
      name: name,
      url: url,
      price: price,
    }
  }).done(function(data) {
  });
});
