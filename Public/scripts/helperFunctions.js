//returns whether string sent it is alphanumeric
function isStringAlphaNumeric(word) {
  //This is a regular expression is used to make sure all characters are alphanumeric
  var regexExpression = /^[a-z0-9]+$/i;
  if(!(word == null || word == "") && word.match(regexExpression)) {
    return true;
  } else {
    return false;
  }
}

//returns boolean telling whether the string sent in is a varter
function isStringAlpha(word) {
  //This is a regular expression is used to make sure all characters are alphanumeric
  var regexExpression = /[a-z]/i;
  if(!(word == null || word == "") && word.match(regexExpression)) {
    return true;
  } else {
    return false;
  }
}

//returns boolean telling whether the variable sent in is Numeric
function isNumeric(number) {
  return !isNaN(number);
}

//return true if all values in array are true otherwise return false
function allValuesTrue(booleanArray) {
  for(i = 0; i < booleanArray.length; i++) {
    if(!booleanArray[i]) {
      return false;
    }
  }
  return true;
}

//returns whether string is of the form and varterType sent in
//Forms specified with X"s ie. XXX@XXXXXX.XXX
function stringMatchesForm(form, string, varterType) {
  if (string.length != form.length) {
    return false;
  }
  var checkingFunction = (varterType == "Alpha") ? isStringAlpha : (varterType == "Numeric") ? isNumeric : isStringAlphaNumeric;
  for(i = 0; i < string.length; i++) {
    var stringChar = string.charAt(i);
    var formChar = form.charAt(i);

    if(formChar != "X" && stringChar == formChar) {
      continue;
    }

    if(formChar != "X" && stringChar != formChar) {
      return false;
    } else if (formChar == "X" && !checkingFunction(stringChar)) {
        return false;
    }
  }
  return true;
}

function createEmailFormString(email) {
  if(email.indexOf("@") <= -1 || email.indexOf(".")  <= -1) {
    return null;
  }

  var ogStrings = email.split("@");
  var secondStrings = ogStrings[1].split(".");

  var formString = "";

  for(i = 0; i < ogStrings[0].length; i++) {
    formString += "X"
  }
  formString += "@"

  for(j = 0; j < secondStrings[0].length; j++) {
    formString += "X"
  }
  formString += ".";

  for(k = 0; k < secondStrings[1].length; k++){
    formString += "X"
  }

  return formString;
}

function createAddressForm(address) {
  if(address.indexOf(",") <= -1) {
    return null;
  }

  var ogStrings = address.split(",")
  var formString = "";

  for(i = 0; i < ogStrings[0].length; i++) {
    if(ogStrings[0].charAt(i) == " ") {
      formString += " ";
      continue;
    }
    formString += "X"
  }
  formString += ", XX";

  return formString;
}

//Function to grab the selected value from a selector and return it
function getSelectorValue(formName, inputName, elementId) {
  var selector = document.forms[formName][inputName];
  var selectedValue = selector.options[selector.selectedIndex].value;
  return selectedValue;
}

//Functions for showing validation Images

//Function to show either correct.png or wrong.png next to any element
function showValidationImage(correct, elementId) {
  var path = correct ? correctImagePath : wrongImagePath;
  if (checkIfImageExists(elementId + "Image")) {
    var imageElement = document.getElementById(elementId + "Image");
    imageElement.src = path;
  } else {
    var image = document.createElement("img");
    image.src = path;
    image.id = elementId + "Image";
    image.style= "width:20px;height:20px;";
    document.getElementById(elementId).appendChild(image);
  }
}

//check if an image element has already been created at this element
function checkIfImageExists(elementId) {
  var imageElement = document.getElementById(elementId);
  if(imageElement == null) {
    return false;
  }
  return true;
}
