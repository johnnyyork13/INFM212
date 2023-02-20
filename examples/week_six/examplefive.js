const slides = document.getElementsByClassName('slide');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

function resetSlides() {
    let startPos = 30;
    for (i = 0; i < slides.length; i++) {
        let e = slides[i];
        e.style.left = `${startPos * i}%`; 
    }
}
resetSlides();

window.addEventListener('load', function(){
    function moveLeft(amount) {
        let originalPos;
        let startSlide = parseFloat(slides[0].style.left);
        let endSlide = parseFloat(slides[slides.length-1].style.left);
        if (startSlide <= "0" && endSlide > "70" ) {
            for (i = 0; i < slides.length; i++) {
                let e = slides[i];
                originalPos = parseFloat(e.style.left);
                e.style.left = `${originalPos - amount}%`; 
            }
        } 
    }
    function moveRight(amount) {
        let originalPos;
        let startSlide = parseFloat(slides[0].style.left);
        let endSlide = parseFloat(slides[slides.length-1].style.left);
        if (startSlide < "0" && endSlide >= "70" ) {
            for (i = 0; i < slides.length; i++) {
                let e = slides[i];
                originalPos = parseFloat(e.style.left);
                e.style.left = `${originalPos + amount}%`; 
            }
        }
    }
    
    previous.addEventListener('click', function(){
        moveLeft(10);
    })
    next.addEventListener('click', function(){
        moveRight(10);
    })
})
