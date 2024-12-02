const topbar = document.querySelector('.topbar');
    const menu = document.querySelector('.menu');

    // Function to handle scroll event
    function handleScroll() {
        // Check if the topbar is out of view
        const topbarHeight = topbar.offsetHeight; // Height of topbar
        const scrollPosition = window.scrollY; // Current scroll position

        if (scrollPosition > topbarHeight) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove('fixed');
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    
// Select the hamburger icon, mobile menu, and close button
const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.close-btn');

// Open menu on hamburger click
hamburger.addEventListener('click', () => {
    menuMobile.classList.add('open'); // Slide in the mobile menu
});

// Close menu on close button click
closeBtn.addEventListener('click', () => {
    menuMobile.classList.remove('open'); // Slide out the mobile menu
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menuMobile.contains(event.target) && !hamburger.contains(event.target)) {
        menuMobile.classList.remove('open');
    }
});

