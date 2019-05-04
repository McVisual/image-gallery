const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')]
const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img => {
    img.addEventListener('click', imgClick);
});

function imgClick(e){
    // Reset the opacity
    imgs.forEach(img => img.style.opacity = 1);

    // Change current image to clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 400);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}