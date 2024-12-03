const topbar = document.querySelector('.topbar');
    const menu = document.querySelector('.menu');
    const placeholder = document.querySelector('.placeholder');

    function handleScroll() {
        const topbarHeight = topbar.offsetHeight; 
        const scrollPosition = window.scrollY; 

        if (scrollPosition > topbarHeight) {
            menu.classList.add('fixed');
            placeholder.classList.add('active');
        } else {
            menu.classList.remove('fixed');
            placeholder.classList.remove('active');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    menuMobile.classList.add('open'); 
});


closeBtn.addEventListener('click', () => {
    menuMobile.classList.remove('open'); 
});


document.addEventListener('click', (event) => {
    if (!menuMobile.contains(event.target) && !hamburger.contains(event.target)) {
        menuMobile.classList.remove('open');
    }
});

