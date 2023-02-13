const weekLi = document.getElementsByClassName('weekLi');
const navLink = document.getElementsByClassName('navLink');
const navDiv = document.getElementsByClassName('navDiv');


for (i = 0; i < navDiv.length; i++)
{
    let e = navDiv[i];
    e.addEventListener('mouseenter', function(){
        openNavDiv(e.id);
    })
    e.addEventListener('mouseleave', function(){
        closeNavDiv(e.id);
    })
}

for (i = 0; i < navLink.length; i++) {
    let e = navLink[i];
    e.addEventListener('click', function(){
        openNavLink(e.id);
    })
}


function openNavDiv(e) {
    let element = document.getElementById(`${e}`);
    let elementChild = element.childNodes[1];

    element.style.color = 'black';
    element.style.backgroundColor = 'white';

    elementChild.style.visibility = 'visible';
    elementChild.style.borderTop = '3px dotted var(--main-color)';

}

function closeNavDiv(e) {
    let element = document.getElementById(`${e}`);
    let elementChild = element.childNodes[1];

    element.style.color = 'white';
    element.style.backgroundColor = 'var(--accent-color)';

    elementChild.style.visibility = 'hidden';

    closeNavLink();

}

function openNavLink(navId) {
    for (i = 0; i < weekLi.length; i++) {
        let e = weekLi[i];
        console.log(navId);
        if (e.parentNode.className === navId) {
            if (e.style.visibility === 'visible'){
                e.style.visibility = 'hidden';
                e.style.position = 'absolute';
            } else {
                e.style.visibility = 'visible';
                e.style.position = 'relative';
            }
        } else {
            e.style.visibility = 'hidden';
            e.style.position = 'absolute';
        }

    }
}

function closeNavLink() {
    //close all links
    for (i = 0; i < weekLi.length; i++) {
        let e = weekLi[i];
        e.style.visibility = 'hidden';
        e.style.position = 'absolute';
    }
}

