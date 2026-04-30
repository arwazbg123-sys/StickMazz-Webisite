// ========================================
// 🎶 STICKMUZZY ADVANCED MUSIC PLAYER v2
// DENGAN FITUR KEREN & INTERAKTIF 🚄✨
// ========================================

// Canvas Visualizer untuk animasi spectrum
class AudioVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.analyser = null;
    this.dataArray = null;
    this.animationId = null;
  }

  init(audioContext) {
    this.analyser = audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    const bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
    return this.analyser;
  }

  draw(color = '#a0faff') {
    if (!this.analyser || !this.canvas) return;

    this.animationId = requestAnimationFrame(() => this.draw(color));
    
    this.analyser.getByteFrequencyData(this.dataArray);
    
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    // Clear canvas dengan gradient
    const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(10, 10, 15, 0.1)');
    gradient.addColorStop(1, 'rgba(10, 10, 15, 0.3)');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, width, height);
    
    // Draw bars dengan efek glow
    const barWidth = (width / this.dataArray.length) * 2.5;
    let x = 0;
    
    for (let i = 0; i < this.dataArray.length; i++) {
      const barHeight = (this.dataArray[i] / 255) * height;
      
      // Gradient for bars
      const barGradient = this.ctx.createLinearGradient(0, height - barHeight, 0, height);
      barGradient.addColorStop(0, color);
      barGradient.addColorStop(1, color.replace('ff', '88'));
      
      this.ctx.fillStyle = barGradient;
      this.ctx.fillRect(x, height - barHeight, barWidth, barHeight);
      
      // Glow effect
      this.ctx.shadowColor = color;
      this.ctx.shadowBlur = 10;
      
      x += barWidth + 1;
    }
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Particle Effect System
class ParticleSystem {
  constructor() {
    this.particles = [];
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particleCanvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '1000';
    
    this.ctx = this.canvas.getContext('2d');
    this.animate = this.animate.bind(this);
  }

  init() {
    document.body.appendChild(this.canvas);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
    this.animate();
  }

  createBurst(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const velocity = 3 + Math.random() * 3;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        color: color,
        size: 2 + Math.random() * 3
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1; // gravity
      p.life -= 0.02;
      
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    this.particles = this.particles.filter(p => p.life > 0);
    this.ctx.globalAlpha = 1;
    
    if (this.particles.length > 0) {
      requestAnimationFrame(this.animate);
    }
  }
}

// Data Lagu Karakter dengan warna & story
const musicDatabase = [
  {
    id: 1,
    src: 'Matahari Bersinar - StickMazz (Official Audio).mp3',
    title: 'Acive Your Dream',
    character: 'TOC121 (Rose Rail Clinic)',
    characterCode: 'TOC121',
    img: 'Matahari bersinar.jpg',
    vibe: 'Tenang',
    zone: 'Clinic'
  },
  {
    id: 2,
    src: 'Sang Pelindung - StickMazz (Official Audio).mp3',
    title: 'Sang Pelindung',
    character: 'TOC777 (Guardian Spirit)',
    characterCode: 'TOC777',
    img: 'Sang Pelindung.jpg',
    vibe: 'Heroik',
    zone: 'Guardian'
  },
  {
    id: 3,
    src: 'Petalinas - StickMazz (Official Audio).mp3',
    title: 'Petalinas',
    character: 'TOC211 (Petalina Putriona)',
    characterCode: 'TOC211',
    img: 'Petalinas.jpg',
    vibe: 'Ceria Gaul',
    zone: 'Station'
  },
  {
    id: 4,
    src: 'Nitrai - StickMazz (Official Audio).mp3',
    title: 'Nitrai',
    character: 'TRY206 (Nitra Landsri)',
    characterCode: 'TRY206',
    img: 'TRY206_NitraI..webp',
    vibe: 'Teknologi & Harapan',
    zone: 'Tech'
  },
  {
    id: 5,
    src: 'Dash Chaotic - StickMazz (Official Audio).mp3',
    title: 'Dash Chaotic',
    character: 'TOC141 (Dash)',
    characterCode: 'TOC141',
    img: 'Dash Chaotic.jpg',
    vibe: 'Gaul & Sok Tahu',
    zone: 'Station'
  },
  {
    id: 6,
    src: '#',
    title: 'Tidak mempunyai Musik',
    character: 'TOC404 (Semut Besi)',
    characterCode: 'TOC404',
    img: 'img/toc404.jpg',
    vibe: 'Magnetik',
    zone: 'Station'
  },
  {
    id: 7,
    src: '#',
    title: 'Tidak mempunyai Musik',
    character: 'TOC505 (Velsandra Achdati)',
    characterCode: 'TOC505',
    img: 'img/toc505.jpg',
    vibe: 'Bijak & Pelupa',
    zone: 'Station'
  },
  {
    id: 8,
    src: '#',
    title: 'Tidak mempunyai Musik Akan ditambahkan di update selanjutnya',
    character: 'TOCAID (TOCKAY)',
    characterCode: 'TOCAID',
    img: 'TOCKAY.jpg',
    vibe: 'Kekuatan & Komedi',
    zone: 'Street'
  },
  {
    id: 9,
    src: '#',
    title: 'Tidak mempunyai Musik',
    character: 'ESSDOT121',
    characterCode: 'ESSDOT121',
    img: 'img/essdot121.jpg',
    vibe: 'Misterius',
    zone: 'Secret'
  },
  {
    id: 10,
    src: '#',
    title: 'Tidak mempunyai Musik',
    character: 'VT21',
    characterCode: 'VT21',
    img: 'img/vt21.jpg',
    vibe: 'Sunyi',
    zone: 'Far'
  },
  {
    id: 11,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC343 (Lorry)',
    characterCode: 'TOC343',
    img: 'img/toc343.jpg',
    vibe: 'Lemah Tapi Tangguh',
    zone: 'Journey',
    color: '#FF1493',
    story: '🚚 Lemah penampilan, hati baja'
  },
  {
    id: 12,
    src: '#',
    title: 'Coming Soon',
    character: 'BR221 (LokoRed)',
    characterCode: 'BR221',
    img: 'img/br221.jpg',
    vibe: 'Galak & Ramah',
    zone: 'Bridge',
    color: '#E63946',
    story: '🔴 Galak di luar, ramah di dalam'
  },
  {
    id: 13,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC999 (Blaze)',
    characterCode: 'TOC999',
    img: 'img/toc999.jpg',
    vibe: 'Api',
    zone: 'Fire',
    color: '#FF4500',
    story: '🔥 Api semangat yang menyala terang'
  },
  {
    id: 14,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC-AI01 (AIBOT)',
    characterCode: 'TOC-AI01',
    img: 'img/aibot.jpg',
    vibe: 'Analitik',
    zone: 'Tech',
    color: '#06FFA5',
    story: '🦾 Robot AI sempurna'
  },
  {
    id: 15,
    src: 'Laju Elektrik - StickMazz (Official Audio).mp3',
    title: 'Laju Elektrik',
    character: 'TOC888 (Thunder)',
    characterCode: 'TOC888',
    img: 'Laju elektrik.jpg',
    vibe: 'Petir & Semangat',
    zone: 'Electric',
    color: '#FFFD38',
    story: '⚡ Kilat energi tak terbatas'
  },
  {
    id: 16,
    src: 'Willy Hey2 - StickMazz (Official Audio).mp3',
    title: 'Willy Hey2',
    character: 'TOC315 (Willy Laughter)',
    characterCode: 'TOC315',
    img: 'img/toc315.jpg',
    vibe: 'Tawa',
    zone: 'Joy',
    color: '#FFD60A',
    story: '😂 Pembawa tawa untuk semua'
  },
  {
    id: 17,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC986 (Cyber Sentinel)',
    characterCode: 'TOC986',
    img: 'img/toc986.jpg',
    vibe: 'Pemindai',
    zone: 'Cyber',
    color: '#00D9FF',
    story: '🔍 Pengawas cyber profesional'
  },
  {
    id: 18,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC966 (Rail Girl)',
    characterCode: 'TOC966',
    img: 'img/toc966.jpg',
    vibe: 'Strategi & Kepemimpinan',
    zone: 'Command',
    color: '#EF476F',
    story: '👑 Pemimpin strategis'
  },
  {
    id: 19,
    src: '#',
    title: 'Coming Soon',
    character: 'TOC707 (Mbah Ti)',
    characterCode: 'TOC707',
    img: 'img/toc707.jpg',
    vibe: 'Ingatan & Kebijaksanaan',
    zone: 'Ancient',
    color: '#CCCCCC',
    story: '👴 Nenek bijak penyimpan ingatan'
  },
  {
    id: 20,
    src: 'Babaranjang Is a Misson - StickMazz (Official Audio).mp3',
    title: 'Babaranjang Is a Mission',
    character: 'CC205 (Naufal)',
    characterCode: 'CC205',
    img: 'img/cc205.jpg',
    vibe: 'Semangat Sumatra',
    zone: 'Island',
    color: '#FF5722',
    story: '🏝️ Misi Babaranjang pulau'
  },
  {
    id: 21,
    src: '#',
    title: 'Coming Soon',
    character: 'CC206 (Puong)',
    characterCode: 'CC206',
    img: 'img/cc206.jpg',
    vibe: 'Tanjung Priuk',
    zone: 'Port',
    color: '#2196F3',
    story: '⛵ Pelaut pemberani'
  },
  {
    id: 22,
    src: '#',
    title: 'Coming Soon',
    character: 'CC201 (CICI)',
    characterCode: 'CC201',
    img: 'img/cc201.jpg',
    vibe: 'Lembut & Mesin',
    zone: 'Factory',
    color: '#FF6E40',
    story: '⚙️ Lembut seperti mesin pabrik'
  },
  {
    id: 23,
    src: '#',
    title: 'Coming Soon',
    character: 'CC203 (Lina)',
    characterCode: 'CC203',
    img: 'img/cc203.jpg',
    vibe: 'RNB & Cute',
    zone: 'Urban',
    color: '#E91E63',
    story: '🎵 Gaya RNB yang imut'
  },
  // ========== KARAKTER TAMBAHAN DARI NESYABELLA ==========
  {
    id: 24,
    src: '#',
    title: 'Kekuatan Portal',
    character: 'TOC101 (Crono)',
    characterCode: 'TOC101',
    img: 'img/toc101.jpg',
    vibe: 'Portal & Teleportasi',
    zone: 'Secret',
    color: '#7A8BA8',
    story: '🌀 Kereta aerodinamis penakut dengan kekuatan portal'
  },
  {
    id: 25,
    src: '#',
    title: 'Phase H - Dark Mode',
    character: 'CTC 1 (Black)',
    characterCode: 'CTC1',
    img: 'img/ctc1.jpg',
    vibe: 'Ilmu Hitam & Chaos',
    zone: 'Darkness',
    color: '#1A1A1A',
    story: '😈 Antagonis misterius dengan 2 kepribadian'
  },
  {
    id: 26,
    src: '#',
    title: 'Peluncur Misil',
    character: 'TOC205 (Jacker)',
    characterCode: 'TOC205',
    img: 'img/toc205.jpg',
    vibe: 'Penjaga & Defensif',
    zone: 'Guardian',
    color: '#808080',
    story: '🎖️ Asisten Guardian Spirit yang tangguh'
  },
  {
    id: 27,
    src: '#',
    title: 'Sheriff Sereal',
    character: 'TOC198 (Fathur Train)',
    characterCode: 'TOC198',
    img: 'img/toc198.jpg',
    vibe: 'Pemberani & Pelupa',
    zone: 'Desert',
    color: '#A0795B',
    story: '🤠 Sheriff gurun yang bersiul merdu'
  },
  {
    id: 28,
    src: '#',
    title: 'Maglev Teknologi',
    character: 'ST100 (Aurina)',
    characterCode: 'ST100',
    img: 'img/st100.jpg',
    vibe: 'Cepat & Imut',
    zone: 'Tech',
    color: '#FFB6D9',
    story: '💨 Kereta cepat maglev 900 KM/jam yang pemalu'
  },
  {
    id: 29,
    src: '#',
    title: 'Lokomotif Kucing',
    character: 'TOC209 (Wenda Jasmine)',
    characterCode: 'TOC209',
    img: 'img/toc209.jpg',
    vibe: 'Imut & Cemburu',
    zone: 'Station',
    color: '#F5F5F5',
    story: '🐱 Kereta lorry imut seperti anak kucing'
  },
  {
    id: 30,
    src: '#',
    title: 'Kekuatan Alam',
    character: 'TOC333 (FloraVine)',
    characterCode: 'TOC333',
    img: 'img/toc333.jpg',
    vibe: 'Alam & Ceria',
    zone: 'Forest',
    color: '#39FF14',
    story: '🌿 Ratu tanaman hutan Nesyabella yang gaul'
  },
  {
    id: 31,
    src: '#',
    title: 'Radiasi Kristal',
    character: 'TOC565 (VitraLined)',
    characterCode: 'TOC565',
    img: 'img/toc565.jpg',
    vibe: 'Analisis & Mutabel',
    zone: 'Crystal Cave',
    color: '#6B9DC9',
    story: '💎 Kereta radiasi yang cerdik saat tenaga penuh'
  },
  {
    id: 32,
    src: '#',
    title: 'Pendukung Misterius',
    character: 'TOC223 (Baby Ti)',
    characterCode: 'TOC223',
    img: 'img/toc223.jpg',
    vibe: 'Fleksibel & Adaptif',
    zone: 'Station',
    color: '#FFB6D9',
    story: '👶 Karakter pendukung yang jarang tampil'
  },
  {
    id: 33,
    src: '#',
    title: 'Kakak Floravine',
    character: 'TOC323 (VineFlower/Viktoria)',
    characterCode: 'TOC323',
    img: 'img/toc323.jpg',
    vibe: 'Alam & Humoris',
    zone: 'Forest',
    color: '#228B22',
    story: '🌳 Kakak FloraVine - ahli pelestarian alam'
  }
];

// State Management dengan Fitur Lengkap
class MusicPlayer {
  constructor() {
    this.player = document.getElementById('player');
    this.bgMusic = document.getElementById('bgMusic');
    this.trackInfo = document.getElementById('trackInfo');
    this.charImage = document.getElementById('charImage');
    
    this.currentIndex = -1;
    this.isPlaying = false;
    this.repeatMode = 0;
    this.isShuffle = false;
    this.favorites = this.loadFavorites();
    this.playHistory = this.loadPlayHistory();
    this.playlist = [...musicDatabase];
    this.isDarkMode = this.loadTheme();
    
    this.audioContext = null;
    this.visualizer = null;
    this.particleSystem = new ParticleSystem();
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderCharacters();
    this.createAdvancedUI();
    this.applyTheme();
    this.particleSystem.init();
  }

  setupEventListeners() {
    document.getElementById('playBtn')?.addEventListener('click', () => this.play());
    document.getElementById('pauseBtn')?.addEventListener('click', () => this.pause());
    document.getElementById('stopBtn')?.addEventListener('click', () => this.stop());

    // Keyboard shortcuts yang lebih banyak
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') { e.preventDefault(); this.togglePlay(); }
      if (e.code === 'ArrowRight') this.nextSong();
      if (e.code === 'ArrowLeft') this.previousSong();
      if (e.code === 'KeyR') this.toggleRepeat();
      if (e.code === 'KeyS') this.toggleShuffle();
      if (e.code === 'KeyF') this.toggleFavorite();
      if (e.code === 'KeyT') this.toggleTheme();
      if (e.code === 'KeyQ') this.toggleQueue();
    });

    this.player.addEventListener('ended', () => this.autoPlayNext());
    this.player.addEventListener('timeupdate', () => this.updateProgress());
    this.player.addEventListener('loadedmetadata', () => this.updateDuration());
    this.player.addEventListener('play', () => this.onPlay());
    this.player.addEventListener('pause', () => this.onPause());

    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => this.filterCharacters(e.target.value));

    const zoneFilter = document.getElementById('zoneFilter');
    zoneFilter?.addEventListener('change', (e) => this.filterByZone(e.target.value));
  }

  renderCharacters() {
    const karakterList = document.querySelector('.karakter-list');
    if (!karakterList) return;

    karakterList.innerHTML = this.playlist.map(song => {
      const isAvailable = song.src !== '#';
      return `
        <div class="karakter-item ${!isAvailable ? 'unavailable' : ''}" data-id="${song.id}" 
             onclick="musicPlayer.loadSong(${song.id})" style="border-color: ${song.color}; border-width: 2px;">
          <div class="character-badge" style="background: ${song.color}40; color: ${song.color};">
            ${song.zone}
          </div>
          <h3 style="color: ${song.color};">${song.character}</h3>
          <p>🎵 ${song.title}</p>
          <p class="song-vibe" style="color: ${song.color}; font-weight: bold;">${song.vibe}</p>
          <p class="song-story" style="font-size: 0.8rem; color: #aaa; margin: 5px 0;">${song.story}</p>
          <div class="card-actions" style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
            <button class="favorite-btn" onclick="event.stopPropagation(); musicPlayer.toggleFavoriteSong(${song.id})" 
                    style="background: none; border: none; font-size: 1.3rem; cursor: pointer; transition: transform 0.2s;">
              ${this.favorites.includes(song.id) ? '❤️' : '🤍'}
            </button>
            ${isAvailable ? `<span class="available-badge" style="font-size: 0.7rem; color: #29FF5C;">✓ Available</span>` : `<span class="unavailable-badge" style="font-size: 0.7rem; color: #FF6B9D;">🔒 Coming Soon</span>`}
          </div>
        </div>
      `;
    }).join('');
  }

  loadSong(id) {
    const song = musicDatabase.find(s => s.id === id);
    if (!song || song.src === '#') {
      alert('🎵 Lagu ini akan segera tersedia!');
      return;
    }

    this.currentIndex = musicDatabase.indexOf(song);
    this.incrPlayCount(song.id);

    if (this.bgMusic && !this.bgMusic.paused) this.bgMusic.pause();

    this.player.src = song.src;
    this.player.play();
    this.isPlaying = true;

    // Background color change dengan animasi
    document.body.style.transition = 'background 0.8s ease';
    document.body.style.background = `linear-gradient(135deg, ${song.color}20, #0a0a0f)`;

    this.trackInfo.innerHTML = `
      <div class="now-playing" style="padding: 15px; border-radius: 8px; background: ${song.color}15; border-left: 4px solid ${song.color};">
        <div class="now-playing-header" style="margin-bottom: 10px;">
          <span class="pulse" style="color: ${song.color}; font-weight: bold; font-size: 0.9rem;">● Now Playing</span>
        </div>
        <p style="font-size: 1.5rem; color: ${song.color}; font-weight: bold; margin: 5px 0;">🎤 ${song.character}</p>
        <p style="color: #ccc; margin: 3px 0;"><strong>🎵 Judul:</strong> ${song.title}</p>
        <p style="color: #ccc; margin: 3px 0;"><strong>✨ Vibe:</strong> <span style="color: ${song.color}; font-weight: bold;">${song.vibe}</span></p>
        <p style="color: #ccc; margin: 3px 0;"><strong>📍 Zone:</strong> ${song.zone}</p>
        <p style="font-size: 0.9rem; color: #aaa; margin-top: 8px; font-style: italic;">${song.story}</p>
      </div>
    `;

    if (song.img) {
      this.charImage.src = song.img;
      this.charImage.style.display = 'block';
      this.charImage.classList.add('show');
    }

    this.updatePlayButtonUI();
    
    // Particle burst effect!
    const rect = this.charImage?.getBoundingClientRect() || { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.particleSystem.createBurst(rect.x + rect.width / 2, rect.y + rect.height / 2, song.color, 20);

    // Update recommendation & queue
    this.showRecommendation();
    this.addToQueue(song);
  }

  play() {
    if (this.player.src) {
      this.player.play();
      this.isPlaying = true;
      this.updatePlayButtonUI();
    }
  }

  pause() {
    this.player.pause();
    this.isPlaying = false;
    this.updatePlayButtonUI();
  }

  stop() {
    this.player.pause();
    this.player.currentTime = 0;
    this.isPlaying = false;
    this.updatePlayButtonUI();
  }

  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  nextSong() {
    let nextIndex;
    if (this.isShuffle) {
      nextIndex = Math.floor(Math.random() * musicDatabase.length);
    } else {
      nextIndex = (this.currentIndex + 1) % musicDatabase.length;
    }
    this.loadSong(musicDatabase[nextIndex].id);
  }

  previousSong() {
    const prevIndex = (this.currentIndex - 1 + musicDatabase.length) % musicDatabase.length;
    this.loadSong(musicDatabase[prevIndex].id);
  }

  autoPlayNext() {
    if (this.repeatMode === 2) {
      // Repeat one
      this.player.currentTime = 0;
      this.player.play();
    } else {
      // Repeat all atau normal
      this.nextSong();
    }
  }

  toggleRepeat() {
    this.repeatMode = (this.repeatMode + 1) % 3;
    const repeatBtn = document.getElementById('repeatBtn');
    if (repeatBtn) {
      if (this.repeatMode === 0) {
        repeatBtn.textContent = '🔁';
        repeatBtn.style.color = '#a0faff';
        repeatBtn.style.opacity = '0.6';
      } else if (this.repeatMode === 1) {
        repeatBtn.textContent = '🔁 All';
        repeatBtn.style.color = '#00ff00';
        repeatBtn.style.opacity = '1';
      } else {
        repeatBtn.textContent = '🔁 One';
        repeatBtn.style.color = '#FF6B9D';
        repeatBtn.style.opacity = '1';
      }
    }
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) {
      shuffleBtn.style.color = this.isShuffle ? '#FFD60A' : '#a0faff';
      shuffleBtn.style.transform = this.isShuffle ? 'scale(1.15)' : 'scale(1)';
    }
  }

  toggleFavoriteSong(id) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(fav => fav !== id);
    } else {
      this.favorites.push(id);
    }
    this.saveFavorites();
    this.renderCharacters();
  }

  toggleFavorite() {
    if (this.currentIndex >= 0) {
      const btn = document.querySelector(`[data-id="${musicDatabase[this.currentIndex].id}"] .favorite-btn`);
      btn?.click();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveTheme();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }

  updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    
    if (progressBar && this.player.duration) {
      const percentage = (this.player.currentTime / this.player.duration) * 100;
      progressBar.style.width = percentage + '%';
    }

    if (currentTimeEl) {
      currentTimeEl.textContent = this.formatTime(this.player.currentTime);
    }
  }

  updateDuration() {
    const durationEl = document.getElementById('duration');
    if (durationEl) {
      durationEl.textContent = this.formatTime(this.player.duration || 0);
    }
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  }

  filterCharacters(query) {
    const items = document.querySelectorAll('.karakter-item');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query.toLowerCase()) ? 'block' : 'none';
    });
  }

  filterByZone(zone) {
    if (zone === 'all') {
      this.playlist = [...musicDatabase];
    } else {
      this.playlist = musicDatabase.filter(song => song.zone === zone);
    }
    this.renderCharacters();
  }

  incrPlayCount(id) {
    const song = this.playHistory.find(s => s.id === id);
    if (song) {
      song.count++;
    } else {
      this.playHistory.push({ id, count: 1 });
    }
    this.savePlayHistory();
  }

  getMostPlayed() {
    return this.playHistory.sort((a, b) => b.count - a.count).slice(0, 5);
  }

  showRecommendation() {
    if (this.currentIndex < 0) return;
    
    const currentSong = musicDatabase[this.currentIndex];
    const recommendations = musicDatabase.filter(s => 
      s.zone === currentSong.zone && s.id !== currentSong.id && s.src !== '#'
    ).slice(0, 3);

    const recContainer = document.getElementById('recommendationContainer');
    if (recContainer && recommendations.length > 0) {
      recContainer.innerHTML = `
        <div class="recommendations-section" style="background: #1c1c2c; padding: 12px; border-radius: 8px; margin-top: 10px;">
          <h4 style="color: #a0faff; margin-bottom: 8px;">💡 Rekomendasi Serupa (Zone ${currentSong.zone}):</h4>
          <div class="recommendations-list" style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${recommendations.map(song => `
              <div class="rec-item" onclick="musicPlayer.loadSong(${song.id})" style="border: 2px solid ${song.color}; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: all 0.3s; background: ${song.color}15;">
                <div style="color: ${song.color}; font-weight: bold; font-size: 0.9rem;">${song.character}</div>
                <small style="color: #aaa;">${song.title}</small>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  addToQueue(song) {
    const queueList = document.getElementById('queueList');
    if (!queueList) return;

    const nextSongs = musicDatabase.slice(this.currentIndex + 1, this.currentIndex + 4);
    queueList.innerHTML = `
      <div class="queue-item current" style="border-left: 4px solid ${song.color}; padding-left: 8px; margin-bottom: 6px;">
        <div style="color: ${song.color}; font-weight: bold;">▶️ ${song.character}</div>
        <small style="color: #888;">Playing now...</small>
      </div>
      ${nextSongs.map((s, idx) => `
        <div class="queue-item" style="border-left: 4px solid ${s.color}; padding-left: 8px; margin-bottom: 6px; opacity: 0.8;">
          <div style="color: ${s.color};">${idx === 0 ? '⏭️' : '⏭️'} ${s.character}</div>
          <small style="color: #666;">${s.title}</small>
        </div>
      `).join('')}
    `;
  }

  toggleQueue() {
    const queueDiv = document.getElementById('queueContainer');
    if (queueDiv) {
      queueDiv.classList.toggle('hidden');
    }
  }

  onPlay() {
    // Initialize audio context dan visualizer saat pertama kali play
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (!this.visualizer) {
      this.visualizer = new AudioVisualizer('visualizerCanvas');
      if (this.visualizer.canvas) {
        const analyser = this.visualizer.init(this.audioContext);
        try {
          const source = this.audioContext.createMediaElementAudioSource(this.player);
          source.connect(analyser);
          analyser.connect(this.audioContext.destination);
        } catch (e) {
          console.log('Audio visualizer note:', e.message);
        }
        
        const song = musicDatabase[this.currentIndex];
        this.visualizer.draw(song?.color || '#a0faff');
      }
    }
  }

  onPause() {
    if (this.visualizer) {
      this.visualizer.stop();
    }
  }

  saveFavorites() {
    localStorage.setItem('stickmazz_favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    return JSON.parse(localStorage.getItem('stickmazz_favorites') || '[]');
  }

  savePlayHistory() {
    localStorage.setItem('stickmazz_history', JSON.stringify(this.playHistory));
  }

  loadPlayHistory() {
    return JSON.parse(localStorage.getItem('stickmazz_history') || '[]');
  }

  saveTheme() {
    localStorage.setItem('stickmazz_theme', JSON.stringify(this.isDarkMode));
  }

  loadTheme() {
    return JSON.parse(localStorage.getItem('stickmazz_theme') ?? 'true');
  }

  createAdvancedUI() {
    const player = document.querySelector('.player');
    if (!player) return;

    const advancedUI = document.createElement('div');
    advancedUI.className = 'advanced-controls';
    advancedUI.innerHTML = `
      <!-- AUDIO VISUALIZER CANVAS -->
      <canvas id="visualizerCanvas" class="visualizer-canvas" width="800" height="120" 
              style="width: 100%; height: 120px; background: #0f0f18; border: 1px solid #a0faff; border-radius: 8px; margin-bottom: 15px; display: block;"></canvas>

      <!-- PROGRESS BAR -->
      <div class="progress-container">
        <span id="currentTime" class="time">0:00</span>
        <div class="progress-bar-container">
          <div id="progressBar" class="progress-bar"></div>
        </div>
        <span id="duration" class="time">0:00</span>
      </div>

      <!-- BUTTON CONTROLS -->
      <div class="button-controls">
        <button id="prevBtn" onclick="musicPlayer.previousSong()" class="control-btn">⏮️</button>
        <button id="playPauseBtn" class="control-btn play-pause" style="font-size: 1.8rem;">▶️</button>
        <button id="nextBtn" onclick="musicPlayer.nextSong()" class="control-btn">⏭️</button>
        <button id="shuffleBtn" onclick="musicPlayer.toggleShuffle()" class="control-btn">🔀</button>
        <button id="repeatBtn" onclick="musicPlayer.toggleRepeat()" class="control-btn">🔁</button>
        <button id="themeBtn" onclick="musicPlayer.toggleTheme()" class="control-btn">🌙</button>
        <button id="queueBtn" onclick="musicPlayer.toggleQueue()" class="control-btn">📜</button>
      </div>

      <!-- VOLUME CONTROL -->
      <div class="volume-container">
        <label>🔊 Volume:</label>
        <input type="range" id="volumeControl" min="0" max="100" value="100" class="volume-slider">
        <span id="volumeValue" style="color: #a0faff; min-width: 35px;">100%</span>
      </div>

      <!-- SEARCH & FILTER -->
      <div class="search-filter">
        <input type="text" id="searchInput" placeholder="🔍 Cari karakter atau lagu..." class="search-box">
        <select id="zoneFilter" class="zone-filter">
          <option value="all">📍 Semua Zone</option>
          ${[...new Set(musicDatabase.map(s => s.zone))].map(z => 
            `<option value="${z}">${z}</option>`
          ).join('')}
        </select>
      </div>

      <!-- RECOMMENDATIONS -->
      <div id="recommendationContainer" class="recommendations-section"></div>

      <!-- QUEUE -->
      <div id="queueContainer" class="queue-container hidden">
        <h4 style="color: #a0faff; margin-bottom: 10px;">📜 Antrian Putar</h4>
        <div id="queueList" class="queue-list"></div>
      </div>

      <!-- KEYBOARD SHORTCUTS -->
      <div class="keyboard-shortcuts">
        <p style="font-size: 0.8rem; color: #666;">⌨️ SPACE (Play) | ← → (Prev/Next) | R (Repeat) | S (Shuffle) | F (Fav) | T (Theme) | Q (Queue)</p>
      </div>
    `;

    player.appendChild(advancedUI);

    // Volume control dengan display
    const volumeControl = document.getElementById('volumeControl');
    const volumeValue = document.getElementById('volumeValue');
    volumeControl.addEventListener('input', (e) => {
      this.player.volume = e.target.value / 100;
      volumeValue.textContent = e.target.value + '%';
    });

    // Play/Pause button
    document.getElementById('playPauseBtn').addEventListener('click', () => {
      this.togglePlay();
    });

    this.updatePlayButtonUI();
  }

  updatePlayButtonUI() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
      playPauseBtn.textContent = this.isPlaying ? '⏸️' : '▶️';
      playPauseBtn.style.animation = this.isPlaying ? 'pulse 1s infinite' : 'none';
    }
  }
}

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.musicPlayer = new MusicPlayer();
});
