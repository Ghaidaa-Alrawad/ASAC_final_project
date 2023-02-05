(function () {
    if (!JSON.parse(localStorage.getItem('active'))) {
        location.replace('/ASAC_final_project/index.html');
    }
  })();

function logOut(){
    localStorage.removeItem('active');
    location.replace('/ASAC_final_project/index.html');
}
