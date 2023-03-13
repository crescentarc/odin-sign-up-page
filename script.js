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