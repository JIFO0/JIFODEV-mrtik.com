window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const scrollTexts = document.querySelectorAll('.scroll-text');
    scrollTexts.forEach((text, index) => {
        if (index === 0) { 
            // Tylna warstwa
            text.style.transform = `translateX(${scrollPosition * 0.5}px)`;  
        } else if (index === 1) {
            // Przednia warstwa
            text.style.transform = `translateX(-${scrollPosition * 0.5}px)`;  
        }
    });
});
