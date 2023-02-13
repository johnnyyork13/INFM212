const navButton = document.getElementsByClassName('navButton');
const navDrop = document.getElementsByClassName('navDrop');

function dropDownActivate() {
    for (i = 0; i < navButton.length; i++)
    {
        let e = navButton[i];
        let n = navDrop[i];
        e.addEventListener('mouseenter', function(){
            e.parentNode.childNodes[3].style.visibility = 'visible';
        })
        e.addEventListener('mouseleave', function(){
            e.parentNode.childNodes[3].style.visibility = 'hidden';
        })
        n.addEventListener('mouseenter', function(){
            n.parentNode.childNodes[3].style.visibility = 'visible';
        })
        n.addEventListener('mouseleave', function(){
            n.parentNode.childNodes[3].style.visibility = 'hidden';
        })
    }
}

dropDownActivate();

//MOBILE MENU DROPDOWN
const mobileHeader = document.getElementsByClassName('mobileMenuHeader');
const hamburger = document.getElementById('hamburgerMenu');
const mobileMenuContainer = document.getElementById('mobileMenuContainer');

function mobileDropDownActivate(){
    hamburger.addEventListener('mouseenter', function(){
        mobileMenuContainer.style.visibility = 'visible'
    })
    hamburger.addEventListener('mouseleave', function(){
        mobileMenuContainer.style.visibility = 'hidden';
        cleanMobileDropDown();
    })
    mobileMenuContainer.addEventListener('mouseenter', function(){
        mobileMenuContainer.style.visibility = 'visible';
    })
    mobileMenuContainer.addEventListener('mouseleave', function(){
        mobileMenuContainer.style.visibility = 'hidden';
        cleanMobileDropDown();
    })

    for (i = 0; i < mobileHeader.length; i++) {
        let e = mobileHeader[i];
        e.addEventListener('click', function(){
            cleanMobileDropDown();
            e.parentNode.childNodes[3].style.visibility = 'visible';
            e.parentNode.childNodes[3].style.position = 'relative';
        })
    }
}

function cleanMobileDropDown() {
    for (i = 0; i < mobileHeader.length; i++) {
        let e = mobileHeader[i];
        e.parentNode.parentNode.childNodes[1].childNodes[3].style.visibility = 'hidden';
            e.parentNode.parentNode.childNodes[1].childNodes[3].style.position = 'absolute';
            e.parentNode.parentNode.childNodes[3].childNodes[3].style.visibility = 'hidden';
            e.parentNode.parentNode.childNodes[3].childNodes[3].style.position = 'absolute';
            e.parentNode.parentNode.childNodes[5].childNodes[3].style.visibility = 'hidden';
            e.parentNode.parentNode.childNodes[5].childNodes[3].style.position = 'absolute';
            e.parentNode.parentNode.childNodes[7].childNodes[3].style.visibility = 'hidden';
            e.parentNode.parentNode.childNodes[7].childNodes[3].style.position = 'absolute';
            e.parentNode.parentNode.childNodes[9].childNodes[3].style.visibility = 'hidden';
            e.parentNode.parentNode.childNodes[9].childNodes[3].style.position = 'absolute';
    }
}

mobileDropDownActivate();