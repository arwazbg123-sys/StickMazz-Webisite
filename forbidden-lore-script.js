// ========================================
// FORBIDDEN LORE - INTERACTIVE SCRIPT
// Dunia Gelap & Misterius StickMazz
// ========================================

// ========== DARK LORE DATABASE ==========
const forbiddenLoreDatabase = {
    umbrabella: {
        id: 'umbrabella',
        name: 'UmbraBella',
        emoji: '🌑',
        type: 'Alternate Realm - Bayangan Spiritual Negatif',
        atmosphere: 'Gelap, Misterius, Penuh Intrik',
        theme: 'Kekuatan, Ambisi, Strategi',
        
        factions: [
            {
                id: 'bloodstrike-crew',
                name: 'Bloodstrike Crew',
                emoji: '🏴‍☠️',
                type: 'Bajak Laut & Penjelajah Malam',
                leader: 'Kapten Bloodstrike',
                description: 'Kru pemberani pencuri artefak dan pengganggu keamanan',
                role: 'Pencurian, Perdagangan Gelap, Eksplorasi Berbahaya'
            }
        ],

        characteristics: {
            dominance: 'Kegelapan & Intrik',
            population: '~20+ Karakter (Versi Gelap)',
            conflicts: 'Pertarungan antar faksi, intrik organisasi, persaingan kekuatan',
            atmosphere: 'Penuh dengan pertempuran, strategi, dan ambisi tanpa batas'
        }
    },

    faim: {
        id: 'faim',
        name: 'F-AIM Module',
        fullName: 'Fuel Anatomy Intake Module',
        type: 'Biomekanikal Technology',
        purpose: 'Saluran bahan bakar cair untuk lokomotif cewek',
        
        variants: [
            {
                name: 'F-AIM Module 3 Backwards',
                type: 'Eksplisit',
                description: 'Bentuk realistis dengan pelat besi titanium yang dapat dibuka-tutup',
                structure: {
                    location: 'Bagian bawah bodi tengah',
                    material: 'Pelat besi titanium + lapisan elastis semi-organik',
                    design: 'Kotak dengan bentuk huruf 3 terbalik'
                },
                advantages: [
                    'Sangat aman dari kebocoran',
                    'Perlindungan maksimal dengan pelat besi',
                    'Presisi fungsi tinggi'
                ],
                disadvantages: [
                    'Sangat eksplisit dan mencolok',
                    'Perlu kehati-hatian di area publik',
                    'Pelat dapat terbuka tanpa sengaja saat getaran'
                ]
            },
            {
                name: 'F-AIM Garis',
                type: 'Abstrak',
                description: 'Bentuk abstrak - hanya garis hitam pendek di tengah bawah tangki',
                structure: {
                    location: 'Tengah bawah tangki bahan bakar',
                    material: 'Sistem otot internal (Narrow Muscle & EnerDrain Coil)',
                    design: 'Garis hitam pendek lebar tanpa pelat besi'
                },
                advantages: [
                    'Sangat tidak eksplisit dan diskrit',
                    'Mudah disembunyikan di area publik',
                    'Desain praktis dan simpel'
                ],
                disadvantages: [
                    'Tidak ada pelindung tambahan',
                    'Rawan bocor jika otot mengalami kelonggaran',
                    'Bergantung penuh pada komponen internal'
                ]
            }
        ],

        components: [
            {
                name: 'BioPort Seal',
                function: 'Katup elastis otomatis yang terbuka saat pengisian dan tertutup rapat setelahnya'
            },
            {
                name: 'EnerDrain Coil',
                function: 'Spiral pembuangan tekanan yang mengatur aliran cairan dengan presisi'
            },
            {
                name: 'Resonator Node',
                function: 'Sensor getaran emosi yang mendeteksi status psikis saat pengisian'
            },
            {
                name: 'Narrow Muscle',
                function: 'Otot-otot karet yang ketat untuk menyedot cairan ke tangki utama'
            },
            {
                name: 'Thermal Buffer',
                function: 'Pendingin internal untuk mencegah overheating'
            },
            {
                name: 'Valve Synapse',
                function: 'Sistem deteksi kualitas dan volume bahan bakar'
            }
        ],

        operatingProcess: [
            {
                step: 1,
                name: 'Aktivasi',
                description: 'Katup BioPort terbuka saat lokomotif cewek bersiap menerima bahan bakar'
            },
            {
                step: 2,
                name: 'Penerimaan',
                description: 'Cairan bahan bakar masuk dan dialirkan melalui coil spiral'
            },
            {
                step: 3,
                name: 'Distribusi',
                description: 'Denyutan Narrow Muscle menyedot cairan menuju tangki utama'
            },
            {
                step: 4,
                name: 'Deteksi Emosi',
                description: 'Resonator Node aktif mendeteksi status performa dan koneksi batin'
            },
            {
                step: 5,
                name: 'Stabilisasi',
                description: 'Thermal Buffer menjaga temperatur tetap stabil sepanjang proses'
            },
            {
                step: 6,
                name: 'Konversi',
                description: 'Valve Synapse mengaktifkan sistem konversi energi ke inti mesin'
            }
        ],

        characterTraits: [
            'Cenderung punya aura sensual internal, bukan eksternal',
            'Memiliki ritme energi yang bergantung pada keseimbangan emosional dan bahan bakar',
            'Cenderung pemalu, pendiam, dan romantis',
            'Cenderung penakut tetapi sangat kuat dalam menarik muatan',
            'Cenderung penyayang dan berpikir kritis saat situasi genting'
        ]
    }
};

// ========== INITIALIZE PAGE ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Forbidden Lore Page Loaded');
    console.log('Database:', forbiddenLoreDatabase);
    
    // Initialize interactive features
    initializeForbiddenFeatures();
});

// ========== INTERACTIVE FEATURES ==========
function initializeForbiddenFeatures() {
    // Add click handlers to cards for expand/collapse effects
    const cards = document.querySelectorAll('.forbidden-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Optional: Add expand animation or modal display
            console.log('Card clicked:', index);
        });
    });

    // Add hover effects to components
    const components = document.querySelectorAll('.component-name');
    components.forEach(component => {
        component.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px var(--glow-red), 0 0 30px var(--glow-red)';
        });
        component.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 8px var(--glow-red)';
        });
    });
}

// ========== UTILITY FUNCTIONS ==========

/**
 * Get faction info by ID
 */
function getFactionById(factionId) {
    return forbiddenLoreDatabase.umbrabella.factions.find(f => f.id === factionId);
}

/**
 * Get F-AIM variant by name
 */
function getFAIMVariant(variantName) {
    return forbiddenLoreDatabase.faim.variants.find(v => v.name === variantName);
}

/**
 * Get F-AIM component by name
 */
function getFAIMComponent(componentName) {
    return forbiddenLoreDatabase.faim.components.find(c => c.name === componentName);
}

/**
 * Display faction details
 */
function displayFactionDetails(factionId) {
    const faction = getFactionById(factionId);
    if (!faction) {
        console.error('Faction not found:', factionId);
        return;
    }

    console.log('Faction Details:');
    console.log(`Name: ${faction.name} ${faction.emoji}`);
    console.log(`Type: ${faction.type}`);
    console.log(`Leader: ${faction.leader}`);
    console.log(`Members: ${faction.members.join(', ')}`);
    console.log(`Description: ${faction.description}`);
    console.log(`Role: ${faction.role}`);
}

/**
 * Display F-AIM variant comparison
 */
function compareFAIMVariants() {
    const variants = forbiddenLoreDatabase.faim.variants;
    console.log('F-AIM Variants Comparison:');
    variants.forEach((variant, index) => {
        console.log(`\n${index + 1}. ${variant.name} (${variant.type})`);
        console.log(`   Advantages:`, variant.advantages.join(', '));
        console.log(`   Disadvantages:`, variant.disadvantages.join(', '));
    });
}

/**
 * Get operating process for F-AIM
 */
function getFAIMOperatingProcess() {
    return forbiddenLoreDatabase.faim.operatingProcess;
}

/**
 * Search within forbidden lore
 */
function searchForbiddenLore(query) {
    const results = {
        factions: [],
        components: [],
        characteristics: []
    };

    const queryLower = query.toLowerCase();

    // Search factions
    forbiddenLoreDatabase.umbrabella.factions.forEach(faction => {
        if (faction.name.toLowerCase().includes(queryLower) ||
            faction.description.toLowerCase().includes(queryLower) ||
            faction.members.some(m => m.toLowerCase().includes(queryLower))) {
            results.factions.push(faction);
        }
    });

    // Search components
    forbiddenLoreDatabase.faim.components.forEach(component => {
        if (component.name.toLowerCase().includes(queryLower) ||
            component.function.toLowerCase().includes(queryLower)) {
            results.components.push(component);
        }
    });

    // Search characteristics
    forbiddenLoreDatabase.faim.characterTraits.forEach(trait => {
        if (trait.toLowerCase().includes(queryLower)) {
            results.characteristics.push(trait);
        }
    });

    return results;
}

// ========== EXPORT FUNCTIONS FOR DEBUGGING ==========
window.forbiddenLore = {
    database: forbiddenLoreDatabase,
    getFactionById,
    getFAIMVariant,
    getFAIMComponent,
    displayFactionDetails,
    compareFAIMVariants,
    getFAIMOperatingProcess,
    searchForbiddenLore
};

console.log('Forbidden Lore Script Loaded - Type forbiddenLore.database to see all data');
