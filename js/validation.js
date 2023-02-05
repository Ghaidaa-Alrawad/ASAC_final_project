(function () {
    if (!JSON.parse(localStorage.getItem('active'))) {
        location.replace('/index.html');
    }
  })();

function logOut(){
    localStorage.removeItem('active');
    location.replace('/index.html');
}

/**
 * When user logout
 * localStorage.removeItem('active');
 * 
 */
