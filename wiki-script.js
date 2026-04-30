// ========================================
// STICKMAZZ WIKI - GENERAL FUNCTIONS
// ========================================

// Global Search Function
function globalSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase();
    if (query.length < 2) return;

    // Search across all content
    const results = {
        characters: [],
        zones: []
    };

    // Search characters
    allCharactersDatabase.forEach(char => {
        if (char.name.toLowerCase().includes(query) ||
            char.code.toLowerCase().includes(query) ||
            char.vibe.toLowerCase().includes(query) ||
            char.story.toLowerCase().includes(query)) {
            results.characters.push(char);
        }
    });

    // Search zones
    zonesDatabase.forEach(zone => {
        if (zone.name.toLowerCase().includes(query) ||
            zone.description.toLowerCase().includes(query)) {
            results.zones.push(zone);
        }
    });

    // Display results (bisa diperluas dengan modal search results)
    console.log('Search Results:', results);
    
    // Redirect ke character page dengan filter jika ada hasil
    if (results.characters.length > 0) {
        // Simpan hasil di sessionStorage untuk ditampilkan di halaman character
        sessionStorage.setItem('searchResults', JSON.stringify(results.characters));
        window.location.href = 'characters.html';
    }
}

// Initialize search on character page
function initializeSearchResults() {
    const results = sessionStorage.getItem('searchResults');
    if (results) {
        const characters = JSON.parse(results);
        renderCharacterGrid(characters);
        sessionStorage.removeItem('searchResults');
    }
}

// Smooth scroll to sections
function smoothScrollToSection(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize search results if on character page
    if (typeof initializeSearchResults === 'function') {
        initializeSearchResults();
    }

    // Add smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                smoothScrollToSection(target.substring(1));
            }
        });
    });

    console.log('🌀 StickMazz Wiki - Initialized');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K untuk search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchBox = document.getElementById('globalSearch');
        if (searchBox) searchBox.focus();
    }
});

// Animate elements on scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease';
            }
        });
    });

    document.querySelectorAll('.featured-card, .character-card, .zone-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations on load
window.addEventListener('load', () => {
    setupScrollAnimations();
});

// Exit animation for links to other pages
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        if (!this.href.includes('#')) {
            document.body.style.opacity = '0.8';
            document.body.style.transition = 'opacity 0.3s ease';
        }
    });
});

console.log('✓ Wiki Scripts Loaded');
