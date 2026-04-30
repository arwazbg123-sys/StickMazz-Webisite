// ========================================
// STICKMAZZ WIKI - WORLD PAGE LOGIC
// ========================================

function renderZones() {
    const grid = document.getElementById('zonesGrid');
    if (!grid) return;

    const zones = zonesDatabase;
    grid.innerHTML = zones.map(zone => {
        const residents = allCharactersDatabase.filter(char => char.zone === zone.name);
        return `
            <div class="zone-card" style="border-color: ${zone.color};">
                <div style="font-size: 2rem; margin-bottom: 10px;">${zone.emoji}</div>
                <h3 style="color: ${zone.color};">${zone.name}</h3>
                <p class="zone-desc">${zone.description}</p>
                <div class="zone-residents">
                    <strong>Penghuni: ${residents.length} karakter</strong>
                    <div style="margin-top: 8px; font-size: 0.8rem;">
                        ${residents.map(r => `<span style="display: inline-block; background: ${r.color}20; color: ${r.color}; padding: 4px 8px; margin: 2px; border-radius: 4px; padding: 4px 8px;">${r.code}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function initializeWorldPage() {
    renderZones();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeWorldPage();
});
