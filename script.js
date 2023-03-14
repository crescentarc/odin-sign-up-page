// set error messages for incorrect password entry
let password = document.querySelector(`#password`);
let passwordConfirm = document.querySelector(`#password-confirm`);
let passwordError = document.querySelector(`.password-error`);

passwordConfirm.addEventListener(`input`, function() {
    if (passwordConfirm.value !== password.value) {
        passwordError.textContent = `Passwords do not match`;
    } else if (passwordConfirm.value == password.value) {
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
