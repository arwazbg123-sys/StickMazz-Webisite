// ========================================
// STICKMAZZ WIKI - MUSIC PAGE LOGIC
// ========================================

function renderCharacterMusic() {
    const grid = document.getElementById('characterMusicGrid');
    if (!grid) return;

    // Filter hanya karakter yang punya musik
    const withMusic = allCharactersDatabase.filter(char => 
        char.id >= 15 && char.id <= 18 || 
        char.id === 20 || 
        char.id === 2 || 
        char.id === 3
    );

    grid.innerHTML = withMusic.map(char => `
        <div class="music-card" style="border-color: ${char.color}; cursor: pointer;" 
             onclick="playCharacterMusic('${char.code}')">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">🎵</div>
            <div style="color: ${char.color}; font-weight: bold; margin-bottom: 5px;">${char.name}</div>
            <div style="color: #aaa; font-size: 0.85rem;">${char.code}</div>
            <div style="color: ${char.color}; font-size: 0.8rem; margin-top: 8px; font-weight: bold;">
                ${char.vibe}
            </div>
        </div>
    `).join('');
}

function playCharacterMusic(code) {
    console.log(`Playing music for character: ${code}`);
    // Ini akan terintegrasi dengan music player dari js.js
}

function initializeMusicPage() {
    renderCharacterMusic();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMusicPage();
});
