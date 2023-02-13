const myBtn = document.getElementsByClassName('button');

for (i = 0; i < myBtn.length; i++) {
    let e = myBtn[i];
    e.addEventListener('click', function (){
        if (this.children[1].textContent === "+") {
            this.parentElement.children[1].style.position = 'relative';
            this.parentElement.children[1].style.visibility = 'visible';
            this.children[1].textContent = "-";
        } else if (this.children[1].textContent === "-") {
            this.parentElement.children[1].style.position = 'absolute';
            this.parentElement.children[1].style.visibility = 'hidden';
            this.children[1].textContent = "+";
        }
    })
}