const accHeader = document.getElementsByClassName('accHeader');
const accBody = document.getElementsByClassName('accBody');

const sideHeader = document.getElementsByClassName('sideHeader');
const sideBody = document.getElementsByClassName('sideBody');

//set variables
function setVar(cls) {
    for (i = 0; i < cls.length; i++) {
        let e = cls[i];
        e.parentElement.children[1].style.visibility = 'hidden';
        e.parentElement.children[1].style.position = 'absolute';
    }
}


function accordion(cls) {
    for (i = 0; i < cls.length; i++) {
        let e = cls[i];
        e.addEventListener('click', function(){
            if (e.parentElement.children[1].style.visibility === 'hidden') {
                e.parentElement.children[1].style.visibility = 'visible';
                e.parentElement.children[1].style.position = 'relative';
            } else {
                e.parentElement.children[1].style.visibility = 'hidden';
                e.parentElement.children[1].style.position = 'absolute';
            }
            
        })
    }
}

setVar(accHeader);
setVar(sideHeader);

accordion(accHeader);
accordion(sideHeader);
