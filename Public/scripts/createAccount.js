function finishButtonTapped() {
  validateForm();
  postFormData();
  goToCreateAccount();
}

function validateForm() {
  
}

function postFormData() {
  var data = {
    username: document.forms["createAccount"]["username"].value,
    password: document.forms["createAccount"]["password"].value,
    email: document.forms["createAccount"]["email"].value
  }

  setCookie("username", document.forms["createAccount"]["username"].value, 2);
  setCookie("username", document.forms["createAccount"]["email"].value, 2)

  $.ajax({
    url:"http://localhost:8080/create/account",
    type:'post',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

function goToCreateAccount() {
  window.location.href = "http://localhost:8080/create/account";
}
