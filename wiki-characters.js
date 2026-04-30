// ========================================
// STICKMAZZ WIKI - CHARACTER PAGE LOGIC
// ========================================

function renderCharacterGrid(characters = allCharactersDatabase) {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;

    grid.innerHTML = characters.map(char => `
        <div class="character-card" style="border-color: ${char.color}; cursor: pointer;" 
             onclick="showCharacterDetail(${char.id})">
            <div class="char-code">${char.code}</div>
            <div class="char-name" style="color: ${char.color};">${char.name}</div>
            <div class="char-vibe">${char.vibe}</div>
            <div style="color: #aaa; font-size: 0.85rem; margin: 10px 0; flex-grow: 1;">
                ${char.story.substring(0, 80)}...
            </div>
            <div class="char-zone" style="border-color: ${char.color}; color: ${char.color};">
                ${char.zone}
            </div>
            ${char.antagonist ? '<div style="margin-top: 8px; color: #FF6B9D; font-weight: bold;">⚠️ Antagonist</div>' : ''}
            ${char.status ? `<div style="margin-top: 8px; color: #A855F7; font-size: 0.8rem;">${char.status}</div>` : ''}
        </div>
    `).join('');
}

function showCharacterDetail(charId) {
    const char = getCharacterById(charId);
    if (!char) return;

    const modal = document.getElementById('characterModal');
    const header = document.getElementById('modalHeader');
    const body = document.getElementById('modalBody');

    header.innerHTML = `
        <h2 style="color: ${char.color};">${char.name}</h2>
        <span style="color: ${char.color}; font-size: 1rem;">(${char.code})</span>
    `;

    body.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div>
                    <strong style="color: ${char.color};">Tipe:</strong>
                    <div style="color: #aaa;">${char.type === 'utama' ? 'Main Character' : 'Bonus/Visitor'}</div>
                </div>
                <div>
                    <strong style="color: ${char.color};">Vibe:</strong>
                    <div style="color: #aaa;">${char.vibe}</div>
                </div>
                <div>
                    <strong style="color: ${char.color};">Zone:</strong>
                    <div style="color: #aaa;">${char.zone}</div>
                </div>
                <div>
                    <strong style="color: ${char.color};">Warna Identitas:</strong>
                    <div style="display: inline-block; width: 20px; height: 20px; background: ${char.color}; border-radius: 4px; margin-top: 5px;"></div>
                </div>
            </div>
            <div style="background: ${char.color}15; padding: 15px; border-left: 3px solid ${char.color}; border-radius: 6px; margin-bottom: 15px;">
                <strong style="color: ${char.color};">Cerita:</strong>
                <p style="color: #aaa; margin-top: 8px;">${char.story}</p>
            </div>
            ${char.antagonist ? `
                <div style="background: #FF6B9D15; padding: 12px; border-left: 3px solid #FF6B9D; border-radius: 6px; margin-bottom: 15px; color: #FF6B9D;">
                    <strong>⚠️ Status Antagonis</strong> - Karakter ini memiliki peran sebagai antagonis di Nesyabella
                </div>
            ` : ''}
            ${char.status ? `
                <div style="background: #A855F715; padding: 12px; border-left: 3px solid #A855F7; border-radius: 6px; margin-bottom: 15px; color: #A855F7;">
                    <strong>✦ Status Visitor/Bonus</strong> - Karakter bonus yang datang dan pergi
                </div>
            ` : ''}
        </div>
    `;

    modal.classList.add('show');
}

function filterCharacters() {
    const typeFilter = document.getElementById('typeFilter')?.value || 'semua';
    const zoneFilter = document.getElementById('zoneFilter')?.value || 'semua';
    const vibeFilter = document.getElementById('vibeFilter')?.value || 'semua';

    let filtered = allCharactersDatabase;

    if (typeFilter !== 'semua') {
        filtered = filtered.filter(char => char.type === typeFilter);
    }

    if (zoneFilter !== 'semua') {
        filtered = filtered.filter(char => char.zone === zoneFilter);
    }

    if (vibeFilter !== 'semua') {
        filtered = filtered.filter(char => char.vibe.includes(vibeFilter));
    }

    renderCharacterGrid(filtered);
}

function populateFilters() {
    const zoneFilter = document.getElementById('zoneFilter');
    const vibeFilter = document.getElementById('vibeFilter');

    if (zoneFilter) {
        const zones = getAllZones();
        zones.forEach(zone => {
            const option = document.createElement('option');
            option.value = zone;
            option.textContent = zone;
            zoneFilter.appendChild(option);
        });
    }

    if (vibeFilter) {
        const vibes = getAllVibes();
        vibes.forEach(vibe => {
            if (vibe.trim()) {
                const option = document.createElement('option');
                option.value = vibe;
                option.textContent = vibe;
                vibeFilter.appendChild(option);
            }
        });
    }
}

function resetFilters() {
    document.getElementById('typeFilter').value = 'semua';
    document.getElementById('zoneFilter').value = 'semua';
    document.getElementById('vibeFilter').value = 'semua';
    renderCharacterGrid();
}

function closeModal() {
    document.getElementById('characterModal').classList.remove('show');
}

// Initialize character page
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderCharacterGrid();
});

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('characterModal');
    if (modal && event.target === modal) {
        closeModal();
    }
};
