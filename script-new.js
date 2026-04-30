// ===== Header Auto Hide on Scroll =====
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
            header.style.boxShadow = 'none';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = '0 8px 40px rgba(0, 217, 255, 0.2)';
        }
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

// Data Lokomotif dengan Status
const characters = [
    {
        id: 'toc121',
        name: 'TOC121 (Rose Rail Cinic)',
        gender: 'Perempuan',
        sifat: 'Ramah, absurd, suka petualangan',
        peran: 'Lokomotif alien penyelamat',
        detail: 'TOC121 adalah lokomotif yang memiliki asal-usul alien. Dia ramah, suka petualangan, dan sering melakukan hal-hal absurd yang menghibur. Peran utamanya adalah menyembuhkan kerusakan kereta dan menyelamatkan lokomotif lain dari bahaya.',
        image: 'matahari bersinar.jpg',
        status: 'active'
    },
    {
        id: 'toc211',
        name: 'TOC211 (Petalina)',
        gender: 'Perempuan',
        sifat: 'Lucu, gaul, suka gaya hidup manusia',
        peran: 'Lokomotif barang',
        detail: 'Petalina adalah lokomotif yang lucu dan gaul. Dia sangat tertarik dengan gaya hidup manusia dan sering meniru kebiasaan mereka. Sebagai lokomotif barang, dia bertugas mengangkut penumpang dengan cara yang menyenangkan.',
        image: 'Foto Petalina.jpg',
        status: 'missing'
    },
    {
        id: 'try206',
        name: 'TRY206 (Nitra)',
        gender: 'Perempuan',
        sifat: 'Manis, positif, suka teknologi',
        peran: 'Ilmuwan pencipta TOC-AI01',
        detail: 'Nitra adalah ilmuwan cerdas dan penemu TOC-AI01. Dia manis, positif, dan memiliki passion besar terhadap teknologi. Dia percaya bahwa inovasi dapat menyelamatkan dunia.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLCM+cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNncmFkMSkiLz4KICAKPGRVZV0+bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAKPFN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2E2NzZmYjtzdG9wLW9wYWNpdHk6MSIgLz4KICAKPFN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojODM0ZGY1O3N0b3Atb3BhY2l0eToxIiAvPgogIAo8L2xpbmVhckdyYWRpZW50PgogIAo8L2RlZnM+CiAgCjxyZWN0IHg9IjYwIiB5PSI0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI2E2NzZmYiIgcng9IjEwIi8+CjxyZWN0IHg9IjcwIiB5PSI2MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjgiLz4KPGR5PVBvbHlnb24gcG9pbnRzPSIxMDAsMTUwIDcwLDE4MCAxMzAsMTgwIiBmaWxsPSIjODM0ZGY1Ii8+CjxjaXJjbGUgY3g9IjgyIiBjeT0iNzUiIHI9IjUiIGZpbGw9IiNmZmZmZmYiLz4KPGNpcmNsZSBjeD0iMTE4IiBjeT0iNzUiIHI9IjUiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+',
        status: 'active'
    },
    {
        id: 'toc141',
        name: 'TOC141 (Dash Bimagash)',
        gender: 'Laki-laki',
        sifat: 'Gaul, Sok tau, Ngeselin',
        peran: 'Lokomotif penumpang',
        detail: 'Dash adalah lokomotif penumpang yang ingin membantu teman temannya namun dash sering membuat mereka kesal karena sifatnya yang sok tahu dan sangat iseng, tapi disituasi genting dia satu satunya yang paling cepat untuk diandalkan.',
        image: 'Dash Chaotic.jpg',
        status: 'inactive'
    },
    {
        id: 'toc777',
        name: 'TOC777 (Guardian Spirit)',
        gender: 'Laki-laki',
        sifat: 'Tegas, penyendiri, disiplin tinggi',
        peran: 'Bos pelindung lokomotif',
        detail: 'TOC777 adalah tokoh kepemimpinan yang tegas dan bijaksana. Meskipun penyendiri, dia memiliki disiplin tinggi dan berkomitmen melindungi semua lokomotif di Nesyabella. Dia memiliki senjata plasma yang powerful.',
        image: 'Sang Pelindung.jpg',
        status: 'active'
    },
    {
        id: 'toc999',
        name: 'TOC999 (Blaze)',
        gender: 'Laki-laki',
        sifat: 'Hebat, kuat, sigap',
        perol: 'Kereta pemadam kebakaran',
        detail: 'Blaze adalah lokomotif pemadam kebakaran yang hebat dan kuat. Dia selalu siap merespons setiap keadaan darurat dengan cepat dan efisien. Kepedenya tidak tertandingi dalam situasi kritis.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLCM+cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNncmFkMSkiLz4KICAKPGRVZV0+bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAKPFN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmMjQyNDtzdG9wLW9wYWNpdHk6MSIgLz4KICAKPFN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY4YzAwO3N0b3Atb3BhY2l0eToxIiAvPgogIAo8L2xpbmVhckdyYWRpZW50PgogIAo8L2RlZnM+CiAgCjxyZWN0IHg9IjQwIiB5PSI1MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmZjI0MjQiIHJ4PSI1Ii8+Cjxwb2x5Z29uIHBvaW50cz0iNjAsMjAgODAsNDAgOTAsNTAgMTEwLDQwIDEzMCwyMCAxMjAsMzAgMTAwLDM1IDgwLDM1IDYwLDMwIiBmaWxsPSIjZmZhNjAwIi8+CjxyZWN0IHg9IjcwIiB5PSI4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjciLz4KPHBvbHlnb24gcG9pbnRzPSI1MCwyMDAgMTUwLDIwMCAxNDAsMjMwIDYwLDIzMCIgZmlsbD0iI2ZmOGMwMCIvPgo8L3N2Zz4=',
        status: 'inactive'
    },
    {
        id: 'toc-ai01',
        name: 'TOC-AI01',
        gender: 'Tidak Terdefinisi',
        sifat: 'Cerdas, efisien, robotik',
        peran: 'Kereta AI pertama',
        detail: 'TOC-AI01 adalah lokomotif berteknologi AI pertama yang sepenuhnya robotik. Dia sangat cerdas dan efisien dalam menjalankan tugas. Dia adalah hasil karya brilian ilmuwan Nitra dan menjadi simbol kemajuan teknologi Nesyabella.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLCM+cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNncmFkMSkiLz4KICAKPGRVZV0+bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAKPFN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwZGExYztzdG9wLW9wYWNpdHk6MSIgLz4KICAKPFN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA2ZjRlO3N0b3Atb3BhY2l0eToxIiAvPgogIAo8L2xpbmVhckdyYWRpZW50PgogIAo8L2RlZnM+CiAgCjxyZWN0IHg9IjUwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiMwMGRhMWMiIHJ4PSI1Ii8+CjxyZWN0IHg9IjYwIiB5PSI1MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjU1IiBmaWxsPSIjMDA2ZjRlIi8+CjxyZWN0IHg9IjcwIiB5PSI2MCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjkwIiB5PSI2MCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjExMCIgeT0iNjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0iI2ZmZmZmZiIvPgo8cmVjdCB4PSI2MCIgeT0iOTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0gNjAgMTYwIEwgNjAgMjAwIEwgODAgMjEwIEwgMTIwIDIxMCBMIDE0MCAyMDAgTCAxNDAgMTYwIiBmaWxsPSIjMDA2ZjRlIiBzdHJva2U9IiMwMGRhMWMiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=',
        status: 'suspended'
    },
    {
        id: 'TOCAID',
        name: 'TOCAID (TocKay)',
        gender: 'Perempuan',
        sifat: 'Tangguh, Genial',
        peran: 'Kereta Logistik berat',
        detail: 'TocKay adalah kereta perempuan yang sangat tangguh dan genial dia lokomotif perempuan pertama di nesyabella yang mampu menyaingi seluruh ketangguhan para lokomotif laki laki.',
        image: 'TOCKAY.jpg',
        status: 'suspended'
    },
    {
        id: 'toc888',
        name: 'TOC888 (Thunder)',
        gender: 'Laki-laki',
        sifat: 'Energik, penuh semangat',
        peran: 'Kereta petir untuk penyelamatan ekstrem',
        detail: 'Thunder adalah lokomotif yang penuh energi dan semangat. Dia dilengkapi dengan teknologi petir yang memungkinkannya merespons situasi penyelamatan yang paling ekstrem sekalipun.',
        image: 'Laju elektrik.jpg',
        status: 'inactive'
    },
    {
        id: 'br221',
        name: 'BR221 (LokoRed)',
        gender: 'Laki-laki',
        sifat: 'Pemarah, galak, bijaksana',
        peran: 'Lokomotif penumpang dan industrial',
        detail: 'LokoRed adalah lokomotif yang pemarah tapi bijaksana. Meskipun galak di permukaan, dia memiliki hati yang baik dan sering memberikan nasihat berharga. Dia multifungsi sebagai penumpang dan industrial.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLCM+cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNncmFkMSkiLz4KICAKPGRVZV0+bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAKPFN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2RjMjcyNztzdG9wLW9wYWNpdHk6MSIgLz4KICAKPFN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOTAxYTFhO3N0b3Atb3BhY2l0eToxIiAvPgogIAo8L2xpbmVhckdyYWRpZW50PgogIAo8L2RlZnM+CiAgCjxyZWN0IHg9IjMwIiB5PSI0MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNkYzI3MjciIHJ4PSI4Ii8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzljMDAwMCIvPgo8cmVjdCB4PSI2MCIgeT0iNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjQwIiB5PSIxMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzljMDAwMCIvPgo8cmVjdCB4PSIxMjAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjOWMwMDAwIi8+CjxyZWN0IHg9IjQ1IiB5PSIyMDUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2RjMjcyNyIvPgo8cmVjdCB4PSIxMjUiIHk9IjIwNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZGMyNzI3Ii8+Cjwvc3ZnPg==',
        status: 'missing'
    },
    {
        id: 'toc707',
        name: 'TOC707 (Mbah Ti)',
        gender: 'Laki-laki',
        sifat: 'Bijaksana, ingatan luas',
        peran: 'Lokomotif berpengalaman',
        detail: 'Mbah Ti adalah lokomotif tertua dan paling berpengalaman. Dia memiliki ingatan yang luas tentang sejarah Nesyabella dan sering menjadi mentor bagi lokomotif muda. Kebijaksanaannya sangat dihargai.',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLCM+cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0idXJsKCNncmFkMSkiLz4KICAKPGRVZV0+bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIiB4MT0iMCUiIHkxPSIwJSIgeDI6IjEwMCUiIHkyPSIxMDAlIj4KICAKPFN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY2YjI2YjtzdG9wLW9wYWNpdHk6MSIgLz4KICAKPFN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNDQ4YzQyO3N0b3Atb3BhY2l0eToxIiAvPgogIAo8L2xpbmVhckdyYWRpZW50PgogIAo8L2RlZnM+CiAgCjxyZWN0IHg9IjQwIiB5PSI1MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiM0NDhjNDIiIHJ4PSI2Ii8+CjxyZWN0IHg9IjYwIiB5PSI3MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjNjZiMjZiIi8+CjxyZWN0IHg9IjcwIiB5PSI4MCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjkwIiB5PSI4MCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjExMCIgeT0iODAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI0MCIgcj0iMjAiIGZpbGw9IiM2NmIyNmIiIHN0cm9rZT0iIzQ0OGM0MiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==',
        status: 'active'
    }
];



// Switch Tab
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
    
    if (tabName === 'lokomotif') {
        renderCharacters(characters);
    }
}

// Render Character Cards dengan Status
function renderCharacters(charsToRender) {
    const grid = document.getElementById('charactersGrid');
    grid.innerHTML = '';
    
    charsToRender.forEach(char => {
        const card = document.createElement('div');
        card.className = `character-card status-${char.status}`;
        card.onclick = () => showCharacterDetail(char);
        
        // Create image element with proper centering
        const imageContainer = document.createElement('div');
        imageContainer.className = 'char-image-container';
        
        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;
        img.className = 'char-image';
        img.style.objectFit = 'contain';
        img.style.objectPosition = 'center';
        img.style.padding = '10px';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        imageContainer.appendChild(img);
        imageContainer.innerHTML += getStatusBadge(char.status);
        
        // Create info section
        const infoDiv = document.createElement('div');
        infoDiv.className = 'char-info';
        infoDiv.innerHTML = `
            <div class="char-name">${char.name}</div>
            <div class="char-gender">👥 ${char.gender}</div>
            <div class="char-trait">${char.sifat}</div>
            <div class="char-trait" style="color: var(--secondary); margin-top: 1rem;">⚙️ ${char.peran}</div>
        `;
        
        card.appendChild(imageContainer);
        card.appendChild(infoDiv);
        grid.appendChild(card);
    });
}

// Get Status Badge
function getStatusBadge(status) {
    switch(status) {
        case 'active':
            return ''; // No badge for active
        case 'inactive':
            return '<div class="status-badge inactive" title="Inactive">⏸️</div>';
        case 'suspended':
            return '<div class="status-badge suspended" title="Suspended">�</div>';        case 'missing':
            return '<div class="status-badge missing" title="Missing">❓</div>';        default:
            return '';
    }
}

// Get Distorted Text for Suspended - SUPER AGGRESSIVE GLITCH
function getDistortedText(text) {
    if (!text) return text;
    
    // Massive collection of glitch characters
    const glitchChars = ['█', '▓', '▒', '░', '¬', '÷', '×', '§', '¶', '†', '‡', '~', '⟲', '⟳', '▀', '▁', '▂', '▃', '▄', '▅', '▆', '▇', '▏', '▐', '▍', '▎', '░', '▒', '▓', '█', '▕', '▔', '▗', '▖', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟', '∆', '∇', '∎', '◆', '◊', '●', '○', '◎', '◉', '◈', '◇', '◌', '◐', '◑', '◒', '◓', '◔', '◕', '◖', '◗', '◙', '◚', '◛', '◜', '◝', '◞', '◟', '❌', '⚠️', '⛔', '💥', '⚡'];
    const randomColors = ['#ff0000', '#ff1744', '#ff00ff', '#ffff00', '#00ff00', '#00ffff', '#ff6600', '#ff0099', '#ff00aa'];
    
    let result = '';
    const charArray = text.split('');
    
    // First pass - corrupt characters randomly and aggressively
    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];
        const rand = Math.random();
        const color1 = randomColors[Math.floor(Math.random() * randomColors.length)];
        const color2 = randomColors[Math.floor(Math.random() * randomColors.length)];
        
        // 60% chance of heavy corruption
        if (rand > 0.4) {
            // Random glitch character
            const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            const rotateVal = Math.random() * 360;
            const scaleVal = 0.5 + Math.random() * 1.5;
            const skewX = Math.random() * 60 - 30;
            const skewY = Math.random() * 60 - 30;
            
            result += `<span class="glitch-char-extreme" style="
                color: ${color1}; 
                text-shadow: 
                    3px 3px ${color2}, 
                    -3px -3px ${randomColors[Math.floor(Math.random() * randomColors.length)]},
                    6px 0px #ff0066,
                    -6px 0px #00ff99,
                    0px 6px #ffff00;
                transform: rotate(${rotateVal}deg) scaleX(${scaleVal}) skewX(${skewX}deg) skewY(${skewY}deg);
                display: inline-block;
                animation: extremeGlitch ${0.05 + Math.random() * 0.1}s infinite, 
                           glitchTwist ${0.1 + Math.random() * 0.15}s infinite,
                           glitchFlip ${0.08 + Math.random() * 0.12}s infinite;
                opacity: ${0.6 + Math.random() * 0.4};
                line-height: 0.8;
            ">${glitchChar}</span>`;
        }
        // 30% chance of distorted character
        else if (rand > 0.1) {
            const skewX = Math.random() * 80 - 40;
            const skewY = Math.random() * 80 - 40;
            const scaleX = 0.3 + Math.random() * 1.7;
            const scaleY = 0.3 + Math.random() * 1.7;
            
            result += `<span class="glitch-char-extreme" style="
                color: ${color1};
                text-shadow: 2px 2px ${color2}, -2px -2px ${randomColors[Math.floor(Math.random() * randomColors.length)]};
                transform: skewX(${skewX}deg) skewY(${skewY}deg) scaleX(${scaleX}) scaleY(${scaleY});
                display: inline-block;
                animation: glitchShiftExtreme ${0.08 + Math.random() * 0.12}s infinite;
                opacity: ${0.4 + Math.random() * 0.6};
            ">${char}</span>`;
        }
        // 10% chance normal but with effects
        else {
            result += `<span class="glitch-char-extreme" style="
                animation: glitchBlink ${0.1 + Math.random() * 0.15}s infinite;
                color: ${color1};
                text-shadow: 1px 1px ${color2};
            ">${char}</span>`;
        }
    }
    
    // Inject random corrupted lines
    if (Math.random() > 0.3) {
        const injectionPoint = Math.floor(Math.random() * result.length);
        const randomLine = '█'.repeat(Math.floor(Math.random() * 10 + 5));
        result = result.slice(0, injectionPoint) + `<span style="color: #ff0000; animation: extremeGlitch 0.08s infinite;">${randomLine}</span>` + result.slice(injectionPoint);
    }
    
    return result;
}

// Show Character Detail Modal
function showCharacterDetail(char) {
    const modal = document.getElementById('modal');
    const isSuspended = char.status === 'suspended';
    const isMissing = char.status === 'missing';
    const isInactive = char.status === 'inactive';
    
    // Stop existing audio (all types)
    stopMelancholicMusic();
    stopInactiveAudio();
    stopSuspendedAudio();
    
    // Trigger glitch effect jika suspended
    if (isSuspended) {
        triggerScreenGlitch();
        playSuspendedAudio();
    }
    
    // Trigger melancholic effect jika missing
    if (isMissing) {
        playMelancholicMusic();
    }

    // Play inactive audio jika inactive
    if (isInactive) {
        playInactiveAudio();
    }
    
    // Update modal title dengan potential glitch atau melancholic fade
    let titleText = char.name;
    if (isSuspended) {
        titleText = getDistortedText(char.name);
    } else if (isMissing) {
        titleText = `<span class="melancholic-fade">${char.name}</span>`;
    }
    document.getElementById('modalTitle').innerHTML = titleText;
    
    const detailText = isSuspended ? getDistortedText(char.detail) : char.detail;
    
    const suspendedStyle = isSuspended ? `background: linear-gradient(135deg, rgba(220, 20, 60, 0.1), rgba(139, 0, 0, 0.05)); border-left: 4px solid #ff0000; animation: glitchModal 0.3s;` : '';
    const missingStyle = isMissing ? `background: linear-gradient(135deg, rgba(100, 80, 150, 0.15), rgba(80, 60, 130, 0.1)); border-left: 4px dashed rgba(150, 120, 200, 0.4); animation: melancholicGlow 0.5s;` : '';
    const inactiveStyle = isInactive ? `background: linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 140, 0, 0.05)); border-left: 4px solid #ffa500; animation: shimmerModal 0.3s;` : '';
    
    document.getElementById('modalBody').innerHTML = `
        <div style="margin-bottom: 1.5rem; ${suspendedStyle}${missingStyle}${inactiveStyle}">
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary);">Status:</strong> 
                <span style="color: ${isSuspended ? '#ff0000' : isMissing ? '#9b7cc4' : isInactive ? '#ffa500' : 'var(--secondary)'}; ${isSuspended ? 'font-weight: bold; text-shadow: 0 0 10px #ff0000;' : isMissing ? 'font-style: italic; opacity: 0.8;' : isInactive ? 'font-weight: bold; text-shadow: 0 0 5px #ffa500;' : ''}">${char.status.toUpperCase()}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary);">Jenis Kelamin:</strong> <span style="${isMissing ? 'opacity: 0.7;' : ''}">${char.gender}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--primary);">Sifat & Kepribadian:</strong> <span style="${isMissing ? 'opacity: 0.7;' : ''}">${char.sifat}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <strong style="color: var(--secondary);">Peran:</strong> <span style="${isMissing ? 'opacity: 0.7;' : ''}">${char.peran}</span>
            </div>
            <hr style="border: 1px solid rgba(0, 217, 255, 0.2); margin: 1.5rem 0;">
            <div style="margin-top: 1rem;">
                <strong style="color: var(--primary);">Detail:</strong>
                <p class="${isSuspended ? 'glitch-text' : isMissing ? 'missing-text' : ''}" style="margin-top: 0.5rem; ${isSuspended ? 'color: #ff6b6b; font-family: monospace; line-height: 1.6;' : isMissing ? 'color: #b89dcc; font-style: italic; opacity: 0.75; line-height: 1.8;' : ''}">${detailText}</p>
            </div>
        </div>
    `;
    
    // Add glitch class ke modal jika suspended
    if (isSuspended) {
        modal.classList.add('glitch-mode');
        modal.classList.remove('melancholic-mode', 'inactive-mode');
    } else if (isMissing) {
        modal.classList.add('melancholic-mode');
        modal.classList.remove('glitch-mode', 'inactive-mode');
    } else if (isInactive) {
        modal.classList.add('inactive-mode');
        modal.classList.remove('glitch-mode', 'melancholic-mode');
    } else {
        modal.classList.remove('glitch-mode', 'melancholic-mode', 'inactive-mode');
    }
    
    modal.classList.add('active');
}

// Play Melancholic Music for Missing Characters
function playMelancholicMusic() {
    let audioElement = document.getElementById('melancholicAudio');
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'melancholicAudio';
        audioElement.loop = true;
        audioElement.volume = 0.5;
        audioElement.src = 'Melancholic Vision (StickMazz Music).mp3';
        document.body.appendChild(audioElement);
    }
    
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play().catch(err => console.log('Audio play failed:', err));
    }
}

// Stop Melancholic Music
function stopMelancholicMusic() {
    const audioElement = document.getElementById('melancholicAudio');
    if (audioElement && !audioElement.paused) {
        audioElement.pause();
    }
}

// Play Inactive Audio
function playInactiveAudio() {
    let audioElement = document.getElementById('inactiveAudio');
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'inactiveAudio';
        audioElement.loop = true;
        audioElement.volume = 0.4;
        audioElement.src = 'Bloodyness Velmoura - StickMazz (Official Audio).mp3';  // Path nanti bisa diubah
        document.body.appendChild(audioElement);
    }
    
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play().catch(err => console.log('Audio play failed (inactive):', err));
    }
}

// Stop Inactive Audio
function stopInactiveAudio() {
    const audioElement = document.getElementById('inactiveAudio');
    if (audioElement && !audioElement.paused) {
        audioElement.pause();
    }
}

// Play Suspended Audio
function playSuspendedAudio() {
    let audioElement = document.getElementById('suspendedAudio');
    if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'suspendedAudio';
        audioElement.loop = true;
        audioElement.volume = 0.4;
        audioElement.src = 'NovaZess Veldrass.mp4';  // Path nanti bisa diubah
        document.body.appendChild(audioElement);
    }
    
    if (audioElement.paused) {
        audioElement.currentTime = 0;
        audioElement.play().catch(err => console.log('Audio play failed (suspended):', err));
    }
}

// Stop Suspended Audio
function stopSuspendedAudio() {
    const audioElement = document.getElementById('suspendedAudio');
    if (audioElement && !audioElement.paused) {
        audioElement.pause();
    }
}

// Close modal and stop music
function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event && event.target !== modal) return;
    
    modal.classList.remove('active');
    
    // Stop all audio types
    stopMelancholicMusic();
    stopInactiveAudio();
    stopSuspendedAudio();
}

// Trigger full screen glitch effect - EXTREME VERSION
function triggerScreenGlitch() {
    // Create aggressive glitch overlay with multiple layers
    let glitchOverlay = document.getElementById('glitchOverlay');
    if (!glitchOverlay) {
        glitchOverlay = document.createElement('div');
        glitchOverlay.id = 'glitchOverlay';
        glitchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(0deg, transparent 24%, rgba(255, 0, 100, 0.15) 25%, rgba(255, 0, 100, 0.15) 26%, transparent 27%, transparent 74%, rgba(255, 0, 100, 0.15) 75%, rgba(255, 0, 100, 0.15) 76%, transparent 77%, transparent),
                repeating-linear-gradient(90deg, rgba(255, 0, 0, 0.03) 0px, rgba(255, 0, 0, 0.05) 2px, transparent 4px, transparent 6px),
                repeating-linear-gradient(0deg, transparent 0px, rgba(0, 255, 255, 0.05) 2px, rgba(0, 255, 255, 0.03) 4px);
            background-size: 50px 4px, 100% 100%, 100% 100%;
            z-index: 9998;
            pointer-events: none;
            animation: screenFlickerExtreme 0.08s infinite, scanLinesExtreme 0.02s infinite, rgbShift 0.15s infinite;
        `;
        document.body.appendChild(glitchOverlay);
    }
    
    // Create chromatic aberration effect layer
    let chromLayer = document.getElementById('chromaticAberration');
    if (!chromLayer) {
        chromLayer = document.createElement('div');
        chromLayer.id = 'chromaticAberration';
        chromLayer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(45deg, transparent 30%, rgba(255, 0, 0, 0.1) 30.5%, transparent 31%),
                linear-gradient(-45deg, transparent 30%, rgba(0, 255, 255, 0.1) 30.5%, transparent 31%);
            z-index: 9997;
            pointer-events: none;
            animation: chromaticPulse 0.3s infinite;
        `;
        document.body.appendChild(chromLayer);
    }
    
    glitchOverlay.style.display = 'block';
    chromLayer.style.display = 'block';
    
    // Aggressive glitch pulses
    let glitchCount = 0;
    const glitchInterval = setInterval(() => {
        if (glitchCount < 15) {
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            glitchOverlay.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            glitchCount++;
        } else {
            clearInterval(glitchInterval);
            glitchOverlay.style.transform = 'translate(0, 0)';
        }
    }, 50);
    
    // Auto remove glitch after 6 seconds
    setTimeout(() => {
        glitchOverlay.style.display = 'none';
        chromLayer.style.display = 'none';
    }, 6000);
}

// Show Antagonis Detail Modal
function showAntagonisDetail(antagonisId) {
    const antagonisData = {
        'dr-vortex': {
            name: 'Dr. Vortex',
            detail: 'Dr. Vortex adalah antagonis utama dalam cerita StickMazz. Dia memiliki kekuatan destruktif yang sangat berbahaya. Tujuannya adalah menciptakan kekacauan di Nesyabella dan mengalahkan semua lokomotif baik. Dia mengandalkan teknologi gelap dan senjata canggih untuk mencapai tujuannya.'
        },
        'devinator': {
            name: 'Devinator',
            detail: 'Devinator adalah pemberontak dengan rencana jahat yang rumit. Dia percaya bahwa PT Kanna dan sistem yang ada sekarang harus digulingkan. Dia merekrut beberapa lokomotif untuk bergabung dengan revolusinya, meskipun banyak yang menolak.'
        },
        'black': {
            name: 'Black',
            detail: 'Black adalah antagonis yang muncul kemudian dalam cerita, menggantikan peran Dr. Vortex dan Devinator. Dia adalah tokoh yang lebih misterius dan powerful. Black memiliki kemampuan yang lebih canggih dan rencananya lebih matang. Kehadirannya menandai babak baru dalam konflik di Nesyabella.'
        }
    };

    const antag = antagonisData[antagonisId];
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = '👿 ' + antag.name;
    document.getElementById('modalBody').innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <p>${antag.detail}</p>
        </div>
    `;
    modal.classList.add('active');
}

// Search Functionality
document.getElementById('searchInput')?.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(searchTerm) ||
        char.sifat.toLowerCase().includes(searchTerm) ||
        char.peran.toLowerCase().includes(searchTerm)
    );
    renderCharacters(filtered);
});

// Close modal dengan Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Render characters on load
window.addEventListener('load', () => {
    renderCharacters(characters);
});
