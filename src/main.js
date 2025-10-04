

const shareButton = document.getElementById('share-button')
const shareIcon = document.getElementById('share-icon')
const cardBottom = document.getElementById('card-bottom')
const defaultBottom = document.getElementById('default-bottom')
const shareBottom = document.getElementById('share-bottom')

shareButton.addEventListener('click', function() {
    const isDesktop = window.matchMedia('(min-width: 60rem)').matches;
    shareButton.classList.toggle('active');
    shareIcon.classList.toggle('active');
    cardBottom.classList.toggle('active');
    defaultBottom.classList.toggle('active');
    shareBottom.classList.toggle('active');
    if (isDesktop && shareBottom.classList.contains('active')){
        const buttonLeft = shareButton.offsetLeft;
        const buttonWidth = shareButton.offsetWidth;
        const shareBarWidth = shareBottom.offsetWidth;
        const desiredLeft = buttonLeft + (buttonWidth / 2) - (shareBarWidth / 2);
        shareBottom.style.left = `${desiredLeft}px`;
    }
});