// Open & Close moblie menu
const menuBtn = document.getElementById('navbarMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
menuBtn.addEventListener('click', function() {
    sideMenu.style.width = "280px"
})
closeMenu.addEventListener('click', function() {
    sideMenu.style.width = "0"
})

// accordion
const contentBox = document.getElementsByClassName("contentBox");
let i;
let j;

for (i = 0; i < contentBox.length; i++) {
    contentBox[i].addEventListener("click", function() {
        this.classList.toggle("active");
    })
}

// login & register
function toggle(type) {
    let blur = document.getElementById('blur');
    let registerPopup = document.getElementById('registerPopup');
    let loginPopup = document.getElementById('loginPopup');
    blur.classList.toggle('active');
    if(type === 'register') {
        registerPopup.style.display = 'block';
        loginPopup.style.display = 'none';
    } else {
        loginPopup.style.display = 'block';
        registerPopup.style.display = 'none';
    }
}

/* Submit Register */
/******************/
function formValidation() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('e-mail').value;
    let pnumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    let text = "";

    if (username(name)) {
    }
    if (Email(email)) {
    }
    if (PhoneNumber(pnumber)) {
    }
    if (Password(password)) {
    }
    return false;
}

// User name input validation
function username(name) {
    let message = document.getElementsByClassName("error-message");
    let letters = /^[A-Za-z]+$/;
    if (name === "" || name.match(letters)) {
        text="";
        message[0].innerHTML = text;
        return true;
    } else {
        text="user name should contain only letters";
        message[0].innerHTML = text;
        return false;
    }
}

// Email address input validation
function Email(email) {
    let message = document.getElementsByClassName("error-message");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
            
    if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
        text="";
        message[1].innerHTML = text;
        return true;
    } else {
        text="Wrong email format";
        message[1].innerHTML = text;
        return false;
    }
}

// Phone number validation
function  PhoneNumber(pnumber) {
    let message = document.getElementsByClassName("error-message");
    let numbers = /^[0-9]+$/;
    if ( pnumber =="" || pnumber.match(numbers)) {
        text="";
        message[2].innerHTML = text;
        return true;
    } else {
        text="Phone number should contain only numbers";
        message[2].innerHTML = text;
        return false;
    }
}

// Validate password
function Password(password) {
    let message = document.getElementsByClassName("error-message");
    let illegalChars = /[\W_]/; // allow only letters and numbers
    if (illegalChars.test(password)) { 
        text="Password contains illegal characters";
        message[3].innerHTML = text;
        return false;
    } else if ((password.search(/[0-9]+/) == -1) ) {
        text="Password should contain at least one number";
        message[3].innerHTML = text;
        return false;
    } else {
        text="";
        message[3].innerHTML = text;
        return true;
    }
}


/* Submit Login */
/******************/
function loginFormValidation() {
    let email = document.getElementById('e-mail').value;
    let password = document.getElementById('password').value;
    let text = "";

    if (loginEmail(email)) {
    }
    if (loginPassword(password)) {
    }
    return false;
}
// Email address input validation
function loginEmail(email) {
    let message = document.getElementsByClassName("login-error-message");
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
            
    if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
        text="";
        message[0].innerHTML = text;
        return true;
    } else {
        text="Wrong email format";
        message[0].innerHTML = text;
        return false;
    }
}
// Validate password
function loginPassword(password) {
    let message = document.getElementsByClassName("login-error-message");
    let illegalChars = /[\W_]/; // allow only letters and numbers
    if (illegalChars.test(password)) { 
        text="Password contains illegal characters";
        message[1].innerHTML = text;
        return false;
    } else if ((password.search(/[0-9]+/) == -1) ) {
        text="Password should contain at least one number";
        message[1].innerHTML = text;
        return false;
    } else {
        text="";
        message[1].innerHTML = text;
        return true;
    }
}