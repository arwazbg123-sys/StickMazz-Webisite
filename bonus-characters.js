// ========================================
// 🎭 STICKMAZZ BONUS CHARACTERS DATABASE
// VISITOR & KARAKTER TAMBAHAN NESYABELLA
// ========================================

const bonusCharactersDatabase = [
  {
    id: 101,
    name: 'Glaceria',
    code: 'TOC110',
    color: '#4A9ECC',
    vibe: 'Dingin & Baik',
    zone: 'Snow Mountain',
    status: 'active',
    image: 'Glaceria Foto.jpg',
    story: `Glaceria adalah lokomotif perempuan berwarna biru (warna aslinya silver) yang tinggal di gunung es dengan rel beku. Dia memiliki sifat dingin tapi tetap baik dan ramah. Glaceria memiliki kisah kelam—hidupnya selalu terkena sial dan situasi berbahaya. Untuk melemahkan kutukan tersebut, dia suka mengkoleksi emblem keberuntungan, meskipun belum menemukan satu pun yang cocok. Dia menggunakan teknologi tenaga suhu dingin dengan sensor yang bisa mengubah suhu dingin menjadi tenaga penggerak. Seorang pendiam yang kuat namun menyimpan kedukaan.`
  },
  {
    id: 102,
    name: 'Roona Lokorina',
    code: 'TOC122',
    color: '#8B3A3A',
    vibe: 'Gaul & Genit',
    zone: 'Station',
    status: 'inactive',
    image: 'Roona Lokorinas Rise in rails 3.jpg',
    story: `Roona adalah lokomotif perempuan berwarna merah marun dengan telinga seperti kucing dan rambut merah. Dia sangat friendly, banyak bercanda, gaul, dan agak genit. Roona suka banget musik energik terutama rock, dan mahir main gitar listrik. Dia selalu bersama TOC133 Wifilee—mereka sangat aktif, lincah, dan banyak tingkah. Gaya bahasanya catchy dan humoris sebagai tukang bercanda. Kelemahan Roona: dia gampang diculik, dan saat diculik dia langsung lemes membuat penculiknya tambah gemes.`
  },
  {
    id: 103,
    name: 'WifiLee Dan',
    code: 'TOC133',
    color: '#F5F5F5',
    vibe: 'Protektif & Lincah',
    zone: 'Tech Network',
    status: 'active',
    image: 'Wifilee the walk Connections (2).jpg',
    story: `WifiLee adalah lokomotif laki-laki berwarna putih dengan antena dan cerobong asap tinggi bergaris. Dia adalah teman setia Roona yang selalu lincah dan protektif. Wifilee tahu bahwa Roona terlalu ramah dan kurang hati-hati, makanya dia lebih protektif meski sama-sama ramah. Kekuatannya adalah singal WiFi yang kuat untuk membuka file besar dengan cepat dan bisa mengubah signal WiFi menjadi virus (digital atau kenyataan). Dia bisa mengendalikan teknologi lewat WiFi (meski masih memakai kabel). Suka musik catchy, rhythmic, hyper, dan ukulele modern.`
  },
  {
    id: 104,
    name: 'Rosa Railwest',
    code: 'TOC041',
    color: '#D4A574',
    vibe: 'Pendiam & Petualang',
    zone: 'Desert',
    status: 'active',
    image: 'Rosa GunWest With The Sheriff.jpg',
    story: `Rosa adalah lokomotif perempuan berwarna tan coklat muda yang berkategori lorry (kecil). Dia memiliki sifat baik, ramah, jiwa petualang, dan sabar. Rosa adalah "Wandering Trader"—suka berkelana menjual barang-barang (kadang barang sampah, kadang barang langka) di wilayah gurun penuh kaktus. Dia memakai topi koboi berbunga dan membawa pentungan sebagai senjata. Sangat akrab dengan koboi dan sheriff lainnya, tapi cenderung pendiam. Dia adalah petualang sejati yang selalu mencari kesempatan baru.`
  },
  {
    id: 105,
    name: 'Daslenia',
    code: 'TOC151',
    color: '#474545',
    vibe: 'Cantik & Paranoid',
    zone: 'Abandoned Rails',
    status: 'missing',
    image: 'Daslenia Foto.jpg',
    story: `Daslenia adalah lokomotif aerodinamis perempuan mirip Dash tapi lebih kecil, berwarna stainless dengan aksen garis hijau neon. Dia sangat cantik dan lucu—banyak yang menyukainya, tapi dia tidak menanggapinya. Masih muda, biasanya bertugas mengeksplorasi jalur terbengkalai dengan perangkat GPS dan serangan cahaya super terang. Sifatnya baik, ramah, pendiam, humoris, tapi sering menjadi pengangguran. Sedikit paranoid saat mengeksplorasi (khawatir dengan makhluk, tantangan alam, atau kerusakan alat). Dia penyuka explorasi alam sejati.`
  },
  {
    id: 106,
    name: 'Hekrona Mouseria',
    code: 'TOC014',
    color: '#1E3A5B',
    vibe: 'Imut & Misterius',
    zone: 'Dark Places',
    status: 'active',
    image: 'Cutes Hekrona In Coples 2.jpg',
    story: `Hekrona adalah lokomotif perempuan pendek, kotak, dengan mata lucu dan warna biru gelap yang sangat mirip tikus. Dia hanya punya 2 ban tumpangan dan 4 ban total. Hekrona sangat pendiam, jarang berinteraksi, dan tidak mudah marah/sedih—ekspresinya biasa saja. Dia adalah karakter lucu yang suka tempat gelap, suka keju, dan lincah. Ada anggapan dia menyembunyikan sesuatu. Kekuatan spesialnya: bisa menyusutkan diri menjadi sangat kecil. Misterius namun menggemaskan.`
  },
  {
    id: 107,
    name: 'Velmoura',
    code: 'TOC1000',
    color: '#CC3333',
    vibe: 'Misterius & Mistis',
    zone: 'Supernatural',
    status: 'active',
    image: 'Mistic Bloodyness Velmouraas.jpg',
    story: `Velmoura adalah lokomotif misterius berwarna merah yang sedikit transparan dengan aksen buram. Dia memakai cincin malaikat di kepala dan seluruh tubuhnya memiliki aksen buram dengan tentakel di bogie (melayang saat bergerak). Dia jarang muncul hanya kepada kelompok/individu tertentu—kemunculannya adalah petanda bahaya. Bersifat misterius, mistis, sedikit humoris, dan supernatural. Suka momen romantis namun percaya diri bisa menakut-nakuti. Paradoks: saat mencoba nakutin antagonis, dia sendiri KO duluan!`
  },
  {
    id: 108,
    name: 'Janny Vers',
    code: 'TOC962',
    color: '#bd447e',
    vibe: 'Nakal & Licik',
    zone: 'Deception',
    status: 'suspended',
    image: 'Janny Vers The Beautiful Witchs (2).jpg',
    story: `Janny Vers adalah lokomotif tercantik berwarna pink muda dengan pita kuning, telinga kelinci, dan bogie hitam. Dia adalah antagonis yang licik, nakal, dan pintar manipulasi dengan gaya catchy dan humoris. Janny ahli bersikap baik untuk mencari kelemahan lawan, sangat agresif secara mental (bukan fisik). Mampu mengetahui sifat, ketakutan, dan kelemahan lawan. Bisa menyamar atau berubah bentuk seperti lawan—sangat sulit dibedakan. Ahli meracik ramuan mematikan/penyembuh. Kekuatannya: trik psikologis dan manipulasi emosional (terutama cinta), plus "Love Variant" phase terkuat. Mode bruteforce: sangat lincah, ahli senjata api laras panjang (AK47), dan ramuan Killer Potion.`
  },
  {
    id: 109,
    name: 'LoveRi',
    code: 'TOC200',
    color: '#DC143C',
    vibe: 'Ramah & Lucu',
    zone: 'Industry',
    status: 'active',
    image: 'Loveri on Somebody.jpg',
    story: `LoveRi (Love + Ri = Cinta Lorry) adalah lokomotif kategori lorry perempuan berwarna merah penuh dengan bogie abu-abu spesial. Detail komponen bogienya sangat detail, realistis, dan keren dibandingkan lokomotif lain. Berperan normal—mengangkut bahan industri kecil. Keistimewaan LoveRi: sangat friendly, ramah, dan baik hati. Dialog lembut dan menggemaskan dengan gaya humoris. Selalu tenang dan menciptakan suasana nyaman. Lokomotif yang menggemaskan dari segi interaksi dan kepribadian.`
  },
  {
    id: 110,
    name: 'Valentena Chroma',
    code: 'TOC944',
    color: '#551182',
    vibe: 'Pendiam & Trauma',
    zone: 'PT Kanna Base',
    status: 'active',
    image: 'Valentenas Chroma in station.jpg',
    story: `Valentena adalah lokomotif perempuan bertelinga beruang kecil, warna tubuh lavender dengan aksen garis hijau neon. Dia adalah unggulan PT Kanna untuk tugas-tugas gawat. Biasanya memakai topi pet Kanna. Pendiam, jarang sosialisasi, neurotic (suka nyatir), cukup lucu dengan aura cewek yang asik tapi lembut. Tidak punya kekuatan tambahan tapi pintar analisis. Punya fitur F-AIM dan mesin yang bisa dibuka untuk melihat bagian internal. Punya masa lalu kelam: pernah menjadi istri lokomotif yang kasar, sampai diusir. Trauma itu membuatnya paranoid sama lokomotif laki-laki. (Terinspirasi dari Valentinus Resa).`
  },
  {
    id: 111,
    name: 'Federa Darkina',
    code: 'ST686',
    color: '#4A7C3C',
    vibe: 'Trauma & Pemberani',
    zone: 'PT Kanna Advanced',
    status: 'inactive',
    image: '  ',
    story: `Federa adalah lokomotif cepat perempuan buatan PT Kanna, dirancang sebagai kereta unggulan Nesyabella. Berbodi kotak dengan ujung aerodinamis, warna hijau khas, dilengkapi fitur canggih seperti ADV (Automatic Drain Valve) dan AeroFloat Cowhanger—yang dia minta setelah serangkaian kecelakaan tragis. Dikenal pendiam, pemurung, penakut, dan menyimpan trauma mendalam. Dijuluki "kereta maut" namun terus maju. Klaksonnya bukan untuk menakuti tapi sebagai peringatan eternal dan permohonan maaf yang tak pernah selesai. Simbol luka yang tetap berjalan—suara hati yang tak pernah benar-benar diam.`
  },
  {
    id: 'LOC-012',
    name: 'Zintora Railina',
    code: 'VT170',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Hangat & Profesional',
    zone: 'Metropolitan Nesyabella',
    color: '#7B2CBF',
    race: 'Lokomotif Listrik Ungu',
    role: 'KRL Metropolitan',
    image: 'Slices Of Life Zintora In Metropolitan.jpg',
    story: 'Zintora adalah lokomotif listrik tanpa bensin, wanita full ungu dengan aksen kuning emas. KRL Nesyabella untuk mengangkut penumpang metropolitan. Sangat hangat dan pengertian, sabar, rindu interaksi. Bertugas sendiri di rel khusus - sangat kesepian tidak ada lokomotif lain.'
  },
  {
    id: 'LOC-013',
    name: 'Lapoto Poito',
    code: 'TOC431',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Serius & Fokus',
    zone: 'Jalur Eksperimental',
    color: '#505050',
    race: 'Lokomotif Blank Modifikasi',
    role: 'Penarik Berat',
    image: 'Lapoto Poito In Mud Mountains (2).jpg',
    story: 'Lapoto adalah livedtrain blank yang dimodifikasi, bogie sangat detail dan rumit. Bertenaga angin dengan 8 roda tapi hanya 1 roda pemaju. Kekuatan 125.000 HP tapi kecepatan hanya 40KM/H. Bisa tarik puluhan gerbong eksperimental. Serius, dingin, pendiam tapi ramah.'
  },
  {
    id: 'LOC-014',
    name: 'Sebrina Blankirina',
    code: 'TOC800',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Tangguh & Ceria',
    zone: 'Medan Berat',
    color: '#FFB6D9',
    race: 'Lokomotif Pink Versi Lapoto',
    role: 'Penarik Medan Berat',
    image: 'Sebrina in mud mountainss (2).jpg',
    story: 'Sebrina adalah versi perempuan Lapoto, pink lembut dengan bogie detail kompleks. Kekuatan 135.000 HP lebih kuat dari Lapoto. Seluruh roda adalah roda pegas sekaligus rem. Ditugaskan medan beresiko, zona radiasi. Tangguh, berani, berpikir kritis. Selalu tersenyum walau takut.'
  },
  {
    id: 'LOC-015',
    name: 'Salmonia Trackfish',
    code: 'TOC262',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Tenang & Pemalu',
    zone: 'Jalur Elektrik',
    color: '#FF8866',
    race: 'Lokomotif Salmon',
    role: 'Kereta Cepat',
    image: 'Salmoniaa In atlantic ocean.jpg',
    story: 'Salmonia adalah lokomotif perempuan merah salmon mirip ikan salmon dengan garis ingsang. Bertenaga listrik dengan panel listrik seperti KRL. Punya tongkat panel logis yang naik turun. Double F-AIM pertama. Tenang, pemalu, agak cuek.'
  },
  {
    id: 'LOC-016',
    name: 'Mosa Pelmosa Ammosa',
    code: 'TOC244',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Imut & Ceria',
    zone: 'Jalur Umum',
    color: '#C4A57B',
    race: 'Lokomotif Anak Tan',
    role: 'Lokomotif Anak-Anak',
    image: 'Pelmosa Looking For a Ways (2).jpg',
    story: 'Mosa adalah lokomotif perempuan tan coklat cerah kotak kabin di depan, agak mungil dengan topi. Lokomotif anak-anak walau sudah pakai F-AIM. Imut, lucu, polos. Pakai pita merah cerah. Suka pakai topi dan jalan-jalan sendiri walau berbahaya.'
  },
  {
    id: 'LOC-017',
    name: 'Angline Bineroh',
    code: 'VT130',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Elegan & Sopan',
    zone: 'Luminabella',
    color: '#FFFFFF',
    race: 'Lokomotif Malaikat Putih',
    role: 'Lumina Ekspress',
    image: 'Angline In The Sky (2).jpg',
    story: 'Angline adalah lokomotif putih kotak bertenaga surya sekaligus listrik dengan tangan mekanik. Punya halo malaikat mengambang, tidak punya klakson. Pendiam, elegan, sopan, ramah, baik. Ada yang bilang dia malaikat menyamar.'
  },
  {
    id: 'LOC-018',
    name: 'Neonia Femalia',
    code: 'TOC120',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Energik & Genit',
    zone: 'Zona Radiasi',
    color: '#00FF00',
    race: 'Lokomotif Neon',
    role: 'Penyelamat Zona Radiasi',
    image: 'Neonias on the Jungle.jpg',
    story: 'Neonia adalah lokomotif cewek neon semua dari bogie hijau neon dengan aksen biru neon. Kotak bermata besar imut dengan antena transparan berisi chip yang berputar - otak kedua Neonia. Gaul, energik, lincah, genit. Punya speaker synth. Penyelamat berat yang masuki zona radiasi.'
  },
  {
    id: 'LOC-019',
    name: 'Mineraline Le Icevee',
    code: 'TOC258',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Ceria & Centil',
    zone: 'Area Hangat',
    color: '#4A90E2',
    race: 'Lokomotif Es Biru',
    role: 'Penyeimbang Suhu',
    image: 'Le Mineraline The Frost Train.jpg',
    story: 'Mineraline adalah lokomotif perempuan biru dengan sisi aerodinamis, aksen biru tua dan hijau neon. Roda bergerigi tapi jalan mulus. Punya kipas stabilizer mirip tanduk. Lokomotif uap sangat kuat bertenaga air dingin. Aura dingin membuat dia tak bisa rasakan kehangatan. Ramah, ceria, manja, centil.'
  },
  {
    id: 'LOC-020',
    name: 'Luminelle Le Glacee',
    code: 'TOC808',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Anggun & Pemberani',
    zone: 'Rel Salju',
    color: '#B0E0E6',
    race: 'Lokomotif Biru Pastel',
    role: 'Primadona Es',
    image: 'Luminelles The Breakers ice.jpg',
    story: 'Luminelle adalah lokomotif perempuan biru pastel lembut elegan, mirip diesel kotak 8 roda. Bertenaga air dengan F-AIM. Piringan roda tipis - kecepatan 120KM/H tapi jalan max 40KM/H karena mudah tergelincir. Kalem, ramah, anggun, pendiam, sangat pemberani.'
  },
  {
    id: 'LOC-021',
    name: 'Cinamorrol',
    code: 'TOC725',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Genit & Cerdas',
    zone: 'Sekolah',
    color: '#87CEEB',
    race: 'Lokomotif Anak Biru Muda',
    role: 'Chef Kecil',
    image: 'Cinamorol With The Farmers (2).jpg',
    story: 'Cinamorrol adalah lokomotif anak-anak adik terkecilnya Janny Vers, imut dan lucu. Warna biru muda dengan panel surya. Sifat genit tapi sangat pintar memasak - seperti chef kecil. Sering di-bully di sekolah. Punya fitur spesial: minigun di balik panel surya.'
  },
  {
    id: 'LOC-022',
    name: 'Pinut Parinut',
    code: 'PINUT-001',
    status: 'inactive',
    category: 'Lokomotif Bonus',
    vibe: 'Imut & Ramah',
    zone: 'Area Persahabatan',
    color: '#8B6F47',
    race: 'Lokomotif Hamster Coklat',
    role: 'Teman Main',
    image: '',
    story: 'Pinut adalah lokomotif kotak perempuan coklat kekuningan, sangat imut dan lucu. Karakter hamster lokomotif mirip lebah. Sifat ramah, baik, suka nanya, imut. Telinga kotak mirip hamster. Sudah dewasa tapi masih suka diasuh dan main sama Mineraline.'
  },
  {
    id: 'LOC-023',
    name: 'Ci VilMey',
    code: 'CTV158',
    status: 'inactive',
    category: 'Lokomotif Bonus',
    vibe: 'Centil & Suka Gosip',
    zone: 'Area Umum',
    color: '#FFFFFF',
    race: 'Karakter Kucing Putih',
    role: 'Pendengar Gossip',
    image: '',
    story: 'Ci VilMey adalah karakter kucing perempuan putih dengan merah menonjol mirip bendera Korea. Bentuk kotak imut seperti Pinut dengan bogie imut. Sifat centil, suka membantu, suka ngegosip musuh, banyak nanya.'
  },
  {
    id: 'LOC-024',
    name: 'Fanniya LongLina',
    code: 'BR242',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Panas & Lincah',
    zone: 'Jalur Extreme Longsoran',
    color: '#FF69B4',
    race: 'Lokomotif Pink Ekstrem',
    role: 'Penarik Jalur Sulit',
    image: 'Fanniya The Great Woman Locomotive (2).jpg',
    story: 'Fanniya adalah lokomotif perempuan pink dengan F-AIM, bentuk kotak hidung kotak (CC201 Indonesia). Punya bunga kotak kuning cantik. Piringan roda tebal pink, bogie kompleks. Kekuatan 80.000 HP. Tugasnya jalur extreme banyak longsoran. Panas, lincah, gaul, flamoyan, agak sombong.'
  },
  {
    id: 'LOC-025',
    name: 'Meligy Beligy',
    code: 'TOC256',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Lembut & Bijaksana',
    zone: 'Gunung Es',
    color: '#4A90E2',
    race: 'Lokomotif Uap Biru Es',
    role: 'Kakak Mineraline',
    image: 'Meligy Belgy The Frozen princesse (2).jpg',
    story: 'Meligy (Gelby Belgy) adalah lokomotif biru es mirip uap dengan tabung lingkaran depan belakang, kabin kotak. Kakaknya TOC258 Mineraline. Sangat lembut, kata-kata penuh humor. Sering bentrok sama Mineraline karena beda sifat. Tenang dan introvert.'
  },
  {
    id: 'LOC-026',
    name: 'Cristalia',
    code: 'VT237',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Baik & Pemberani',
    zone: 'Rumah Pinggir Pantai',
    color: '#87CEEB',
    race: 'Lokomotif Kristal Biru',
    role: 'Pengangguran',
    image: 'Cristalias In Mirror Maze (2).jpg',
    story: 'Cristalia adalah lokomotif wanita biru dengan ujung atas runcing seperti kristal, kotak mata kotak besar. Lokomotif pertama bertenaga kosmik! Kecil seperti anak-anak tapi mampu tarik 200 gerbong berat. Tidak punya coupler, jadi pengangguran. Rumah di pinggir pantai yang aneh sering glitch.'
  },
  {
    id: 'LOC-027',
    name: 'Piperlon Couldron',
    code: 'TOC462',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Polos & Paranoid',
    zone: 'Saluran Pipa Bawah Tanah',
    color: '#696969',
    race: 'Lokomotif Uap Tabung',
    role: 'Pemelihara Pipa',
    image: 'Piperlon in The Caves (2).jpg',
    story: 'Piperlon adalah lokomotif mirip Meligy berbentuk tabung dengan tonjolan kabin uap, abu-abu berkarat. Tinggal di saluran pipa pembuangan raksasa bawah tanah. Membantu rawat kesehatan pipa. Pengangguran memilih menanggur. Polos, paranoid dengan dunia permukaan.'
  },
  {
    id: 'LOC-028',
    name: 'Rocky Echo',
    code: 'ATO0E',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Savage & Jujur',
    zone: 'Medan Alam',
    color: '#3A3A3A',
    race: 'Lokomotif Teknis Besi',
    role: 'Detektif Medan',
    image: 'Rocky Echos savages Train (2).jpg',
    story: 'Rocky adalah lokomotif besi kotak sangat teknis banyak detail pipa kompresor, filter. Mata di belakang dan depan. Bogie rumit radar berbentuk pisau. Bertenaga kosmik. Kekuatan: Echo Pulse, Echo Reflection, Echo Boost. Savage, liar, jujur, gak sopan. Bisa debug sendiri dari infeksi.'
  },
  {
    id: 'LOC-029',
    name: 'Platina Steamisa',
    code: 'STM40',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Polos & Ngeselin',
    zone: 'Di Mana-Mana',
    color: '#7B68EE',
    race: 'Lokomotif Uap Anak',
    role: 'Pengecek Anomali',
    image: 'Platinas In The Village (2).jpg',
    story: 'Platina adalah lokomotif uap anak imut lucu, badan bulat gaya kartun biru muda-ungu. Usia 6-10 tahun. Tugasnya diberi Naufal: melaporkan anomali dan absensi lokomotif lain. Kekuatan: teleportasi berbasis asap. Max speed 40KM/H. Sifat ngeselin, polos. Banyak yang cubiti.'
  },
  {
    id: 'LOC-030',
    name: 'Line Caroline',
    code: 'TOC700',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Tenang & Pembeku',
    zone: 'Dimensi Dertbella',
    color: '#4A90E2',
    race: 'Lokomotif Es Kecil',
    role: 'Penjelajah Es',
    image: 'Caroline In DertBellas (2).jpg',
    story: 'Line Caroline adalah lokomotif perempuan biru muda dimensi Dertbella (es beku keras). Atas bodynya gundukan es. Hanya 2 roda depan-belakang tanpa boogie. Pendek dan kecil. Cowhanger biru es membekukan apapun yang menyentuh. Bertenaga dari licin rel. Tenang, kalem, dingin.'
  },
  {
    id: 'LOC-031',
    name: 'Alfha',
    code: 'ALFHA-001',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Liar & Primitif',
    zone: 'Hutan Cemara',
    color: '#F5F5F5',
    race: 'Lokomotif Serigala Putih',
    role: 'Penjelajah Hutan',
    image: 'alfha The Wild Locomotives.jpg',
    story: 'Alfha adalah lokomotif perempuan liar putih pucat bertelinga kucing. Tidak punya nomor seri atau identitas resmi. Tinggal di hutan cemara penuh serigala. Lokomotif serigala liar tak menentu yang eksplorasi jalur terbengkalai. Bertenaga matahari. Liar, primitif, naluri serigala kuat.'
  },
  {
    id: 'LOC-032',
    name: 'Chance',
    code: 'TOC010',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Culun & Takut',
    zone: 'Rel Khusus Magnetik',
    color: '#F5F5F5',
    race: 'Lokomotif Maglev Putih',
    role: 'Kereta Maglev',
    image: 'Aerodinamic Chance Speeds Up.jpg',
    story: 'Chance adalah lokomotif maglev laki-laki kedua setelah Aurina tanpa roda. Bogie memancarkan cahaya magnetik tolak menolak untuk terbang. Putih pucat aksen hitam. Pendek kotak. Punya fitur cowhanger bisa terangkat saat melesat. Culun, tidak PD, sering di-bully.'
  },
  {
    id: 'LOC-033',
    name: 'Aurelia Affara',
    code: 'VT825',
    status: 'inactive',
    category: 'Lokomotif Bonus',
    vibe: 'Ramah & Sabar',
    zone: 'Area Umum',
    color: '#B0E0E6',
    race: 'Lokomotif Kristal Biru',
    role: 'Penolong Sesama',
    image: '',
    story: 'Aurelia adalah lokomotif perempuan biru muda pucat kristal, kecil hanya 2 roda depan-belakang. Atas bogie segitiga kristal membeku. Mirip Line Caroline tapi rapih cantik, bogie kompleks. Tidak punya kekuatan khusus. Ramah, sabar. Bisa tarik 4 gerbong.'
  },
  {
    id: 'LOC-034',
    name: 'Pelito Solpito Peloppo',
    code: 'TOC173',
    status: 'inactive',
    category: 'Lokomotif Bonus',
    vibe: 'Tangguh & Cerewet',
    zone: 'Jalur Berkerikil',
    color: '#808080',
    race: 'Lokomotif Stainless Kerja',
    role: 'Penarik Jalur Rusak',
    image: '',
    story: 'Pelito adalah lokomotif laki-laki stainless abu-abu CC201 Indonesia. Punya 2 telinga antena mekanik sensitif getar halus. Logo PT Kanna resmi. Tugasnya jalur non-radiasi berkerikil tidak rata. Bogie kompleks menyesuaikan medan. Bisa tarik 30 gerbong. Tangguh, cerewet, gampang baper.'
  },
  {
    id: 'LOC-035',
    name: 'Salsabella Nabela',
    code: 'EHT145',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Malaikat Surgawi',
    zone: 'Surga Luminabella',
    color: '#DDA0DD',
    race: 'Lokomotif Malaikat Ungu',
    role: 'Kereta Malaikat',
    image: 'Salsabella the luminas train.jpg',
    story: 'Salsabella adalah lokomotif perempuan ungu muda segiempat panjang. Lokomotif lumina express alias surga. Bertenaga radiasi reaktor fusi mini abadi. Kekuatan 60.000 HP speed max 300KM/H di jalur langit. Punya sayap putih kecil mengambang.'
  },
  {
    id: 'LOC-036',
    name: 'Mutiara Faltiara',
    code: 'VT148',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Anggun & Misterius',
    zone: 'Luminabella',
    color: '#FFFFFF',
    race: 'Lokomotif Roh Malaikat',
    role: 'Penjaga Surga',
    image: 'mutiara The Angel Locomotive (2).jpg',
    story: 'Mutiara adalah lokomotif perempuan putih bersih berwujud namun tidak sentuh. Hanya bayangan menipu bertenaga kosmik abstrak. Mirip Velmoura tapi putih bersih aksen hitam. Mata kotak berbinar bintang polos. Atas badan mutiara bulat mirip kerang. 13.000 HP.'
  },
  {
    id: 'LOC-037',
    name: 'Wilna Falmina Lamina',
    code: 'TOC123',
    status: 'active',
    category: 'Lokomotif Bonus',
    vibe: 'Manja & Pembersih',
    zone: 'Kota Nesyabella',
    color: '#FFB6D9',
    race: 'Lokomotif Diesel Pink',
    role: 'Pembersih Jalur',
    image: 'Wilna Foto.jpg',
    story: 'Wilna adalah lokomotif diesel perempuan pink muda pucat kotak segi empat. Logo PT Kanna resmi. Tenaga panel surya advanced. Fitur spesial: klakson bisa putar depan-belakang suara feminim lembut. Hobi menyapu dengan sapu Sapdi. Ramah, manja, pendiam, malu.'
  }
];

const planningCharacters = [
  {
    id: 201,
    name: 'Millora',
    code: '???',
    color: '#FFD700',
    vibe: 'Konsep Awal',
    zone: 'Unknown',
    status: 'planning',
    story: `Millora masih berada dalam tahap perencanaan. Konsep yang sedang dikembangkan adalah rangkaian/gerbong hidup—sesuatu yang unik dan belum pernah ada di Nesyabella. Karakternya akan membawa dimensi baru ke dunia StickMazz.`
  },
  {
    id: 202,
    name: 'Zelly',
    code: '???',
    color: '#FF69B4',
    vibe: 'Konsep Awal',
    zone: 'Unknown',
    status: 'planning',
    story: `Zelly masih dalam perencanaan mendalam. Konsep karakternya adalah gerbong hidup—sebuah inovasi yang akan mengubah pemahaman tentang apa itu lokomotif di Nesyabella. Lebih banyak detail akan terungkap saat Zelly siap hadir.`
  }
];

// Status badge emojis
const statusEmojis = {
  active: '✨',
  inactive: '😴',
  suspended: '🚨',
  missing: '👻'
};

// Render karakter aktif
function renderActiveBonusCharacters() {
  const container = document.getElementById('activeBonusGrid');
  container.innerHTML = bonusCharactersDatabase
    .map(char => `
      <div class="bonus-card character-card status-${char.status}" style="border-color: ${char.color};" onclick="showModal('${char.code}', 'active')" data-status="${char.status}">
        <div class="bonus-card-header" style="background: linear-gradient(135deg, ${char.color}20, ${char.color}10); padding: 1rem; border-bottom: 1px solid ${char.color}30;">
          <div class="char-name" style="color: ${char.color}; margin-bottom: 0.5rem;">${char.name}</div>
          ${getBonusStatusBadge(char.status)}
        </div>
        <div class="char-info">
          <div class="char-gender" style="margin-bottom: 0.5rem;">🏷️ ${char.code}</div>
          <div class="char-trait" style="color: ${char.color}; font-weight: 600; margin-bottom: 0.8rem;">${char.vibe}</div>
          <div class="char-trait" style="margin-bottom: 1rem; flex-grow: 1; font-size: 0.9rem;">${char.story.substring(0, 120)}...</div>
          <div style="border-top: 1px solid rgba(0, 217, 255, 0.1); padding-top: 0.8rem; margin-top: auto; font-size: 0.75rem; color: ${char.color};">
            📍 ${char.zone}
          </div>
        </div>
      </div>
    `)
    .join('');
}

// Get Status Badge untuk Bonus Characters
function getBonusStatusBadge(status) {
    switch(status) {
        case 'active':
            return ''; // No badge for active
        case 'inactive':
            return '<div class="bonus-badge status-inactive" title="Inactive">⏸️ Inactive</div>';
        case 'suspended':
            return '<div class="bonus-badge status-suspended" title="Suspended">🚨 Suspended</div>';
        case 'missing':
            return '<div class="bonus-badge status-missing" title="Missing">👻 Missing</div>';
        default:
            return '';
    }
}

// Render karakter dalam perencanaan
function renderPlanningCharacters() {
  const container = document.getElementById('planningBonusGrid');
  container.innerHTML = planningCharacters
    .map(char => `
      <div class="bonus-card character-card" style="border-color: ${char.color}; opacity: 0.7;" onclick="showModal('${char.code}', 'planning')">
        <div class="bonus-card-header" style="background: linear-gradient(135deg, ${char.color}20, ${char.color}10); padding: 1rem; border-bottom: 1px solid ${char.color}30;">
          <div class="char-name" style="color: ${char.color}; margin-bottom: 0.5rem;">${char.name}</div>
          <div class="status-badge" style="background: #FF6B9D; font-size: 0.75rem; padding: 6px 8px; border-radius: 4px; width: fit-content;">🚧 PLANNING</div>
        </div>
        <div class="char-info">
          <div class="char-gender" style="margin-bottom: 0.5rem;">🏷️ ${char.code}</div>
          <div class="char-trait" style="color: ${char.color}; font-weight: 600; margin-bottom: 0.8rem;">${char.vibe}</div>
          <div class="char-trait" style="margin-bottom: 1rem; flex-grow: 1; font-size: 0.9rem;">${char.story}</div>
          <div style="border-top: 1px solid rgba(0, 217, 255, 0.1); padding-top: 0.8rem; margin-top: auto; font-size: 0.75rem; color: ${char.color};">
            📍 ${char.zone}
          </div>
        </div>
      </div>
    `)
    .join('');
}

// Modal handler dengan status support
function showModal(code, type) {
  const chars = type === 'active' ? bonusCharactersDatabase : planningCharacters;
  const char = chars.find(c => c.code === code);
  
  if (!char) return;

  // Stop previous audio if any
  const prevAudio = document.getElementById('bonusCharAudio');
  if (prevAudio) prevAudio.pause();

  const isMissing = char.status === 'missing';
  const modalEl = document.getElementById('detailModal');
  const charNameEl = document.getElementById('modalCharName');
  
  // Apply status class to modal
  modalEl.classList.remove('modal-missing-bonus', 'modal-suspended-bonus', 'modal-inactive-bonus');
  if (isMissing) {
    modalEl.classList.add('modal-missing-bonus');
  } else if (char.status === 'suspended') {
    modalEl.classList.add('modal-suspended-bonus');
  } else if (char.status === 'inactive') {
    modalEl.classList.add('modal-inactive-bonus');
  }

  // Add melancholic fade to name if missing
  const nameText = `${char.name} (${char.code})`;
  if (isMissing) {
    charNameEl.innerHTML = `<span class="melancholic-fade-bonus">${nameText}</span>`;
  } else {
    charNameEl.textContent = nameText;
  }

  document.getElementById('modalCharDetail').innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
      <div>
        <div class="modal-image-container">
          <img class="modal-image" src="${char.image}" alt="${char.name}" onerror="this.style.display='none'" />
        </div>
      </div>
      <div>
        <div style="margin-bottom: 15px;">
          <strong>Warna Identitas:</strong> <span style="color: ${char.color};">█████</span> ${char.color}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Vibe:</strong> ${char.vibe}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Zona:</strong> ${char.zone}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Status:</strong> <span class="status-badge-modal status-${char.status}">
            ${statusEmojis[char.status] || '✦'} ${char.status.toUpperCase()}
          </span>
        </div>
        <p><strong>Cerita Lengkap:</strong></p>
        <p class="${isMissing ? 'missing-text-bonus' : ''}" style="font-size: 0.95rem; line-height: 1.6;">${char.story}</p>
        ${char.status === 'planning' ? '<div class="status-planning">🚧 Masih dalam tahap perencanaan</div>' : ''}
      </div>
    </div>
  `;
  
  // Play melancholic audio for missing characters
  if (isMissing) {
    try {
      let audio = document.getElementById('bonusCharAudio');
      if (!audio) {
        audio = document.createElement('audio');
        audio.id = 'bonusCharAudio';
        audio.src = 'Melancholic Vision (StickMazz Music).mp3';
        audio.volume = 0.4;
        audio.loop = true;
        document.body.appendChild(audio);
      }
      audio.play().catch(err => console.log('Audio play deferred:', err));
    } catch (e) {
      console.log('Audio not available');
    }
  }
  
  modalEl.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('show');
  
  // Stop audio when closing
  const audio = document.getElementById('bonusCharAudio');
  if (audio) audio.pause();
  
  // Remove status classes
  modal.classList.remove('modal-missing-bonus', 'modal-suspended-bonus', 'modal-inactive-bonus');
}

// Close modal saat klik luar
window.onclick = function(event) {
  const modal = document.getElementById('detailModal');
  if (event.target === modal) {
    closeModal();
  }
};

// Initialize saat DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderActiveBonusCharacters();
  renderPlanningCharacters();
});
