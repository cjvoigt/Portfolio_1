function finishButtonTapped() {
  if(validateFormInput()) {
    postFormData();
    goToCreateAccount();
  } else {

  }
}

function validateFormInput() {
  var email = document.forms["createAccount"]["email"].value;
  var name =  document.forms["createAccount"]["username"].value;
  var password1 = document.forms["createAccount"]["password"].value;
  var password2 = document.forms["createAccount"]["password2"].value;

  if(password1 != password2) {
    return false;
  } else if(stringMatchesForm(createEmailFormString(email))){
    return false;
  } else if(!isStringAlphaNumeric(name)) {
    return false;
  }

  return true;
}

function postFormData() {
  var data = {
    username: document.forms["createAccount"]["username"].value,
    password: document.forms["createAccount"]["password"].value,
    email: document.forms["createAccount"]["email"].value
  }

  setCookie("username", document.forms["createAccount"]["username"].value, 2);
  setCookie("email", document.forms["createAccount"]["email"].value, 2)

  $.ajax({
    url:"http://localhost:8080/users/create",
    type:'post',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
}

function goToLogin() {
  window.location.href = "http://localhost:8080/login";
}
