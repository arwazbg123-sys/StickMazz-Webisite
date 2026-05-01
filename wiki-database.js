// ========================================
// STICKMAZZ WIKI - UNIFIED DATABASE
// Semua karakter utama + bonus dalam satu sistem
// ========================================

// COMBINED CHARACTER DATABASE (Main + Bonus)
const allCharactersDatabase = [
  // ===== MAIN CHARACTERS (23 utama) =====
  {
    id: 1,
    type: 'utama',
    code: 'TOC121',
    name: 'Rose Rail Clinic',
    character: 'TOC121',
    vibe: 'Tenang',
    zone: 'Clinic',
    color: '#FFB6D9',
    img: 'img/toc121.jpg',
    story: 'Lokomotif penjaga klinik dengan sifat tenang dan penyayang. Melayani dengan penuh dedikasi untuk kesehatan penghuni Nesyabella.'
  },
  {
    id: 2,
    type: 'utama',
    code: 'TOC777',
    name: 'Guardian Spirit',
    character: 'TOC777',
    vibe: 'Heroik',
    zone: 'Guardian',
    color: '#FFD60A',
    img: 'img/toc777.jpg',
    story: 'Peminpin heroik yang menjaga keselamatan Nesyabella. Dipercaya oleh banyak karakter sebagai simbol harapan dan keberanian.'
  },
  {
    id: 3,
    type: 'utama',
    code: 'TOC211',
    name: 'Petalina Putriona',
    character: 'TOC211',
    vibe: 'Ceria Gaul',
    zone: 'Station',
    color: '#FF69B4',
    img: 'img/toc211.jpg',
    story: 'Lokomotif yang ceria dan gaul, selalu membawa energi positif ke mana pun dia pergi.'
  },
  {
    id: 4,
    type: 'utama',
    code: 'TRY206',
    name: 'Nitra Landsri',
    character: 'TRY206',
    vibe: 'Teknologi & Harapan',
    zone: 'Tech',
    color: '#00D4FF',
    img: 'img/try206.jpg',
    story: 'Kereta cepat berteknologi tinggi yang membawa harapan dengan inovasi.'
  },
  {
    id: 5,
    type: 'utama',
    code: 'TOC141',
    name: 'Dash',
    character: 'TOC141',
    vibe: 'Gaul & Sok Tahu',
    zone: 'Station',
    color: '#39FF14',
    img: 'img/toc141.jpg',
    story: 'Dash adalah lokomotif yang gaul tapi sering sok tahu. Karismanya menarik namun terkadang naif.'
  },
  {
    id: 6,
    type: 'utama',
    code: 'TOC404',
    name: 'Semut Besi',
    character: 'TOC404',
    vibe: 'Magnetik',
    zone: 'Station',
    color: '#FF6347',
    img: 'img/toc404.jpg',
    story: 'Lokomotif dengan aura magnetik yang kuat, menarik perhatian di mana pun berada.'
  },
  // ... (tambah sisanya sesuai database sebelumnya)
  
  // ===== BONUS CHARACTERS (12+) =====
  {
    id: 101,
    type: 'bonus',
    code: 'TOC110',
    name: 'Glaceria',
    character: 'Glaceria',
    vibe: 'Dingin & Baik',
    zone: 'Snow Mountain',
    color: '#4A9ECC',
    img: 'img/glaceria.jpg',
    story: 'Glaceria adalah lokomotif dengan sifat dingin tapi tetap baik dan ramah. Dia memiliki kisah kelam—hidupnya selalu terkena sial. Dia mengkoleksi emblem keberuntungan untuk melemahkan kutukkannya.',
    status: 'Visitor'
  },
  {
    id: 102,
    type: 'bonus',
    code: 'TOC122',
    name: 'Roona Lokorina',
    character: 'Roona Lokorina',
    vibe: 'Gaul & Genit',
    zone: 'Station',
    color: '#8B3A3A',
    img: 'img/roona.jpg',
    story: 'Roona sangat friendly, banyak bercanda, gaul, dan agak genit. Dia suka musik energik terutama rock dan mahir main gitar listrik. Selalu bersama WifiLee.',
    status: 'Visitor'
  },
  {
    id: 103,
    type: 'bonus',
    code: 'TOC133',
    name: 'WifiLee Dan',
    character: 'WifiLee Dan',
    vibe: 'Protektif & Lincah',
    zone: 'Tech Network',
    color: '#F5F5F5',
    img: 'img/wifilee.jpg',
    story: 'WifiLee adalah teman setia Roona yang protektif. Kekuatannya adalah signal WiFi yang kuat untuk membuka file besar dengan cepat dan mengubah signal menjadi virus.',
    status: 'Visitor'
  },
  {
    id: 104,
    type: 'bonus',
    code: 'TOC041',
    name: 'Rosa Railwest',
    character: 'Rosa Railwest',
    vibe: 'Petualang',
    zone: 'Desert',
    color: '#D4A574',
    img: 'img/rosa.jpg',
    story: 'Rosa adalah "Wandering Trader" yang suka berkelana menjual barang-barang. Dia petualang sejati dengan jiwa yang penuh keingintahuan.',
    status: 'Visitor'
  },
  {
    id: 105,
    type: 'bonus',
    code: 'TOC151',
    name: 'Daslenia',
    character: 'Daslenia',
    vibe: 'Cantik & Paranoid',
    zone: 'Abandoned Rails',
    color: '#C0C0C0',
    img: 'img/daslenia.jpg',
    story: 'Daslenia sangat cantik dan lucu namun bernarkot paraparanoid. Dia biasanya mengeksplorasi jalur terbengkalai dengan perlengkapan GPS canggih.',
    status: 'Visitor'
  },
  {
    id: 106,
    type: 'bonus',
    code: 'TOC014',
    name: 'Hekrona Mouseria',
    character: 'Hekrona Mouseria',
    vibe: 'Imut & Misterius',
    zone: 'Dark Places',
    color: '#1E3A5B',
    img: 'img/hekrona.jpg',
    story: 'Hekrona sangat mirip tikus dengan mata imut. Dia pendiam dan misterius. Kekuatannya adalah bisa menyusutkan diri menjadi sangat kecil.',
    status: 'Visitor'
  },
  {
    id: 107,
    type: 'bonus',
    code: 'TOC1000',
    name: 'Velmoura',
    character: 'Velmoura',
    vibe: 'Misterius & Mistis',
    zone: 'Supernatural',
    color: '#CC3333',
    img: 'img/velmoura.jpg',
    story: 'Velmoura adalah makhluk misterius dan mistis dengan penampilan hantu. Dia jarang muncul—kemunculannya adalah petanda bahaya. Suka momen romantis namun percaya diri.',
    status: 'Visitor'
  },
  {
    id: 108,
    type: 'bonus',
    code: 'TOC962',
    name: 'Janny Vers',
    character: 'Janny Vers',
    vibe: 'Manipulatif & Licik',
    zone: 'Deception',
    color: '#FFB6D9',
    img: 'img/janny.jpg',
    story: 'Janny adalah lokomotif tercantik namun antagonis yang licik dan manipulatif. Dia ahli bersikap baik untuk mencari kelemahan. Kekuatannya adalah manipulasi emosional dan menyamar.',
    status: 'Visitor',
    antagonist: true
  },
  {
    id: 109,
    type: 'bonus',
    code: 'TOC200',
    name: 'LoveRi',
    character: 'LoveRi',
    vibe: 'Ramah & Lucu',
    zone: 'Industry',
    color: '#DC143C',
    img: 'img/loveri.jpg',
    story: 'LoveRi (Love + Lorry) sangat friendly, ramah, dan baik hati. Dialog lembut dan menggemaskan dengan gaya humoris. Lokomotif yang menggemaskan dari segi interaksi.',
    status: 'Visitor'
  },
  {
    id: 110,
    type: 'bonus',
    code: 'TOC944',
    name: 'Valentena Chroma',
    character: 'Valentena Chroma',
    vibe: 'Pendiam & Trauma',
    zone: 'PT Kanna Base',
    color: '#8B6F8E',
    img: 'img/valentena.jpg',
    story: 'Valentena adalah unggulan PT Kanna untuk tugas-tugas gawat. Pendiam dan paranoid akibat trauma masa lalu. Namun sangat cerdik dan pinter menganalisa.',
    status: 'Visitor'
  },
  {
    id: 111,
    type: 'bonus',
    code: 'ST686',
    name: 'Federa Darkina',
    character: 'Federa Darkina',
    vibe: 'Trauma & Pemberani',
    zone: 'PT Kanna Advanced',
    color: '#4A7C3C',
    img: 'img/federa.jpg',
    story: 'Federa menyimpan trauma mendalam akibat kecelakaan. Dijuluki "kereta maut" tapi terus maju. Klaksonnya adalah permohonan maaf yang tak pernah selesai.',
    status: 'Visitor'
  },
  {
    id: 112,
    type: 'bonus',
    code: 'TOC014',
    name: 'Hekrona',
    character: 'Hekrona',
    vibe: 'Pendiam & Misterius',
    zone: 'Underground',
    color: '#1E3A5F',
    img: 'img/hekrona.jpg',
    story: 'Hekrona adalah lokomotif pendek berbentuk kotak mirip tikus dengan warna biru gelap. Sangat pendiam dan jarang berinteraksi—ekspresi matanya sulit dibaca. Suka keju, lincah, dan menyukai tempat gelap. Ada yang bilang dia menyembunyikan sesuatu. Tidak terlalu emosional namun memiliki pesona tersendiri.',
    status: 'Visitor'
  },

  // ===== KARAKTER BONUS TERBARU (11 Karakter) =====
  {
    id: 113,
    type: 'bonus',
    code: 'TOC101',
    name: 'Crono (TOC101)',
    character: 'Crono',
    vibe: 'Penakut & Ceroboh',
    zone: 'Multi-Dimensi',
    color: '#A9A9A9',
    img: 'img/crono.jpg',
    story: 'Lokomotif kereta aerodinamis abu-abu yang diciptakan oleh organisasi rahasia TOV (Team OF Vorce). Memiliki kekuatan portal/teleportasi untuk berpindah ke dimensi lain dan time travel. Sifatnya penakut dan ceroboh, sering salah koordinat portal atau lupa menutupnya yang bisa sangat berbahaya.',
    status: 'Visitor',
    power: 'Portal/Teleportasi',
    tribe: 'Aerodinamis'
  },
  {
    id: 114,
    type: 'bonus',
    code: 'CTC1',
    name: 'Black (CTC1)',
    character: 'Black',
    vibe: 'Misterius & Antagonis',
    zone: 'Darkness',
    color: '#1A1A1A',
    img: 'img/black.jpg',
    story: 'Lokomotif uap pertama dengan kekuatan ilmu hitam. Memiliki dua kepribadian (jahat dan baik). Topinnya memiliki kemampuan menginfeksi lokomotif menjadi sikopat. Sangat kuat dan bisa membangkitkan Phase H yang membuat semua karakter agresif. Prinsipnya: "Kamu curang, aku balas lebih brutal. Kamu adil, aku terima."',
    status: 'Visitor',
    power: 'Ilmu Hitam & Phase H',
    antagonist: true
  },
  {
    id: 115,
    type: 'bonus',
    code: 'TOC205',
    name: 'Jacker (TOC205)',
    character: 'Jacker',
    vibe: 'Tangguh & Loyal',
    zone: 'Guardian',
    color: '#A9A9A9',
    img: 'img/jacker.jpg',
    story: 'Asisten kedua dari Guardian Spirit (TOC777). Dilengkapi peluncur misil di atas badannya untuk pertahanan strategis. Sangat tangguh, pintar, dan loyal. Bertugas di wilayah-wilayah strategis yang penuh dengan ancaman kecil.',
    status: 'Visitor',
    power: 'Peluncur Misil & Pertahanan',
    tribe: 'Defender'
  },
  {
    id: 116,
    type: 'bonus',
    code: 'TOC198',
    name: 'Fathur Train (TOC198)',
    character: 'Fathur Train',
    vibe: 'Pemberani & Pelupa',
    zone: 'Desert',
    color: '#CD853F',
    img: 'img/fathur.jpg',
    story: 'Sheriff lokomotif berwarna coklat muda yang bertugas di wilayah gurun. Menggunakan revolver sebagai senjata dan terkenal dengan peluit merdu. Sifatnya pemberani, pelupa, namun cerdas. Menjaga wilayah gurun dari bandit dan ancaman.',
    status: 'Visitor',
    power: 'Marksmanship & Peluit',
    tribe: 'Western'
  },
  {
    id: 117,
    type: 'bonus',
    code: 'ST100',
    name: 'Aurina (ST100)',
    character: 'Aurina',
    vibe: 'Pemalu & Tenang',
    zone: 'Tech',
    color: '#FFB6D9',
    img: 'img/aurina.jpg',
    story: 'Kereta cepat maglev berteknologi tinggi berwarna pink buatan PT Kanna. Kecepatan hingga 900 KM/jam tanpa hambatan. Berkomunikasi lewat monitor dengan emoji. Sifatnya pemalu, lembut, dan menghindari konflik. Hidungnya panjang dan runcing. Tidak punya kekuatan tapi punya kemampuan luar biasa.',
    status: 'Visitor',
    power: 'Kecepatan Maglev 900 KM/jam',
    tribe: 'High-Tech'
  },
  {
    id: 118,
    type: 'bonus',
    code: 'TOC209',
    name: 'Wenda Jasmine (TOC209)',
    character: 'Wenda Jasmine',
    vibe: 'Imut & Ceria',
    zone: 'Station',
    color: '#FFFFFF',
    img: 'img/wenda.jpg',
    story: 'Lokomotif imut berbentuk kotak dengan warna putih bersih. Mirip anak kucing dengan telinga segitiga dan logo kaki kucing di tengah tubuh. Sifatnya baik, ramah, ceria, dan cemburu. Sering kabur dari CC205 Naufal karena sering dicubit. Dikategorikan sebagai lokomotif lorry tanpa kemampuan khusus kecuali penampilan yang menggemaskan.',
    status: 'Visitor',
    vibe_alt: 'Lokomotif Kucing',
    tribe: 'Compact'
  },
  {
    id: 119,
    type: 'bonus',
    code: 'TOC333',
    name: 'FloraVine (TOC333)',
    character: 'FloraVine',
    vibe: 'Ceria & Gaul',
    zone: 'Forest',
    color: '#32CD32',
    img: 'img/floravine.jpg',
    story: 'Lokomotif perempuan bernuansa alam berbentuk kotak berwarna hijau cerah dengan tanaman vine menempel di atasnya. Memiliki kemampuan menumbuhkan tanaman dan menyuburkan tanah. Sifatnya gaul, sopan, dan suka bercanda. Biasanya berada di hutan Nesyabella. Bisa bikin hutan dalam 5 menit. Selalu bersama kakaknya VineFlower.',
    status: 'Visitor',
    power: 'Menumbuhkan Tanaman & Menyuburkan Tanah',
    tribe: 'Nature'
  },
  {
    id: 120,
    type: 'bonus',
    code: 'TOC565',
    name: 'VitraLined (TOC565)',
    character: 'VitraLined',
    vibe: 'Adaptif & Unik',
    zone: 'Radiation Zone',
    color: '#FF6B9D',
    img: 'img/vitrlined.jpg',
    story: 'Lokomotif perempuan unik berbentuk kotak dengan aksen warna Pantone Stilwater dan hitam. Menggunakan kekuatan Radiasi Kristal Khusus. Sifatnya tergantung pancaran radiasinya: radiasi lemah = bodoh/penakut, radiasi kuat = super pintar/bijak. Ditemukan di sebuah goa dan diupgrade. Bisa menjadi siapa saja tergantung sinarinya.',
    status: 'Visitor',
    power: 'Radiasi Kristal Adaptif',
    tribe: 'Crystal'
  },
  {
    id: 121,
    type: 'bonus',
    code: 'TOC223',
    name: 'Baby Ti (TOC223)',
    character: 'Baby Ti',
    vibe: 'Pendukung',
    zone: 'Station',
    color: '#FFB6D9',
    img: 'img/babyti.jpg',
    story: 'Lokomotif perempuan pendukung yang jarang ditampilkan. Berbentuk kotak dengan tonjolan kotak di kabin, warna pink dengan aksen hitam pada bogie. Sifatnya tergantung situasi. Sekali ditampilkan hanya berinteraksi kecil seperti mengobrol atau hanya lewat saja. Karakter latar yang jarang muncul tapi kadang penting.',
    status: 'Visitor',
    tribe: 'Supporting'
  },
  {
    id: 122,
    type: 'bonus',
    code: 'BR221',
    name: 'LokoRed (BR221)',
    character: 'LokoRed',
    vibe: 'Senior & Bijak',
    zone: 'Military',
    color: '#FF0000',
    img: 'img/lokored.jpg',
    story: 'Lokomotif laki-laki senior berwarna merah dengan aksen hitam pada bogie, berbentuk kotak dengan tonjolan di kabin. Memiliki alis yang bisa dinaik-turunkan (hiasan doang). Sifatnya ramah, baik, bijaksana, tapi galak saat perlu. Jarang hadir tapi kalau muncul berarti ada yang gawat. Bertugas militer, evakuasi, dan penyelamatan.',
    status: 'Visitor',
    power: 'Military & Strategic Defense',
    tribe: 'Military'
  },
  {
    id: 123,
    type: 'bonus',
    code: 'TOC323',
    name: 'VineFlower/Viktoria (TOC323)',
    character: 'VineFlower',
    vibe: 'Keras & Peduli',
    zone: 'Forest',
    color: '#228B22',
    img: 'img/vineflower.jpg',
    story: 'Lokomotif perempuan "lived train" yang jarang muncul, kakak dari FloraVine. Berbentuk kotak berwarna hijau dengan aksen hitam pada bogie, memiliki rambat vine di atas kabinnya. Sifatnya keras kepala, jujur, peduli, dan ramah. Ahli dalam tanam-menanam dan melestarikan alam. Dialog cenderung lebih akrab dan humoris. Tumbuh dari akar yang baik.',
    status: 'Visitor',
    power: 'Preservation & Nature Expertise',
    tribe: 'Nature Guardian'
  }
];

// ZONES DATABASE
const zonesDatabase = [
  { id: 1, name: 'Clinic', emoji: '🏥', description: 'Tempat penyembuhan dan perawatan', color: '#FFB6D9' },
  { id: 2, name: 'Guardian', emoji: '🛡️', description: 'Basis pertahanan Nesyabella', color: '#FFD60A' },
  { id: 3, name: 'Station', emoji: '🚄', description: 'Stasiun utama transportasi', color: '#FF69B4' },
  { id: 4, name: 'Tech', emoji: '⚙️', description: 'Pusat teknologi dan inovasi', color: '#00D4FF' },
  { id: 5, name: 'Forest', emoji: '🌿', description: 'Hutan yang penuh kehidupan', color: '#39FF14' },
  { id: 6, name: 'Fire', emoji: '🔥', description: 'Zona dengan energi tinggi', color: '#FF4500' },
  { id: 7, name: 'Electric', emoji: '⚡', description: 'Pusat energi listrik', color: '#FFFD38' },
  { id: 8, name: 'Joy', emoji: '😂', description: 'Zona kegembiraan dan keceriaan', color: '#FFD60A' },
  { id: 9, name: 'Port', emoji: '⛵', description: 'Pelabuhan dan kota pantai', color: '#2196F3' },
  { id: 10, name: 'Desert', emoji: '🏜️', description: 'Gurun yang luas dan penuh misteri', color: '#D4A574' },
  { id: 11, name: 'Snow Mountain', emoji: '❄️', description: 'Gunung es yang bersalju', color: '#4A9ECC' },
  { id: 12, name: 'Underground', emoji: '🕳️', description: 'Dunia bawah tanah misterius', color: '#8B6F47' },
  { id: 13, name: 'Sky', emoji: '☁️', description: 'Realm udara tinggi', color: '#87CEEB' },
  { id: 14, name: 'Ancient', emoji: '👴', description: 'Zona warisan kuno', color: '#CCCCCC' },
  { id: 15, name: 'Darkness', emoji: '🌑', description: 'Zona ilmu gelap', color: '#1A1A1A' },
  { id: 16, name: 'LuminaBella', emoji: '✨', description: 'Dunia cahaya - sisi terang dan harapan', color: '#FFD700' },
  { id: 17, name: 'UmbraBella', emoji: '🌑', description: 'Dunia bayangan - sisi gelap dan misteri', color: '#2C2C2C' }
];

// ORGANIZATIONS DATABASE
const organizationsDatabase = [
  {
    id: 1,
    name: 'PT Kanna',
    type: 'Perusahaan Teknologi',
    description: 'Manufaktur terkemuka di Nesyabella yang menciptakan lokomotif berteknologi tinggi',
    members: ['ST100', 'TOC944', 'ST686'],
    focus: 'Teknologi Maju'
  },
  {
    id: 2,
    name: 'TOV (Team OF Vorce)',
    type: 'Organisasi Rahasia',
    description: 'Organisasi keamanan rahasia pengatur keamanan di Nesyabella',
    members: ['TOC101'],
    focus: 'Keamanan & Intelijen'
  },
  {
    id: 3,
    name: 'Guardian Spirit Alliance',
    type: 'Aliansi Penjaga',
    description: 'Kelompok heroik yang melindungi Nesyabella dari ancaman',
    members: ['TOC777', 'TOC205'],
    focus: 'Heroik & Protektif'
  }
];

// Fungsi helper untuk mendapatkan karakter berdasarkan filter
function getCharactersByType(type) {
  return allCharactersDatabase.filter(char => char.type === type);
}

function getCharactersByZone(zone) {
  return allCharactersDatabase.filter(char => char.zone === zone);
}

function getCharactersByVibe(vibe) {
  return allCharactersDatabase.filter(char => char.vibe.includes(vibe));
}

function getCharacterById(id) {
  return allCharactersDatabase.find(char => char.id === id);
}

function getAllZones() {
  return [...new Set(allCharactersDatabase.map(char => char.zone))];
}

function getAllVibes() {
  return [...new Set(allCharactersDatabase.flatMap(char => char.vibe.split(' & ')))];
}

console.log(`🌀 StickMazz Wiki Database Loaded - ${allCharactersDatabase.length} Characters`);
