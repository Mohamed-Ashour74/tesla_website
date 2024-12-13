document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // Hide main content initially
    mainContent.style.display = 'none';
    mainContent.style.opacity = '0';
    
    // Ensure splash screen is visible initially
    splashScreen.style.opacity = '1';
    splashScreen.style.display = 'flex';
    
    // Use a single timeout to handle splash screen and content transition
    setTimeout(() => {
        // Fade out splash screen
        splashScreen.style.transition = 'opacity 1s ease-out';
        splashScreen.style.opacity = '0';
        
        // After fade out, hide splash screen and show main content
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Smooth fade in for main content
            let opacity = 0;
            function fadeIn() {
                opacity += 0.1;
                mainContent.style.opacity = opacity;
                
                if (opacity < 1) {
                    requestAnimationFrame(fadeIn);
                }
            }
            
            requestAnimationFrame(fadeIn);
        }, 1000);
    }, 3000);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Parallax-like effect for hero header
    const heroHeader = document.querySelector('.hero-header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroHeader.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});
