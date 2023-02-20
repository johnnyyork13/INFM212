const loginBox = document.getElementsByClassName('loginBox');
const createBox = document.getElementsByClassName('createBox');
const loginBtn = document.getElementById('loginBtn');
const createBtn = document.getElementById('createBtn');

function validate(cls) {
    for (i = 0; i < cls.length; i++) {
        let e = cls[i];
        if (e.value === "") {
            e.style.border = "2px solid red";
            return false;
        }
        e.style.border = "var(--border)";
    }
    return true;
} 

loginBtn.addEventListener('click', function(){
    let val = validate(loginBox);
    if (val) {
        window.location.href = "loggedin.html";
    }
})

createBtn.addEventListener('click', function(){
    let val = validate(createBox);
    if (val) {
        window.location.href = "loggedin.html";
    }
})

