function postFormData() {
  var data = {
    username: document.forms["loginForm"]["username"].value,
    password: document.forms["loginForm"]["password"].value
  }

  setCookie("username", document.forms["loginForm"]["username"].value, 2);

  $.ajax({
    url:"http://localhost:8080/users/login",
    type:'post',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

function goToCreateAccount() {
  window.location.href = "http://localhost:8080/users/create";
}
