const password = document.getElementById('newPassword');
const confirmPassword = document.getElementById('newPasswordConfirm');
const countChar = document.getElementById('countChar');
const specialChar = document.getElementById('specialChar');
const numberChar = document.getElementById('numberChar');
const matchChar = document.getElementById('matchChar');
const notification = document.getElementById('notification');

password.addEventListener('focusout', function(){
    let match = matchPass();
    let check = checkCount();
    let special = checkSpecial();
    let number = checkNumber();
    if (match && check && special & number) {
        passwordPass();
    } else {
        passwordFail();
    }
})
confirmPassword.addEventListener('focusout', function(){
    let match = matchPass();
    let check = checkCount();
    let special = checkSpecial();
    let number = checkNumber();
    if (match && check && special & number) {
        passwordPass();
    } else {
        passwordFail();
    }
})

function passwordPass(){
    password.style.border = "var(--border)";
    confirmPassword.style.border = "var(--border)";
    notification.style.visibility = 'hidden';

}

function passwordFail(){
    password.style.border = '2px solid red';
    confirmPassword.style.border = '2px solid red';
    notification.style.visibility = 'visible';
}

function matchPass(){
    if (confirmPassword.value !== password.value && password.value.length > 0){
        matchChar.style.color = 'red';
        return false;
    } else if (confirmPassword.value === password.value && password.value.length > 0){
        matchChar.style.color = 'green';
        return true;
    }
}

function checkCount(){
    if (password.value.length >= 8 && password.value.length <= 16) {
        countChar.style.color = 'green';
        return true;
    } else {
        countChar.style.color = 'red';
        return false;
    }
}

function checkSpecial() {
    let specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", ".", "'", ";"];
    let passwordArray = password.value.split("");
    for (i = 0; i < specialArray.length; i++){
        if (passwordArray.includes(specialArray[i])) {
            specialChar.style.color = 'green';
            return true;
        } else {
            specialChar.style.color = 'red';
        }
    }
}

function checkNumber() {
    let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let passwordArray = password.value.split("");

    for (i = 0; i < password.value.length; i++){
        if (passwordArray.includes(numberArray[i])){
            numberChar.style.color = 'green';
            return true;
        } else {
            numberChar.style.color = 'red';
        }
    }
}