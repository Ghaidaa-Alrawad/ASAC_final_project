'use strict'
defaultUser();

function signIn(){

    //this method cancels the event if it is cancelable
    //meaning that the default action that belongs to the event will not occur
    event.preventDefault();
    const users =JSON.parse(localStorage.getItem('users'));
    console.log('this is the users', users);
    const error = document.getElementById('error');
    if(users) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let showError = true;
        for (const user of users) {
            if(user.username === username && user.password === password) {
                showError = false;
                localStorage.setItem('active', true);
                redirect("ASAC_final_project/homePage.html");
            }
        }
        if (showError) {
            error.style.visibility = 'visible';
            error.innerHTML = 'Wrong username or password'
        }
    }
}

function redirect(page){
    location.replace(page)
}

function defaultUser() {
    const users =[
        {
            username: 'the saif',
            password: 'thesaif'
        }, 
        {
            username: 'ghaidaa',
            password: 'ggg'
        }
    ]

    if(!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    }
}