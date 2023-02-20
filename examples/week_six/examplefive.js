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
    function moveSlide(amount) {
        for (i = 0; i < slides.length; i++) {
            if ((parseFloat(slides[6].style.left + parseFloat(amount)) >= parseFloat("70%") && 
            (parseFloat(slides[0].style.left) + parseFloat(amount)) <= parseFloat("0")))
            {
                console.log(parseFloat(slides[0].style.left));
                let e = slides[i];
                let startPos = parseFloat(e.style.left);
                console.log(slides[6].style.left);
                e.style.left = `${startPos - amount}%`; 
            } 
            
        }
    }
    
    previous.addEventListener('click', function(){
        moveSlide(10);
    })
    next.addEventListener('click', function(){
        moveSlide(-10);
    })
})
