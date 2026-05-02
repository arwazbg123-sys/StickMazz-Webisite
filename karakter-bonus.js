const bonusCharacters = [
  {
    id: 'ST-001',
    name: 'Naufal Mrsov',
    code: 'STMAN-BLUE-01',
    status: 'active',
    category: 'Tim Operasional VNO',
    vibe: 'Penyelamat & Taktis',
    zone: 'Crimson Nexus',
    color: '#4A9EFF',
    race: 'Stickman Biru',
    role: 'Inovator Strategi',
    image: '',
    story: 'Naufal Mrsov adalah Stickman Biru yang berperan sebagai penyelamat dan taktis dalam Tim Operasional VNO. Dia memakai Kacamata Alris dan Micro Defender Plasma sebagai peralatan utama. Posisinya sebagai inovator strategi sekaligus karakter cerminan kreator. Dia adalah kunci kesuksesan misi VNO.'
  },
  {
    id: 'ST-002',
    name: 'Leli',
    code: 'STMAN-PINK-02',
    status: 'active',
    category: 'Tim Operasional VNO',
    vibe: 'Penyusup & Senyap',
    zone: 'Crimson Nexus',
    color: '#FF4D9E',
    race: 'Stickman Pink',
    role: 'Agen Infiltrasi',
    image: '',
    story: 'Leli adalah Stickman Pink yang berfungsi sebagai agen penyusup dan penyerang diam-diam. Keahliannya dalam kamuflase dan dagger stealth membuatnya sangat efektif dalam misi infiltrasi. Dia bertanggung jawab atas intelijen dan operasi rahasia VNO.'
  },
  {
    id: 'ST-003',
    name: 'Gearsmith',
    code: 'STMAN-GRAY-03',
    status: 'active',
    category: 'Tim Operasional VNO',
    vibe: 'Mekanik & Inovator',
    zone: 'Crimson Nexus',
    color: '#A8A8A8',
    race: 'Stickman Abu-Abu',
    role: 'Teknisi & Mekanik',
    image: '',
    story: 'Gearsmith adalah Stickman Abu-Abu yang berprofesi sebagai mekanik dan teknisi tim. Dia mengoperasikan Drone Gear untuk eksplorasi dan perbaikan medan. Keahliannya dalam teknologi memastikan semua peralatan VNO selalu dalam kondisi prima.'
  },
  {
    id: 'ST-004',
    name: 'Flame Raider',
    code: 'STMAN-RED-04',
    status: 'active',
    category: 'Tim Operasional VNO',
    vibe: 'Penyerang & Panas',
    zone: 'Crimson Nexus',
    color: '#FF5733',
    race: 'Stickman Merah',
    role: 'Penyerang Garis Depan',
    image: '',
    story: 'Flame Raider adalah Stickman Merah yang menjadi penyerang garis depan dalam VNO. Dia memiliki Inferno Blast dan Cambuk Api sebagai senjata utama. Dengan kekuatan api yang luar biasa, dia selalu siap menghadapi ancaman frontline.'
  },
  {
    id: 'ST-005',
    name: 'Voidwalker',
    code: 'STMAN-PURPLE-05',
    status: 'active',
    category: 'Tim Operasional VNO',
    vibe: 'Penjaga Dimensi',
    zone: 'Crimson Nexus',
    color: '#9933FF',
    race: 'Stickman Ungu',
    role: 'Penjaga Dimensi Void',
    image: '',
    story: 'Voidwalker adalah Stickman Ungu dengan kemampuan supernatural untuk membuka Portal Void dan mengaktifkan Aura Void. Dia jarang muncul dan hanya hadir saat krisis supernatural memerlukan intervensi dimensi. Sosok misterius dan sangat kuat.'
  },
  {
    id: 'ST-006',
    name: 'SE Jasmin',
    code: 'STMAN-WHITE-06',
    status: 'active',
    category: 'Penasihat & Pelatih',
    vibe: 'Mentor & Pencerahan',
    zone: 'Crimson Nexus',
    color: '#FFFFFF',
    race: 'Stickman Putih',
    role: 'Mentor Tim Dokter',
    image: '',
    story: 'SE Jasmin adalah Stickman Putih yang berfungsi sebagai mentor dan pelatih tim dokter. Dia memiliki Aura Pencerahan yang dapat meningkatkan fokus dan menyembuhkan luka tim. Kehadirannya sangat berharga bagi kesehatan dan moral VNO.'
  },
  {
    id: 'ST-007',
    name: 'Rayna',
    code: 'STMAN-YELLOW-07',
    status: 'active',
    category: 'Anggota Support',
    vibe: 'Pelacak & Taktis',
    zone: 'Crimson Nexus',
    color: '#FFD700',
    race: 'Stickman Kuning',
    role: 'Pelacak & Komunikasi',
    image: '',
    story: 'Rayna adalah Stickman Kuning yang bertugas sebagai pelacak taktis dan pusat komunikasi VNO. Dia menganalisis situasi secara real-time menggunakan perangkat canggih. Informasi yang dia kumpulkan sangat krusial untuk kesuksesan setiap misi.'
  },
  {
    id: 'ST-008',
    name: 'Komandan Phatner',
    code: 'STMAN-BLACK-LEADER',
    status: 'active',
    category: 'Pemimpin Utama',
    vibe: 'Tegas & Karismatik',
    zone: 'Crimson Nexus',
    color: '#1A1A1A',
    race: 'Stickman Hitam',
    role: 'Komandan Utama VNO',
    image: '',
    story: 'Komandan Phatner adalah Stickman Hitam dan pemimpin strategis VNO. Dia memegang Tongkat Komando Super yang bisa memberi boost energi ke seluruh tim saat kondisi darurat. Sifatnya tegas, karismatik, dan fokus pada misi demi keselamatan dunia.'
  },
  {
    id: 'SB-001',
    name: 'Vinewood Flora',
    code: 'STMAN-GREEN-BONUS-01',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Pemalu & Jahil',
    zone: 'Hutan Hijau Nesyabella',
    color: '#7FCC7F',
    race: 'Stickman Hijau Muda',
    role: 'Pejuang Hutan',
    image: '',
    story: 'Vinewood Flora adalah Stickman hijau muda elegan dengan rambut floral panjang dan satu mata tertutup poni. Dia pemalu ke orang baik tapi jahil dan gahar ke musuh. Kekuatannya: Petal Shuriken, Duri Trap Mode, Penyaring Udara, dan Perisai Bunga. Gaya bertarungnya strategis penuh jebakan.'
  },
  {
    id: 'SB-002',
    name: 'Floria Fraona',
    code: 'STWOMAN-GREEN-BONUS-02',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Centil & Intuitif',
    zone: 'Zona Hijau Nesyabella',
    color: '#00FF00',
    race: 'Stickwoman Hijau Neon',
    role: 'Penjinnak Fauna',
    image: '',
    story: 'Floria Fraona adalah Stickwoman hijau neon dengan rambut hitam panjang berbunga merah. Putri fauna centil yang bisa menjinakkan hewan liar lewat intuisi emosional. Dia tidak punya senjata tapi sangat taktis, berkomunikasi lewat gerak tubuh dan tatapan. Dicintai kreator. 💚🐾'
  },
  {
    id: 'SB-003',
    name: 'Velluna Nisuga Maru',
    code: 'STWOMAN-LIGHTBLUE-BONUS-03',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Genit & Ceria',
    zone: 'PT Navi MrSov',
    color: '#87CEEB',
    race: 'Stickwoman Biru Muda Cerah',
    role: 'Penari & Penyanyi',
    image: '',
    story: 'Velluna Nisuga Maru adalah Stickwoman biru muda cerah dengan rambut biru neon dan pita biru. Genit, ceria, dan suka menyanyi. Dia bisa menghindari serangan musuh dengan cepat dan tiba-tiba muncul di belakang. Lagu khasnya adalah ヴェルーナ・ニ・スガマル (J-Pop dengan lirik gabungan Jepang-Indonesia).'
  },
  {
    id: 'SB-004',
    name: 'Kairo Sugamaro',
    code: 'STMAN-BLUE-BONUS-04',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Pendiam & Protektif',
    zone: 'PT Navi MrSov',
    color: '#4169E1',
    race: 'Stickman Biru Agak Tua',
    role: 'Pelindung',
    image: '',
    story: 'Kairo Sugamaro adalah Stickman biru agak tua dengan rambut cool dan sifat pendiam. Dia jarang ngobrol kecuali dengan Velluna. Suka memantau dari jendela dan main HP. Menjadi pelindung setia Velluna dan orang-orang terdekat. Lagu khasnya: 学校の沈黙 (Sekolah yang Senyap).'
  },
  {
    id: 'SB-005',
    name: 'Luna Maira',
    code: 'STWOMAN-PINK-BONUS-05',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Kalem & Centil',
    zone: 'PT Navi MrSov',
    color: '#FF69B4',
    race: 'Stickwoman Pink',
    role: 'Pelajar Berbakat',
    image: '',
    story: 'Luna Maira adalah Stickwoman pink dengan rambut hitam pendek dan pita oranye. Sifatnya kalem, centil, tenang, dan suka vibes romantis. Dia sekolah di PT Navi MrSov dengan nilai bagus dan sering ngobrol di kantin. Sosok yang menyenangkan dan relatable.'
  },
  {
    id: 'SB-006',
    name: 'Una Viluna Amruna',
    code: 'STWOMAN-PINK-CHILD-06',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Pendiam & Imut',
    zone: 'Sekolah Dasar Nesyabella',
    color: '#FFB6D9',
    race: 'Stickwoman Pink Keorenan',
    role: 'Pelajar Muda',
    image: '',
    story: 'Una Viluna Amruna adalah Stickwoman pink keorenan berusia sekitar 7 tahun. Sangat pendiam dengan gaya komunikasi hanya melalui tatapan dan kedipan mata. Selalu bersama Luna dan dijagain karena polos serta tidak takut pada siapa pun. Karakter yang menggemaskan.'
  },
  {
    id: 'SB-007',
    name: 'Sikmisa Amrisa',
    code: 'STWOMAN-RED-BONUS-07',
    status: 'active',
    category: 'Karakter Bonus - Kategori Stickman',
    vibe: 'Cantik & Berkuat',
    zone: 'Nesyabella',
    color: '#FF6B6B',
    race: 'Stickwoman Merah Keputihan',
    role: 'Pemilik Cincin Sakti',
    image: '',
    story: 'Sikmisa Amrisa adalah Stickwoman merah keputihan yang sangat cantik dengan rambut panjang dan 3 cincin sakti di tangan kanan: Cincin Oren (kekuatan api & keberanian), Cincin Hijau Neon (kekuatan alam), Cincin Biru Neon (kekuatan langit & kesejukan). Trimagic user yang powerful.'
  },
  {
    id: 'SB-008',
    name: 'Akhni Fii – Ratu Kucing',
    code: 'CAT-YELLOW-BONUS-08',
    status: 'active',
    category: 'Karakter Bonus - Kategori Unik',
    vibe: 'Misterius & Magis',
    zone: 'Piramida Gurun Kucing',
    color: '#FFD700',
    race: 'Karakter Kucing Perempuan',
    role: 'Ratu Kucing',
    image: '',
    story: 'Akhni Fii adalah karakter kucing perempuan bertubuh kuning dengan rambut biru mirip helm Yunani dan ekor belang kuning-biru. Punya tato angka 8 di kedua tangan dan tongkat sakti berbentuk bebek. Tinggal di piramida gurun penuh kucing langka. Figur mistis dan penuh pesona.'
  },
];

const filterState = {
  search: '',
  status: 'all'
};


function buildCharacterCards() {
  const grid = document.getElementById('bonusGrid');
  const filtered = bonusCharacters.filter(char => {
    const matchesSearch = [char.name, char.code, char.vibe, char.zone, char.story, char.race, char.category]
      .join(' ')
      .toLowerCase()
      .includes(filterState.search.toLowerCase());
    const matchesStatus = filterState.status === 'all' || char.status === filterState.status;
    return matchesSearch && matchesStatus;
  });

  grid.innerHTML = filtered.map(char => `
    <article class="bonus-card" style="border-color: ${char.color};" onclick="openCharacterModal('${char.id}')">
      <div class="bonus-card-header" style="background: linear-gradient(135deg, ${char.color}30, ${char.color}10);">
        <div class="char-name" style="color: ${char.color};">${char.name}</div>
        <span class="char-status status-${char.status}">${char.status.toUpperCase()}</span>
      </div>
      <div class="char-info">
        <div class="char-gender">${char.code}</div>
        <div class="char-trait">${char.race}</div>
        <div class="char-trait" style="font-size: 0.85rem; color: rgba(255,255,255,0.68);">${char.category}</div>
        <div class="char-card-note">📍 ${char.zone}</div>
      </div>
    </article>
  `).join('');

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">Tidak ada karakter yang cocok. Coba filter lain atau reset pencarian.</div>';
  }
}

function setSearch(value) {
  filterState.search = value;
  buildCharacterCards();
}

function setStatusFilter(status) {
  filterState.status = status;
  document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip.dataset.status === status));
  buildCharacterCards();
}

function openCharacterModal(id) {
  const character = bonusCharacters.find(char => char.id === id);
  if (!character) return;

  const modal = document.getElementById('detailModal');
  document.getElementById('modalCharName').textContent = `${character.name} — ${character.code}`;
  document.getElementById('modalCharRace').textContent = character.race;
  document.getElementById('modalCharRole').textContent = character.role;
  document.getElementById('modalCharCategory').textContent = character.category;
  document.getElementById('modalCharZone').textContent = character.zone;
  document.getElementById('modalCharVibe').textContent = character.vibe;
  document.getElementById('modalCharStory').textContent = character.story;
  document.getElementById('modalCharImage').src = character.image;
  document.getElementById('modalCharImage').alt = character.name;
  document.getElementById('modalCharBadge').textContent = character.status.toUpperCase();
  document.getElementById('modalCharBadge').className = `char-status status-${character.status}`;

  modal.classList.add('show');
}

function closeCharacterModal() {
  document.getElementById('detailModal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
  setStatusFilter('all');
  buildCharacterCards();
});
