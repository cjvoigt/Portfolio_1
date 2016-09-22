//sets cookie with name = cname and value = cvalue for exdays
function setCookie(cname, cvalue, exdays) {
  if(exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = " expires="+ d.toUTCString();
  } else {
    var expires = "";
  }
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

//retrives cookies by name
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

//devares cookie with name = cname
function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

//stores cookies in localstorage
function storeThenDeleteCookies(cookieNames) {
  if (typeof(Storage) === "undefined") {
    alert("Your browser doesn't support local storage.");
  }

  var cookies = document.cookie.split(';');
  for(var i = 0; i < cookies.length; i++) {
    var cookieValue = getCookie(cookieNames[i]);
    localStorage.setItem(cookieNames[i], cookieValue);
    deleteCookie(cookieNames[i]);
  }
}

function getLocalStorageValue(name) {
  return localStorage.getItem(name);
}
