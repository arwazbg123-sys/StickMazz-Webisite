// ========================================
// FORBIDDEN LORE - TRANSITION ANIMATION
// Screen Glitch & Fade Effect
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeTransitionEffects();
});

function initializeTransitionEffects() {
    const transitionLinks = document.querySelectorAll('.transition-link');
    
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const isTerrifying = this.classList.contains('terrifying');
            
            // Jika link adalah yang menakutkan (UmbraBella), trigger glitch penuh
            if (isTerrifying) {
                triggerForbiddenTransition(href);
            } else {
                // F-AIM link - transition lebih smooth
                triggerNormalTransition(href);
            }
        });
    });
}

/**
 * Trigger animasi glitch penuh untuk UmbraBella (Terrifying)
 */
function triggerForbiddenTransition(href) {
    // Disable scroll
    document.body.style.overflow = 'hidden';
    
    const glitchScreen = document.getElementById('glitch-screen');
    const glitchPowerdown = document.getElementById('glitch-powerdown');
    const transitionComplete = document.getElementById('transition-complete');
    const glitchText = document.getElementById('glitch-text');
    
    // Phase 1: Screen Flicker (0-300ms)
    setTimeout(() => {
        glitchScreen.classList.add('active');
        createScreenFlicker();
    }, 100);
    
    // Phase 2: Power Down Effect (300-1200ms)
    setTimeout(() => {
        glitchPowerdown.style.display = 'block';
        glitchPowerdown.style.animation = 'power-down 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    }, 400);
    
    // Phase 3: Transition Complete Flash (1200-2000ms)
    setTimeout(() => {
        transitionComplete.style.display = 'block';
    }, 1300);
    
    // Phase 4: Redirect (2000ms)
    setTimeout(() => {
        window.location.href = href;
    }, 2000);
}

/**
 * Trigger animasi smooth untuk F-AIM Module
 */
function triggerNormalTransition(href) {
    // Disable scroll
    document.body.style.overflow = 'hidden';
    
    const glitchScreen = document.getElementById('glitch-screen');
    const transitionComplete = document.getElementById('transition-complete');
    
    // Softer transition
    setTimeout(() => {
        glitchScreen.classList.add('active');
        // Only subtle glitch bars
        const bars = document.querySelectorAll('.glitch-bar');
        bars.forEach((bar, index) => {
            if (index > 2) {
                bar.style.opacity = '0';
            }
        });
    }, 100);
    
    // Redirect
    setTimeout(() => {
        window.location.href = href;
    }, 1500);
}

/**
 * Create screen flicker effect
 */
function createScreenFlicker() {
    const glitchScreen = document.getElementById('glitch-screen');
    let flickerCount = 0;
    const maxFlickers = 8;
    
    const flickerInterval = setInterval(() => {
        flickerCount++;
        
        if (flickerCount > maxFlickers) {
            clearInterval(flickerInterval);
            return;
        }
        
        const opacity = Math.random() > 0.5 ? 1 : 0.3;
        glitchScreen.style.opacity = opacity;
        
        // Add color shift on some flickers
        if (flickerCount % 2 === 0) {
            glitchScreen.style.backgroundColor = flickerCount % 4 === 0 ? '#1a1a1a' : '#000';
        }
    }, 80);
}

/**
 * Random glitch effect generator
 */
function triggerRandomGlitch() {
    const glitchBar = document.createElement('div');
    glitchBar.className = 'glitch-bar';
    glitchBar.style.top = Math.random() * 100 + '%';
    glitchBar.style.height = (Math.random() * 10 + 2) + '%';
    glitchBar.style.animation = `glitch-horizontal-shift ${Math.random() * 0.3 + 0.2}s ease-in-out forwards`;
    
    const glitchScreen = document.getElementById('glitch-screen');
    glitchScreen.appendChild(glitchBar);
    
    // Remove after animation
    setTimeout(() => {
        glitchBar.remove();
    }, 500);
}

/**
 * Bonus: Trigger random glitch on hover (optional)
 */
function enableHoverGlitch() {
    const transitionLinks = document.querySelectorAll('.transition-link');
    
    transitionLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (this.classList.contains('terrifying')) {
                triggerRandomGlitch();
            }
        });
    });
}

// Enable hover glitch on terrifying cards
enableHoverGlitch();

console.log('✓ Forbidden Transition Effects Initialized');
