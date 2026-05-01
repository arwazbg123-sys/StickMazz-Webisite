// ========================================
// F-AIM MODULE - TECHNICAL SCRIPT
// Teknologi Biomekanikal StickMazz
// ========================================

// ========== F-AIM DATABASE ==========
const faimDatabase = {
    metadata: {
        name: 'F-AIM Module',
        fullName: 'Fuel Anatomy Intake Module',
        type: 'Biomechanical Technology',
        version: '1.0',
        purpose: 'Saluran bahan bakar cair untuk lokomotif cewek',
        created: 2025
    },

    variants: [
        {
            id: 'faim-3-backwards',
            name: 'F-AIM Module 3 Backwards',
            type: 'Explicit',
            category: 'Realistis & Detail Tinggi',
            description: 'Varian dengan bentuk yang sangat realistis dan detail tinggi, dilengkapi dengan pelat besi titanium yang dapat dibuka-tutup',
            
            specifications: {
                location: 'Bagian bawah bodi tengah',
                material: 'Pelat Besi Titanium + Lapisan Elastis Semi-Organik',
                shape: 'Kotak dengan bentuk huruf 3 terbalik',
                protection: 'Pelat besi dapat dibuka-tutup'
            },

            advantages: [
                'Sangat aman dari kebocoran bahan bakar',
                'Perlindungan maksimal dengan pelat besi titanium',
                'Presisi fungsi mekanik sangat tinggi',
                'Desain kokoh dan tahan lama'
            ],

            disadvantages: [
                'Sangat eksplisit dalam tampilan visual',
                'Mencolok dan perlu kehati-hatian di area publik',
                'Pelat dapat terbuka tanpa sengaja saat getaran',
                'Membutuhkan maintenance lebih rutin'
            ]
        },
        {
            id: 'faim-garis',
            name: 'F-AIM Garis',
            type: 'Abstract',
            category: 'Abstrak & Minimal',
            description: 'Varian dengan bentuk abstrak—hanya garis hitam pendek di tengah bawah tangki bahan bakar',
            
            specifications: {
                location: 'Tengah bawah tangki bahan bakar',
                material: 'Sistem Otot Internal (Narrow Muscle & EnerDrain Coil)',
                shape: 'Garis hitam pendek lebar (abstrak)',
                protection: 'Tidak ada pelat besi (sepenuhnya internal)'
            },

            advantages: [
                'Sangat tidak eksplisit dalam tampilan visual',
                'Mudah disembunyikan & diskrit di area publik',
                'Desain praktis dan simpel tanpa pelat tambahan',
                'Otot karet rata-rata sangat ketat dan aman'
            ],

            disadvantages: [
                'Tidak ada pelindung eksternal tambahan',
                'Rawan bocor jika otot mengalami kelonggaran',
                'Bergantung penuh pada komponen internal',
                'Lebih rentan terhadap kerusakan internal'
            ]
        }
    ],

    components: [
        {
            id: 'bioport-seal',
            name: 'BioPort Seal',
            function: 'Katup elastis otomatis yang terbuka saat pengisian dan tertutup rapat setelah proses selesai',
            type: 'Valve System',
            importance: 'Critical'
        },
        {
            id: 'enerdrain-coil',
            name: 'EnerDrain Coil',
            function: 'Spiral pembuangan tekanan yang mengatur aliran cairan dengan presisi tinggi',
            type: 'Flow Control',
            importance: 'Critical'
        },
        {
            id: 'resonator-node',
            name: 'Resonator Node',
            function: 'Sensor getaran emosi yang mendeteksi status psikis dan performa pengguna',
            type: 'Sensor System',
            importance: 'Important'
        },
        {
            id: 'narrow-muscle',
            name: 'Narrow Muscle',
            function: 'Otot-otot karet yang ketat untuk menyedot cairan menuju tangki utama',
            type: 'Muscle System',
            importance: 'Critical'
        },
        {
            id: 'thermal-buffer',
            name: 'Thermal Buffer',
            function: 'Pendingin internal yang mencegah overheating selama operasi',
            type: 'Temperature Control',
            importance: 'Important'
        },
        {
            id: 'valve-synapse',
            name: 'Valve Synapse',
            function: 'Sistem deteksi kualitas dan volume bahan bakar yang masuk',
            type: 'Sensor & Detection',
            importance: 'Critical'
        }
    ],

    operatingProcess: [
        {
            step: 1,
            name: 'Aktivasi',
            description: 'Katup BioPort terbuka saat lokomotif cewek bersiap menerima bahan bakar, menciptakan jalur masuk yang aman'
        },
        {
            step: 2,
            name: 'Penerimaan',
            description: 'Cairan bahan bakar masuk dan dialirkan melalui coil spiral dengan aliran yang terkontrol'
        },
        {
            step: 3,
            name: 'Distribusi',
            description: 'Denyutan Narrow Muscle secara otomatis menyedot cairan menuju tangki utama dengan tekanan yang tepat'
        },
        {
            step: 4,
            name: 'Deteksi Emosi',
            description: 'Resonator Node aktif mendeteksi status performa dan koneksi batin pengguna selama proses berlangsung'
        },
        {
            step: 5,
            name: 'Stabilisasi',
            description: 'Thermal Buffer menjaga temperatur tetap stabil dan optimal sepanjang proses pengisian'
        },
        {
            step: 6,
            name: 'Konversi',
            description: 'Valve Synapse mengaktifkan sistem konversi energi dari bahan bakar cair ke inti mesin dengan efisiensi maksimal'
        }
    ],

    userCharacteristics: [
        {
            id: 'internal-aura',
            trait: 'Aura Internal',
            emoji: '✨',
            description: 'Cenderung memiliki aura sensual internal yang kuat, bukan eksternal'
        },
        {
            id: 'energy-rhythm',
            trait: 'Ritme Energi',
            emoji: '⚡',
            description: 'Ritme energi bergantung pada keseimbangan emosional dan bahan bakar'
        },
        {
            id: 'gentle-nature',
            trait: 'Sifat Lembut',
            emoji: '😊',
            description: 'Cenderung pemalu, pendiam, dan romantis dalam interaksi sosial'
        },
        {
            id: 'cautious-strong',
            trait: 'Sifat Hati-Hati',
            emoji: '😰',
            description: 'Cenderung penakut tetapi sangat kuat dalam menarik beban'
        },
        {
            id: 'caring-nature',
            trait: 'Kepedulian Tinggi',
            emoji: '❤️',
            description: 'Cenderung penyayang dan peduli terhadap sekitar'
        },
        {
            id: 'critical-thinking',
            trait: 'Pemikiran Kritis',
            emoji: '🧠',
            description: 'Selalu berpikir kritis dan strategis saat situasi menjadi genting'
        }
    ]
};

// ========== INITIALIZE PAGE ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('F-AIM Module Page Loaded');
    console.log('Database:', faimDatabase);
    
    // Initialize interactive features
    initializeFAIMFeatures();
});

// ========== INTERACTIVE FEATURES ==========
function initializeFAIMFeatures() {
    // Add click handlers to variant cards
    const variantCards = document.querySelectorAll('.variant-card');
    variantCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log('Variant card clicked:', index);
        });
    });

    // Add hover effects to component names
    const components = document.querySelectorAll('.component-name');
    components.forEach(component => {
        component.addEventListener('mouseenter', function() {
            this.style.color = '#50C7D8';
        });
        component.addEventListener('mouseleave', function() {
            this.style.color = '#D4AF37';
        });
    });

    // Add hover effects to trait items
    const traits = document.querySelectorAll('.trait-item');
    traits.forEach(trait => {
        trait.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        trait.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ========== UTILITY FUNCTIONS ==========

/**
 * Get variant by ID
 */
function getVariantById(variantId) {
    return faimDatabase.variants.find(v => v.id === variantId);
}

/**
 * Get component by ID
 */
function getComponentById(componentId) {
    return faimDatabase.components.find(c => c.id === componentId);
}

/**
 * Get component by name
 */
function getComponentByName(name) {
    return faimDatabase.components.find(c => c.name === name);
}

/**
 * Compare both variants
 */
function compareVariants() {
    const explicit = getVariantById('faim-3-backwards');
    const abstract = getVariantById('faim-garis');
    
    return {
        explicit: explicit,
        abstract: abstract,
        comparison: {
            visibility: {
                explicit: 'Sangat Eksplisit',
                abstract: 'Sangat Abstrak'
            },
            protection: {
                explicit: 'Pelat Besi + Internal',
                abstract: 'Internal Only'
            },
            maintenance: {
                explicit: 'Rutin Diperlukan',
                abstract: 'Minimal'
            }
        }
    };
}

/**
 * Get operating process
 */
function getOperatingProcess() {
    return faimDatabase.operatingProcess;
}

/**
 * Get all components
 */
function getAllComponents() {
    return faimDatabase.components;
}

/**
 * Get critical components only
 */
function getCriticalComponents() {
    return faimDatabase.components.filter(c => c.importance === 'Critical');
}

/**
 * Get user characteristics
 */
function getUserCharacteristics() {
    return faimDatabase.userCharacteristics;
}

/**
 * Search in F-AIM database
 */
function searchFAIMDatabase(query) {
    const results = {
        variants: [],
        components: [],
        process: [],
        characteristics: []
    };

    const queryLower = query.toLowerCase();

    // Search variants
    faimDatabase.variants.forEach(variant => {
        if (variant.name.toLowerCase().includes(queryLower) ||
            variant.description.toLowerCase().includes(queryLower)) {
            results.variants.push(variant);
        }
    });

    // Search components
    faimDatabase.components.forEach(component => {
        if (component.name.toLowerCase().includes(queryLower) ||
            component.function.toLowerCase().includes(queryLower)) {
            results.components.push(component);
        }
    });

    // Search process
    faimDatabase.operatingProcess.forEach(process => {
        if (process.name.toLowerCase().includes(queryLower) ||
            process.description.toLowerCase().includes(queryLower)) {
            results.process.push(process);
        }
    });

    // Search characteristics
    faimDatabase.userCharacteristics.forEach(trait => {
        if (trait.trait.toLowerCase().includes(queryLower) ||
            trait.description.toLowerCase().includes(queryLower)) {
            results.characteristics.push(trait);
        }
    });

    return results;
}

// ========== EXPORT FUNCTIONS FOR DEBUGGING ==========
window.faimModule = {
    database: faimDatabase,
    getVariantById,
    getComponentById,
    getComponentByName,
    compareVariants,
    getOperatingProcess,
    getAllComponents,
    getCriticalComponents,
    getUserCharacteristics,
    searchFAIMDatabase
};

console.log('F-AIM Module Script Loaded - Type faimModule.database to see all data');
