// set error messages for incorrect password entry
let password = document.querySelector(`#password`);
let passwordConfirm = document.querySelector(`#password-confirm`);
let passwordError = document.querySelector(`.password-error`)
let passwordConfirmError = document.querySelector(`.password-confirm-error`);

passwordConfirm.addEventListener(`input`, function() {
    if (passwordConfirm.value !== password.value) {
        passwordConfirmError.textContent = `Passwords do not match`;
    } else if (passwordConfirm.value == password.value) {
        passwordConfirmError.textContent = ``;
    }
})

password.addEventListener(`input`, function() {
    if(password.value.length < 8) {
        passwordError.textContent = `Password must be 8-12 characters long`;
    } else {
        passwordError.textContent = ``;
    }

})

//set error message for incorrect phone number entry
let phone = document.querySelector(`#phone`);
let phoneError = document.querySelector(`.phone-error`);

phone.addEventListener(`input`, function() {
    if(phone.value.length < 10 || phone.value.length > 10) {
        phoneError.textContent = `Phone number must be 10 numbers (No dashes)`;
    } else if (phone.value.length == 10) {
        phoneError.textContent = ``;
    }
})

//set error message for incorrect email entry
let email = document.querySelector(`#email`);
let emailError = document.querySelector(`.email-error`); 
var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener(`input`, function() {
    if (email.value.match(emailPattern)) {
        emailError.textContent = ``;
    }
    else {
        emailError.textContent = 
        `Please enter email in valid format (e.g. johnsmith@website.com)`;
    }
})