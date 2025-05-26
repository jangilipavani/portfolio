document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .education-item, .certification-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const animationPoint = windowHeight - 100;
            
            if (elementPosition < animationPoint) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Hero section typing animation
    const heroText = document.querySelector('.hero h1');
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});
// Only add if you want exact positioning control
window.addEventListener('load', function() {
  const shapes = document.querySelectorAll('.shape');
  
  function repositionShapes() {
    shapes[0].style.top = `${window.innerHeight * 0.15}px`;
    shapes[0].style.left = `${window.innerWidth * 0.1}px`;
    shapes[1].style.bottom = `${window.innerHeight * 0.2}px`;
    shapes[1].style.right = `${window.innerWidth * 0.15}px`;
  }
  
  repositionShapes();
  window.addEventListener('resize', repositionShapes);
});
