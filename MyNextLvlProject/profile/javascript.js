const frontBtn = document.getElementById('frontBtn');
const backBtn = document.getElementById('backBtn');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const cameraFront = document.getElementById('cameraFront');
const cameraBack = document.getElementById('cameraBack');
const pFront = document.getElementById('pFront');
const pBack = document.getElementById('pBack');

cardFront.style.visibility = 'hidden';
cardBack.style.visibility = 'hidden';
cameraFront.style.visibility = 'visible';
cameraFront.style.visibility = 'visible';
pFront.style.visibility = 'visible';
pBack.style.visibility = 'visible';

function showCard(card, camera, p) {
    card.style.visibility = 'visible';
    camera.style.visibility = 'hidden';
    p.style.visibility = 'hidden';
}


frontBtn.addEventListener('click', function(){
    showCard(cardFront, cameraFront, pFront);
})

backBtn.addEventListener('click', function(){
    showCard(cardBack, cameraBack, pBack);
})

function saveChanges() {
    alert('Your information has been updated. Click OKAY to return to your profile.')
    window.location.href = "profile.html";
}