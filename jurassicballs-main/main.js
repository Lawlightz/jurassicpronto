document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


window.onload = () => {
    const dinoAnimation = document.querySelector('.dino-animation');

    const newImage = document.createElement('img');
    newImage.src = 'didireal.png';
    newImage.alt = 'Dinossauro';
    newImage.style.width = '100px';
    newImage.style.cursor = 'pointer';
    newImage.classList.add('dino-animation');

    dinoAnimation.replaceWith(newImage);

    newImage.addEventListener('click', function () {
        this.style.transition = 'transform 1s';
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 1000);
    });
};
