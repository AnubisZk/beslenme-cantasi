import React, { useState, useEffect } from 'react';
import {
  Home, BookOpen, ShoppingBag, Droplets, Users, GraduationCap, Gamepad2,
  ChevronLeft, Check, Plus, Minus, Sparkles, ExternalLink, Maximize, Minimize,
  Info, User, Search, PlusCircle, MinusCircle, ChefHat, Star, Award, Zap, Leaf,
  Heart, Shield, AlertCircle
} from 'lucide-react';

// ─────────────────────────────────────────────────────────
// FOODS VERİ TABANI (Zenginleştirilmiş + 16 yeni besin)
// ─────────────────────────────────────────────────────────
const FOODS = [
  {
    id: 1, ad: 'Elma', kategori: 'Sebze Meyve', altKategori: 'Meyve',
    aciklama: 'Vitamin dolu, kıtır ve enerjik bir meyve.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍎', renk: 'bg-red-100 text-red-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['lif', 'vitamin C', 'su'],
    renkGrubu: 'kırmızı',
    cocukMesaji: 'Elmayı çıtırdatmak dişlerini de temizler! 🍎 Her ısırıkta vitamin alıyorsun.',
    veliNotu: 'Elma, çocuklara düzenli lif ve C vitamini sağlar. Kabuklu yenildiğinde faydası artar.',
    ogretmenSorusu: 'Elmanın çekirdekleri neden yenmez? Onun yerine ne yapabiliriz?',
    alternatifler: [],
    porsiyonNotu: '1 orta boy elma',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Renkli Seçim'
  },
  {
    id: 2, ad: 'Muz', kategori: 'Sebze Meyve', altKategori: 'Meyve',
    aciklama: 'Spordan önce ve okulda harika enerji verir.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: false, onerilenMi: true,
    ikon: '🍌', renk: 'bg-yellow-100 text-yellow-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['potasyum', 'enerji', 'lif'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Muz, yorulduğunda sana hızla güç verir! Sporcuların favorisi. 🏃',
    veliNotu: 'Muz doğal şeker ve potasyum içerir; zihinsel konsantrasyonu destekler.',
    ogretmenSorusu: 'Sporcular neden müsabaka öncesi muz yer? Araştırıp anlatalım!',
    alternatifler: [],
    porsiyonNotu: '1 orta boy muz',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Enerji Ustası'
  },
  {
    id: 3, ad: 'Salatalık', kategori: 'Sebze Meyve', altKategori: 'Sebze',
    aciklama: 'Sulu sulu ve çok ferahlatıcı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥒', renk: 'bg-green-100 text-green-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'su-destek',
    besinEtiketleri: ['su', 'vitamin K', 'düşük kalori'],
    renkGrubu: 'yeşil',
    cocukMesaji: 'Salatalık neredeyse tamamen sudan yapılmış! Yedikçe su içmiş gibi oluyorsun. 💧',
    veliNotu: 'Yüksek su içeriğiyle (%96 su) hidrasyon desteği sağlar. Teneffüste ferahlatıcı bir seçim.',
    ogretmenSorusu: 'Hangi sebzeler su oranı en yüksek? Listeleyelim ve sıralayalım.',
    alternatifler: [],
    porsiyonNotu: 'Yarım salatalık veya 4-5 dilim',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Su Kahramanı'
  },
  {
    id: 4, ad: 'Domates', kategori: 'Sebze Meyve', altKategori: 'Sebze',
    aciklama: 'Yemeklere renk katan sulu dostumuz.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍅', renk: 'bg-red-100 text-red-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['likopen', 'vitamin C', 'su'],
    renkGrubu: 'kırmızı',
    cocukMesaji: 'Domatesin kırmızı rengi, seni koruyan güçlü bir madde içerdiğini gösteriyor! 🔴',
    veliNotu: 'Likopen içeriği bağışıklık sistemini güçlendirir. Sandviçlere veya salatalara eklenerek tüketilebilir.',
    ogretmenSorusu: 'Domates sebze mi meyve mi? İkisi arasındaki fark nedir, araştıralım!',
    alternatifler: [],
    porsiyonNotu: '2-3 orta boy domates',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Renkli Seçim'
  },
  {
    id: 5, ad: 'Yoğurt', kategori: 'Süt Ürünleri', altKategori: 'Süt',
    aciklama: 'Kemiklerimizi güçlendiren kalsiyum deposu.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥣', renk: 'bg-blue-100 text-blue-600',
    besinGrubu: 'süt', enerjiTipi: 'kas-destek',
    besinEtiketleri: ['kalsiyum', 'protein', 'probiyotik'],
    renkGrubu: 'beyaz',
    cocukMesaji: 'Yoğurt içindeki dostane bakteriler sindirim sistemini korur. Minikliğin büyük kahramanı! 🦸',
    veliNotu: 'Probiyotik yoğurt, bağırsak sağlığını ve bağışıklığı destekler. Şekersiz tercih edilmesi önerilir.',
    ogretmenSorusu: 'Probiyotik nedir? Yoğurdun içindeki bakteriler neden yararlı?',
    alternatifler: [],
    porsiyonNotu: '1 küçük kase (150 ml)',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 6, ad: 'Süt', kategori: 'Süt Ürünleri', altKategori: 'İçecek',
    aciklama: 'Büyümemize yardımcı olan doğal içecek.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥛', renk: 'bg-blue-100 text-blue-600',
    besinGrubu: 'süt', enerjiTipi: 'kas-destek',
    besinEtiketleri: ['kalsiyum', 'D vitamini', 'protein'],
    renkGrubu: 'beyaz',
    cocukMesaji: 'Süt içtikçe kemiklerin güçlenir ve boyun uzar! Büyümenin gizli silahı. 💪',
    veliNotu: 'Kalsiyum ve D vitamini kemik gelişimi için kritiktir. Tam yağlı süt okul çağında önerilir.',
    ogretmenSorusu: 'Dünyada hangi hayvanların sütü içilir? Sınıfça listeleyelim!',
    alternatifler: [],
    porsiyonNotu: '1 küçük kutu (200 ml)',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 7, ad: 'Peynir', kategori: 'Süt Ürünleri', altKategori: 'Süt',
    aciklama: 'Sandviçlerin vazgeçilmez güçlü kahramanı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🧀', renk: 'bg-yellow-100 text-yellow-600',
    besinGrubu: 'süt', enerjiTipi: 'kas-destek',
    besinEtiketleri: ['kalsiyum', 'protein', 'B12'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Peynir kemiklerin için süper kahraman! Sandviçine ekleyince hem doyurucu hem güçlendirici olur. 🧀',
    veliNotu: 'Beyaz peynir, çocuklar için mükemmel kalsiyum ve protein kaynağıdır. Fazla tuzlu çeşitlerden kaçınılmalı.',
    ogretmenSorusu: 'Kaşar, beyaz peynir, lor — farkları nelerdir? Araştıralım.',
    alternatifler: [],
    porsiyonNotu: '1-2 dilim (30g)',
    riskEtiketi: 'tuzlu',
    puan: 8,
    rozet: 'Protein Gücü'
  },
  {
    id: 8, ad: 'Haşlanmış Yumurta', kategori: 'Protein', altKategori: 'Hayvansal',
    aciklama: 'Kaslarımızı büyüten harika protein kaynağı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥚', renk: 'bg-orange-100 text-orange-600',
    besinGrubu: 'protein', enerjiTipi: 'kas-destek',
    besinEtiketleri: ['protein', 'D vitamini', 'demir'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Yumurta içindeki protein kaslarını inşa eder. Okul için mükemmel yakıt! 🏋️',
    veliNotu: 'Haşlanmış yumurta, taşıması kolay eksiksiz bir protein kaynağıdır. Sabah hazırlanıp çantaya konabilir.',
    ogretmenSorusu: 'Yumurtanın sarısı mı beyazı mı daha besleyici? Araştıralım!',
    alternatifler: [],
    porsiyonNotu: '1 haşlanmış yumurta',
    riskEtiketi: 'alerjen olabilir',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 9, ad: 'Ceviz', kategori: 'Protein', altKategori: 'Kuruyemiş',
    aciklama: 'Beynimiz için çok faydalı akıllı çerez.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🧠', renk: 'bg-amber-100 text-amber-600',
    besinGrubu: 'protein', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['omega-3', 'protein', 'sağlıklı yağ'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Cevizin şekli beyne benziyor değil mi? Beyni gerçekten besliyor! 🧠✨',
    veliNotu: 'Omega-3 yağ asitleri beyin gelişimi ve konsantrasyon için kritiktir. Küçük bir avuç yeterlidir.',
    ogretmenSorusu: 'Hangi besinler beyni besler? Ceviz bunların neresindedir?',
    alternatifler: [],
    porsiyonNotu: '1 avuç (3-4 ceviz içi)',
    riskEtiketi: 'alerjen olabilir',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 10, ad: 'Tam Buğday Ekmeği', kategori: 'Tahıllar', altKategori: 'Ekmek',
    aciklama: 'Bizi uzun süre tok tutan lifli ekmek.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍞', renk: 'bg-amber-100 text-amber-700',
    besinGrubu: 'tahıl', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['tam tahıl', 'lif', 'B vitamini'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Tam buğday ekmeği seni sınav boyunca tok tutar! Beyaz ekmekten çok daha uzun enerjisi var. 💡',
    veliNotu: 'Tam tahıl ekmek, glisemik indeksi düşük olduğu için uzun süre tokluk sağlar ve kan şekerini dengeler.',
    ogretmenSorusu: 'Beyaz un ve tam buğday unu arasındaki fark nedir? Deney yapalım!',
    alternatifler: [],
    porsiyonNotu: '1-2 dilim',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Tam Tahıl Enerjisi'
  },
  {
    id: 11, ad: 'Ayran', kategori: 'İçecekler', altKategori: 'Süt',
    aciklama: 'Geleneksel ve ferahlatıcı içeceğimiz.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥛', renk: 'bg-blue-50 text-blue-500',
    besinGrubu: 'süt', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['kalsiyum', 'probiyotik', 'protein'],
    renkGrubu: 'beyaz',
    cocukMesaji: 'Ayran hem susuzluğunu giderir hem de kalsiyum verir. Türk mutfağının süper içeceği! 🇹🇷',
    veliNotu: 'Gazlı içeceklere harika bir alternatif. Yemek yanında veya tek başına verilebilir.',
    ogretmenSorusu: 'Ayran hangi ülkelerde içilir? Dünyada benzer içecekler var mı?',
    alternatifler: ['Su', 'Süt', 'Kefir'],
    porsiyonNotu: '1 küçük kutu (200 ml)',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Su Kahramanı'
  },
  {
    id: 12, ad: 'Su', kategori: 'İçecekler', altKategori: 'Su',
    aciklama: 'Vücudumuzun en iyi arkadaşı, hayat kaynağı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '💧', renk: 'bg-cyan-100 text-cyan-600',
    besinGrubu: 'içecek', enerjiTipi: 'su-destek',
    besinEtiketleri: ['su', 'sıfır şeker', 'hidrasyon'],
    renkGrubu: 'mavi',
    cocukMesaji: 'Su içmek beyin hücrelerini canlandırır! Susadığında dikkatini toplamakata zorlanırsın. 💧',
    veliNotu: 'Çocukların günde en az 6-8 bardak su içmesi önerilir. Okul çantasında her zaman su şişesi bulunmalı.',
    ogretmenSorusu: 'İnsan vücudu ne kadar su içerir? Oran neden bu kadar yüksek?',
    alternatifler: [],
    porsiyonNotu: '1 su şişesi (500 ml)',
    riskEtiketi: 'normal',
    puan: 10,
    rozet: 'Su Kahramanı'
  },
  {
    id: 13, ad: 'Ev Yapımı Sandviç', kategori: 'Karışık', altKategori: 'Öğün',
    aciklama: 'İçinde sevdiğimiz sağlıklı malzemeler var.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'ev yapımı', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥪', renk: 'bg-green-100 text-green-700',
    besinGrubu: 'karma', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['lif', 'protein', 'tam tahıl'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Evde hazırlanan sandviç, içindekilerini kendin seçebildiğin süper bir öğün! 🥪✨',
    veliNotu: 'Tam tahıl ekmek + peynir/yumurta + sebze kombinasyonu ideal dengeli öğündür.',
    ogretmenSorusu: 'En sağlıklı sandviç malzemeleri neler olabilir? Tarif geliştirelim!',
    alternatifler: [],
    porsiyonNotu: '1 sandviç',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Tam Tahıl Enerjisi'
  },
  {
    id: 14, ad: 'Paketli Kek', kategori: 'Sınırlı', altKategori: 'Tatlı',
    aciklama: 'Çok tatlı ama enerjisi çabuk bitiyor.',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🧁', renk: 'bg-pink-100 text-pink-600',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['şekerli', 'çok işlenmiş', 'katkılı'],
    renkGrubu: 'pembe',
    cocukMesaji: 'Bazen yenebilir! Ama enerjisi hızla biter; yanına meyve de eklersen gün boyu enerjin olur. 🍎',
    veliNotu: 'Yüksek şeker ve katkı maddesi içerir. Haftada 1-2 kez bazen seçenek olabilir; alternatif önerilir.',
    ogretmenSorusu: 'Ambalaj üzerindeki içerik listesini okuyalım. Hangi maddeler var?',
    alternatifler: ['Ev yapımı kek', 'Taze meyve', 'Yulaflı Kurabiye'],
    porsiyonNotu: '1 küçük paket',
    riskEtiketi: 'çok işlenmiş',
    puan: 2,
    rozet: 'Bazenlik Ürün'
  },
  {
    id: 15, ad: 'Gazlı İçecek', kategori: 'Sınırlı', altKategori: 'İçecek',
    aciklama: 'Çok şekerli, bazen yerine ayran tercih edilebilir.',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🥤', renk: 'bg-purple-100 text-purple-600',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['şekerli', 'asitli', 'katkılı'],
    renkGrubu: 'mor',
    cocukMesaji: 'Gazlı içecekler bazen olabilir ama suyu veya ayranı seçersen vücudun çok mutlu olur! 💧',
    veliNotu: 'Yüksek şeker ve asit içeriği diş sağlığını olumsuz etkiler. Ayran veya meyve suyu alternatif olabilir.',
    ogretmenSorusu: 'Gazlı içeceklerin içindeki kabarcıklar nereden geliyor?',
    alternatifler: ['Su', 'Ayran', 'Taze sıkılmış meyve suyu'],
    porsiyonNotu: '1 küçük kutu',
    riskEtiketi: 'şekerli',
    puan: 1,
    rozet: 'Bazenlik Ürün'
  },
  {
    id: 16, ad: 'Cips', kategori: 'Sınırlı', altKategori: 'Tuzlu',
    aciklama: 'Çok tuzlu, yerine ceviz veya badem çıtırdatabilirsin.',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🥔', renk: 'bg-orange-100 text-orange-500',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['tuzlu', 'çok işlenmiş', 'yağlı'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Çıtırtı istiyorsan badem veya ceviz de çıtırdar hem daha çok enerji verir! 🥜',
    veliNotu: 'Yüksek sodyum ve doymuş yağ içerir. Kuruyemiş veya leblebi gibi doğal alternatifler sunulabilir.',
    ogretmenSorusu: 'Patates cipsten başka nasıl yenir? Farklı tarifler bulalım!',
    alternatifler: ['Ceviz', 'Badem', 'Leblebi'],
    porsiyonNotu: '1 küçük paket',
    riskEtiketi: 'tuzlu',
    puan: 2,
    rozet: 'Bazenlik Ürün'
  },
  {
    id: 17, ad: 'Şekerli Meyve Suyu', kategori: 'Sınırlı', altKategori: 'İçecek',
    aciklama: 'Meyvenin kendisini yemek her zaman daha iyidir.',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🧃', renk: 'bg-red-100 text-red-500',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['şekerli', 'az lif', 'katkılı'],
    renkGrubu: 'kırmızı',
    cocukMesaji: 'Kutudaki meyve suyundan çok gerçek meyveyi yemek daha fazla vitamin verir! 🍎>🧃',
    veliNotu: 'Ambalajlı meyve suları genellikle az lif, yüksek şeker içerir. Taze meyve her zaman öncelikli tercih olmalı.',
    ogretmenSorusu: 'Bir bardak meyve suyu için kaç meyve kullanılıyor? Hesaplayalım!',
    alternatifler: ['Taze meyve', 'Su', 'Ayran'],
    porsiyonNotu: '1 küçük kutu',
    riskEtiketi: 'şekerli',
    puan: 2,
    rozet: 'Bazenlik Ürün'
  },
  {
    id: 18, ad: 'Çikolatalı Gofret', kategori: 'Sınırlı', altKategori: 'Tatlı',
    aciklama: 'Bazen yenebilir ama meyveler daha renkli bir tatlıdır.',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🍫', renk: 'bg-amber-100 text-amber-800',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['şekerli', 'çok işlenmiş', 'katkılı'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Çikolata bazen olabilir! Bir meyveyle yanyana yersen dengeni kurmuş olursun. 🍫🍌',
    veliNotu: 'Haftada 1-2 kez tüketilebilir. Bitter çikolata daha az şekerli bir alternatif olabilir.',
    ogretmenSorusu: 'Kakao çekirdeği nerede yetişir? Dünya haritasında gösterelim.',
    alternatifler: ['Taze meyve', 'Yulaflı Kurabiye', 'Kuru Üzüm'],
    porsiyonNotu: '1 küçük bar',
    riskEtiketi: 'şekerli',
    puan: 2,
    rozet: 'Bazenlik Ürün'
  },
  // ─── YENİ BESİNLER ───
  {
    id: 19, ad: 'Armut', kategori: 'Sebze Meyve', altKategori: 'Meyve',
    aciklama: 'Tatlı ve sulu; lif açısından çok zengin bir meyve.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍐', renk: 'bg-green-100 text-green-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['lif', 'vitamin C', 'su'],
    renkGrubu: 'yeşil',
    cocukMesaji: 'Armut yedikçe sindirim sisteminizi mutlu edersiniz! Hem tatlı hem sağlıklı. 🍐',
    veliNotu: 'Yüksek pektin lifi sindirim sistemini düzenler. Kabuklu tüketmek lif alımını artırır.',
    ogretmenSorusu: 'Armut ve elma aynı aileden mi? Meyvelerin ailelerini araştıralım.',
    alternatifler: [],
    porsiyonNotu: '1 orta boy armut',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Renkli Seçim'
  },
  {
    id: 20, ad: 'Mandalina', kategori: 'Sebze Meyve', altKategori: 'Meyve',
    aciklama: 'C vitamini deposu, kolayca soyulabilen tatlı meyve.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍊', renk: 'bg-orange-100 text-orange-500',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['vitamin C', 'lif', 'antioksidan'],
    renkGrubu: 'turuncu',
    cocukMesaji: 'Mandalina soyması çok kolay! Teneffüste 5 saniyede hazır, bağışıklığını güçlendiriyor. 🍊',
    veliNotu: 'Yüksek C vitamini içeriği bağışıklık sistemini güçlendirir. Kış aylarında özellikle değerlidir.',
    ogretmenSorusu: 'Turuncu renkli meyveler neden bu kadar C vitamini içerir?',
    alternatifler: [],
    porsiyonNotu: '1-2 mandalina',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Renkli Seçim'
  },
  {
    id: 21, ad: 'Havuç', kategori: 'Sebze Meyve', altKategori: 'Sebze',
    aciklama: 'Göz sağlığı için harika, çıtır çıtır bir sebze.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥕', renk: 'bg-orange-100 text-orange-500',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['beta-karoten', 'lif', 'vitamin A'],
    renkGrubu: 'turuncu',
    cocukMesaji: 'Havuç gözlerini güçlendirir! Eskiden "havuç yersen karanlıkta görürsün" derlerdi. 👁️',
    veliNotu: 'Beta-karoten göz sağlığı için önemlidir. Çiğ tüketildiğinde besin değeri yüksektir.',
    ogretmenSorusu: 'Beta-karoten vücutta neye dönüşür? Araştıralım!',
    alternatifler: [],
    porsiyonNotu: '1 orta boy havuç veya bir avuç baby havuç',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Renkli Seçim'
  },
  {
    id: 22, ad: 'Badem', kategori: 'Protein', altKategori: 'Kuruyemiş',
    aciklama: 'E vitamini ve sağlıklı yağlarla dolu küçük güç deposu.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥜', renk: 'bg-amber-100 text-amber-600',
    besinGrubu: 'protein', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['E vitamini', 'protein', 'sağlıklı yağ'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Küçük ama güçlü! Bir avuç badem seni saat boyunca tok tutar ve beynini besler. 🧠',
    veliNotu: 'Magnezyum, E vitamini ve protein içeriği yüksek. Az miktarda (10-12 adet) yeterlidir.',
    ogretmenSorusu: 'Badem ağacı nasıl görünür? Hangi ülkelerde yetişir?',
    alternatifler: [],
    porsiyonNotu: '1 avuç (10-12 badem)',
    riskEtiketi: 'alerjen olabilir',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 23, ad: 'Fındık', kategori: 'Protein', altKategori: 'Kuruyemiş',
    aciklama: 'Türkiye\'nin dünyaca ünlü sağlıklı kuruyemişi.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🌰', renk: 'bg-amber-100 text-amber-700',
    besinGrubu: 'protein', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['E vitamini', 'sağlıklı yağ', 'lif'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Türkiye dünyanın en çok fındık yetiştiren ülkesi! Yerel ve sağlıklı süper gıda. 🇹🇷🌰',
    veliNotu: 'E vitamini ve tekli doymamış yağ açısından zengin. Tuzsuz tercih edilmeli.',
    ogretmenSorusu: 'Fındık hangi bölgemizde yetişir? Haritada gösterelim!',
    alternatifler: [],
    porsiyonNotu: '1 avuç (15-20 fındık)',
    riskEtiketi: 'alerjen olabilir',
    puan: 8,
    rozet: 'Protein Gücü'
  },
  {
    id: 24, ad: 'Kuru Üzüm', kategori: 'Sebze Meyve', altKategori: 'Meyve',
    aciklama: 'Doğal şekerli, taşıması kolay enerji kaynağı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'doğal', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍇', renk: 'bg-purple-100 text-purple-600',
    besinGrubu: 'meyve-sebze', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['demir', 'doğal şeker', 'antioksidan'],
    renkGrubu: 'mor',
    cocukMesaji: 'Kuru üzüm, demir deposu! Yorgunluğa karşı harika bir doğal takviye. 🍇',
    veliNotu: 'Demir içeriği yüksek; anemi riskine karşı koruyucudur. Fakat şeker konsantrasyonu yüksek olduğundan az tüketilmeli.',
    ogretmenSorusu: 'Taze üzüm kuruyunca neden küçülür? Sudaki değişim nedir?',
    alternatifler: [],
    porsiyonNotu: '1 küçük kutu (30g)',
    riskEtiketi: 'şekerli',
    puan: 7,
    rozet: 'Renkli Seçim'
  },
  {
    id: 25, ad: 'Leblebi', kategori: 'Protein', altKategori: 'Kuruyemiş',
    aciklama: 'Geleneksel Türk çıtırtısı; protein ve lif açısından zengin.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🫘', renk: 'bg-yellow-100 text-yellow-700',
    besinGrubu: 'protein', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['protein', 'lif', 'demir'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Cips gibi çıtırdar ama çok daha sağlıklı! Leblebi hem protein hem lif deposu. 🫘✨',
    veliNotu: 'Bitkisel protein ve lif içeriği yüksek. Cipsin sağlıklı alternatifi olarak sunulabilir. Tuzsuz tercih edilmeli.',
    ogretmenSorusu: 'Nohut ve leblebi aynı bitki mi? Aralarındaki fark nedir?',
    alternatifler: [],
    porsiyonNotu: '1 küçük avuç (30g)',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Protein Gücü'
  },
  {
    id: 26, ad: 'Tam Buğday Lavaş', kategori: 'Tahıllar', altKategori: 'Ekmek',
    aciklama: 'İnce, pratik ve tam tahıllı; dürüm için mükemmel.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🫓', renk: 'bg-amber-100 text-amber-600',
    besinGrubu: 'tahıl', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['tam tahıl', 'lif', 'B vitamini'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Lavaşla dürüm yap! İçine sebze ve peynir sarınca hem pratik hem çok lezzetli olur. 🌯',
    veliNotu: 'Tam tahıl lavaş, beyaz una göre daha fazla lif ve mineral içerir. Sebze dürümü için idealdir.',
    ogretmenSorusu: 'Lavaş hangi ülkelerde yenir? Dünyada farklı ekmek çeşitlerini bulalım.',
    alternatifler: [],
    porsiyonNotu: '1 küçük lavaş',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Tam Tahıl Enerjisi'
  },
  {
    id: 27, ad: 'Ev Yapımı Poğaça', kategori: 'Tahıllar', altKategori: 'Hamur işi',
    aciklama: 'Evde yapılan, içi peynirli veya patatesli sıcacık poğaça.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'ev yapımı', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥐', renk: 'bg-yellow-100 text-yellow-700',
    besinGrubu: 'tahıl', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['karbonhidrat', 'protein', 'ev yapımı'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Evde yapılan poğaça, içinde ne olduğunu biliyorsun demek! En güvenilir lezzet. 🏠❤️',
    veliNotu: 'Ev yapımı poğaça katkı maddesi içermez. Tam buğday unu ve az yağ kullanılırsa daha sağlıklı olur.',
    ogretmenSorusu: 'Hangi poğaça çeşitleri var? Şehirlere göre farklılıklar var mı?',
    alternatifler: [],
    porsiyonNotu: '1 küçük poğaça',
    riskEtiketi: 'normal',
    puan: 7,
    rozet: 'Tam Tahıl Enerjisi'
  },
  {
    id: 28, ad: 'Yulaflı Kurabiye', kategori: 'Tahıllar', altKategori: 'Tatlı',
    aciklama: 'Yulaf, bal ve kuru meyveyle hazırlanan ev yapımı atıştırmalık.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'ev yapımı', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍪', renk: 'bg-amber-100 text-amber-600',
    besinGrubu: 'tahıl', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['yulaf', 'lif', 'tam tahıl'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Kurabiye ama sağlıklı! Yulaf içeren kurabiyeler uzun süre tok tutar ve lezzetlidir. 🍪',
    veliNotu: 'Beta-glukan içeren yulaf, kolesterol düşürücü etki gösterir. Az şekerle yapılan ev yapımı versiyonu tercih edilmeli.',
    ogretmenSorusu: 'Yulaf ezmesi ve yulaf unu aynı mı? İkisinin farkını araştıralım.',
    alternatifler: ['Paketli Kek', 'Çikolatalı Gofret'],
    porsiyonNotu: '2-3 küçük kurabiye',
    riskEtiketi: 'normal',
    puan: 7,
    rozet: 'Tam Tahıl Enerjisi'
  },
  {
    id: 29, ad: 'Kefir', kategori: 'Süt Ürünleri', altKategori: 'İçecek',
    aciklama: 'Bağırsak dostu, ekşimsi ve besleyici fermente içecek.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥛', renk: 'bg-blue-100 text-blue-600',
    besinGrubu: 'süt', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['probiyotik', 'kalsiyum', 'protein'],
    renkGrubu: 'beyaz',
    cocukMesaji: 'Kefir içinde milyonlarca dost bakteri var! Sindirim sisteminizi koruyan kahraman. 🦠✨',
    veliNotu: 'Kefir, yoğurttan daha yüksek probiyotik içerir. Bağırsak florası ve bağışıklık için değerlidir.',
    ogretmenSorusu: 'Fermente besinler nedir? Yoğurt, kefir ve turşu nasıl yapılır?',
    alternatifler: [],
    porsiyonNotu: '1 küçük şişe (200 ml)',
    riskEtiketi: 'normal',
    puan: 9,
    rozet: 'Protein Gücü'
  },
  {
    id: 30, ad: 'Zeytin', kategori: 'Protein', altKategori: 'Bitkisel',
    aciklama: 'Akdeniz diyetinin vazgeçilmezi, sağlıklı yağ kaynağı.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🫒', renk: 'bg-green-100 text-green-700',
    besinGrubu: 'protein', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['sağlıklı yağ', 'E vitamini', 'antioksidan'],
    renkGrubu: 'yeşil',
    cocukMesaji: 'Zeytin Akdeniz\'in mucizesi! Az miktarı bile kalp ve beyin için çok faydalı. 🫒',
    veliNotu: 'Tekli doymamış yağ asidi ve antioksidan içeriği yüksek. Tuzlu olabileceğinden az miktarda tüketilmeli.',
    ogretmenSorusu: 'Türkiye\'de hangi bölgeler zeytin üretir? Haritaya bakalım.',
    alternatifler: [],
    porsiyonNotu: '5-6 adet zeytin',
    riskEtiketi: 'tuzlu',
    puan: 8,
    rozet: 'Renkli Seçim'
  },
  {
    id: 31, ad: 'Ton Balıklı Sandviç', kategori: 'Karışık', altKategori: 'Öğün',
    aciklama: 'Omega-3 zengini ton balığıyla hazırlanmış doyurucu öğün.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥪', renk: 'bg-blue-100 text-blue-600',
    besinGrubu: 'karma', enerjiTipi: 'uzun süreli enerji',
    besinEtiketleri: ['omega-3', 'protein', 'tam tahıl'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Ton balığı denizin hediyesi! Beynini güçlendiren omega-3 ile dolu bir sandviç. 🐟🥪',
    veliNotu: 'Ton balığı yüksek protein ve omega-3 içerir. Tam tahıl ekmekle hazırlanırsa mükemmel bir öğün olur.',
    ogretmenSorusu: 'Ton balığı nerede avlanır? Deniz ürünleri ekonomisi hakkında ne biliyoruz?',
    alternatifler: [],
    porsiyonNotu: '1 sandviç',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Protein Gücü'
  },
  {
    id: 32, ad: 'Tavuklu Sandviç', kategori: 'Karışık', altKategori: 'Öğün',
    aciklama: 'Izgara tavukla hazırlanmış, protein deposu sandviç.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'ev yapımı', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🥪', renk: 'bg-orange-100 text-orange-600',
    besinGrubu: 'karma', enerjiTipi: 'kas-destek',
    besinEtiketleri: ['protein', 'az yağ', 'B vitamini'],
    renkGrubu: 'kahverengi',
    cocukMesaji: 'Tavuk göğsü düşük yağlı, yüksek proteinli süper besin! Kasların büyümek için seve seve yer. 💪',
    veliNotu: 'Işlenmemiş haşlanmış veya ızgara tavuk göğsü, çocuklar için mükemmel protein kaynağıdır.',
    ogretmenSorusu: 'Tavuğun hangi parçası en çok protein içerir? Araştıralım!',
    alternatifler: [],
    porsiyonNotu: '1 sandviç',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Protein Gücü'
  },
  {
    id: 33, ad: 'Meyveli Yoğurt', kategori: 'Süt Ürünleri', altKategori: 'Süt',
    aciklama: 'Taze meyve eklenmiş, hem tatlı hem besleyici yoğurt.',
    saglikDurumu: 'çok sağlıklı', islenmeDurumu: 'az işlenmiş', mevsimindeMi: true, yerelMi: true, onerilenMi: true,
    ikon: '🍓', renk: 'bg-pink-100 text-pink-600',
    besinGrubu: 'süt', enerjiTipi: 'denge-destek',
    besinEtiketleri: ['kalsiyum', 'protein', 'vitamin C'],
    renkGrubu: 'pembe',
    cocukMesaji: 'Yoğurda meyve ekleyince hem süper vitamin hem kalsiyum alıyorsun! İki kahraman bir arada. 🍓🥣',
    veliNotu: 'Taze meyve eklenmiş yoğurt, hem probiyotik hem C vitamini sağlar. Hazır tatlandırılmış yoğurtlar yerine sade yoğurda taze meyve eklenmesi önerilir.',
    ogretmenSorusu: 'Hangi meyveler yoğurtla daha iyi gider? Denemeler yapalım!',
    alternatifler: [],
    porsiyonNotu: '1 küçük kase',
    riskEtiketi: 'normal',
    puan: 8,
    rozet: 'Renkli Seçim'
  },
  {
    id: 34, ad: 'Hazır Bisküvi', kategori: 'Sınırlı', altKategori: 'Tatlı',
    aciklama: 'Pratik ama çok işlenmiş; içindeki katkılara dikkat!',
    saglikDurumu: 'sınırlı', islenmeDurumu: 'çok işlenmiş', mevsimindeMi: false, yerelMi: false, onerilenMi: false,
    ikon: '🫙', renk: 'bg-orange-100 text-orange-400',
    besinGrubu: 'sınırlı', enerjiTipi: 'hızlı enerji',
    besinEtiketleri: ['çok işlenmiş', 'şekerli', 'katkılı'],
    renkGrubu: 'sarı',
    cocukMesaji: 'Bisküvi bazen olabilir! Yanına bir meyve ekleyince çok daha dengeli bir atıştırmalık olur. 🍎',
    veliNotu: 'Yüksek şeker, hidrojene yağ ve katkı maddesi içerebilir. Yulaflı kurabiye veya taze meyve alternatif olarak önerilir.',
    ogretmenSorusu: 'Bisküvinin ambalajındaki içerik listesini okuyalım. Hangi maddeler tanımadığımız?',
    alternatifler: ['Yulaflı Kurabiye', 'Ev Yapımı Poğaça', 'Taze meyve'],
    porsiyonNotu: '2-3 adet bisküvi',
    riskEtiketi: 'çok işlenmiş',
    puan: 2,
    rozet: 'Bazenlik Ürün'
  }
];

// ─────────────────────────────────────────────────────────
// TIPS DİZİSİ
// ─────────────────────────────────────────────────────────
const TIPS = [
  { ikon: '🍎', mesaj: 'Elmayı kabuklu yemek daha fazla lif ve vitamin almanı sağlar!', tip: 'öğrenci' },
  { ikon: '💧', mesaj: 'Su içmek beyninin daha hızlı çalışmasına yardımcı olur. Bugün kaç bardak içtin?', tip: 'su' },
  { ikon: '🌈', mesaj: 'Çantanda ne kadar çok renk varsa, o kadar çok farklı vitamin alıyorsun!', tip: 'renkli' },
  { ikon: '🧠', mesaj: 'Ceviz ve fındık, beyin sağlığı için harika. Bugün bir avuç dene!', tip: 'öğrenci' },
  { ikon: '🥕', mesaj: 'Renkli sebzeler göz sağlığını korur. Havuç, domates ve ıspanak harika üçlüdür.', tip: 'renkli' },
  { ikon: '⚡', mesaj: 'Tam tahıl ekmeği beyaz ekmekten çok daha uzun süre seni tok ve enerjik tutar.', tip: 'öğrenci' },
  { ikon: '🍓', mesaj: 'Meyveler doğal şekeri olan tatlılar! Çikolata yerine meyve seçince hem tatlı hem sağlıklı olursun.', tip: 'öğrenci' },
  { ikon: '💧', mesaj: 'Susadığında dikkatini toplamak zorlaşır. Su şişeni her zaman yanında taşı!', tip: 'su' },
  { ikon: '👨‍👩‍👧', mesaj: 'Veli İpucu: Çocuğunuzla birlikte çantayı hazırlamak, sağlıklı seçim alışkanlığı kazandırır.', tip: 'veli' },
  { ikon: '🥜', mesaj: 'Kuruyemişler küçük ama çok güçlü! Az miktarı bile uzun süre enerji verir.', tip: 'öğrenci' },
  { ikon: '🌿', mesaj: 'Yerel ve mevsiminde besinler hem daha taze hem daha besleyici olur.', tip: 'veli' },
  { ikon: '💧', mesaj: 'Çocuklar günde 6-8 bardak su içmeli. Okul çantasına her zaman su şişesi koyun.', tip: 'su' },
  { ikon: '🍇', mesaj: 'Kuru meyvelerde demir yüksektir; ama taze meyveyle değiştirmek daha iyi olur!', tip: 'renkli' },
  { ikon: '🥚', mesaj: 'Haşlanmış yumurta pratik ve çok besleyici. Sabah önceden hazırlayıp çantaya koyabilirsin.', tip: 'öğrenci' },
  { ikon: '🏃', mesaj: 'Kahvaltı yapmak konsantrasyon ve spor performansını artırır. Asla atlama!', tip: 'öğrenci' },
];

// ─────────────────────────────────────────────────────────
// AKILLI ANALİZ FONKSİYONU
// ─────────────────────────────────────────────────────────
function analyzeBag(bag) {
  if (bag.length === 0) {
    return {
      score: 0, stars: 1, levelTitle: 'Henüz Başlamadın',
      strengths: [], missingGroups: ['su', 'meyve-sebze', 'protein', 'tahıl'],
      gentleWarnings: [], nextSuggestion: 'Su veya taze bir meyveyle başlayabilirsin!',
      badges: [], colorVariety: 0, processingLevel: { dogal: 0, azIslenmis: 0, cokIslenmis: 0 },
      childSummary: 'Çantan henüz boş. Hadi dolduralım!',
      parentSummary: 'Henüz besin seçilmedi.'
    };
  }

  const hasWater = bag.some(f => f.ad === 'Su' || (f.besinGrubu === 'içecek' && f.riskEtiketi === 'normal'));
  const hasFruitVeg = bag.some(f => f.besinGrubu === 'meyve-sebze');
  const hasProtein = bag.some(f => f.besinGrubu === 'protein' || f.besinGrubu === 'süt');
  const hasGrain = bag.some(f => f.besinGrubu === 'tahıl' || f.besinGrubu === 'karma');
  const hasLimited = bag.some(f => f.besinGrubu === 'sınırlı');
  const limitedCount = bag.filter(f => f.besinGrubu === 'sınırlı').length;
  const totalCount = bag.length;

  // Renk çeşitliliği
  const colors = [...new Set(bag.map(f => f.renkGrubu).filter(Boolean))];
  const colorVariety = colors.length;

  // İşlenme düzeyi
  const dogal = bag.filter(f => f.islenmeDurumu === 'doğal' || f.islenmeDurumu === 'ev yapımı').length;
  const azIslenmis = bag.filter(f => f.islenmeDurumu === 'az işlenmiş').length;
  const cokIslenmis = bag.filter(f => f.islenmeDurumu === 'çok işlenmiş').length;
  const processingLevel = { dogal, azIslenmis, cokIslenmis };

  // Puan hesaplama
  let score = 0;
  if (hasWater) score += 20;
  if (hasFruitVeg) score += 20;
  if (hasProtein) score += 20;
  if (hasGrain) score += 15;
  score += Math.min(colorVariety * 4, 12);
  score += Math.min(dogal * 3, 9);
  score -= limitedCount * 8;
  score = Math.max(0, Math.min(100, score));

  // Yıldız
  let stars = 1;
  if (score >= 20) stars = 2;
  if (score >= 45) stars = 3;
  if (score >= 65) stars = 4;
  if (score >= 82) stars = 5;

  // Seviye başlığı
  let levelTitle = 'Başlangıç Şefi';
  if (stars === 2) levelTitle = 'Enerji Kaşifi';
  if (stars === 3) levelTitle = 'Denge Ustası';
  if (stars === 4) levelTitle = 'Renkli Çanta Şefi';
  if (stars === 5) levelTitle = 'Süper Beslenme Şampiyonu';

  // Güçlü yönler
  const strengths = [];
  if (hasWater) strengths.push('Çantanda su var — vücudun teşekkür eder! 💧');
  if (hasFruitVeg) strengths.push('Taze meyve veya sebze seçtin — renkli ve sağlıklı! 🥕');
  if (hasProtein) strengths.push('Protein kaynağın var — kasların güçlenecek! 💪');
  if (hasGrain) strengths.push('Tahıl veya ekmek seçtin — uzun süreli enerjin olacak! 🌾');
  if (colorVariety >= 3) strengths.push(`${colorVariety} farklı renk grubu seçtin — gökkuşağı çantası! 🌈`);
  if (dogal >= 2) strengths.push('Doğal veya ev yapımı besinler seçtin — harika! 🌿');

  // Eksik gruplar
  const missingGroups = [];
  if (!hasWater) missingGroups.push('su');
  if (!hasFruitVeg) missingGroups.push('meyve / sebze');
  if (!hasProtein) missingGroups.push('protein');
  if (!hasGrain) missingGroups.push('tahıl / ekmek');

  // Nazif uyarılar
  const gentleWarnings = [];
  if (limitedCount >= 2) gentleWarnings.push('Birkaç "bazen" ürün var; yanlarına taze bir seçim eklersen denge güzelleşir.');
  if (cokIslenmis >= 2) gentleWarnings.push('Çok işlenmiş ürünleri doğal alternatiflerle dengelemeyi deneyebilirsin.');
  if (!hasWater) gentleWarnings.push('Su çantanı tamamlar; vücudun en iyi arkadaşını ekleyelim!');

  // Sıradaki öneri
  let nextSuggestion = 'Çantana su eklemek harika bir başlangıç olur!';
  if (hasWater && !hasFruitVeg) nextSuggestion = 'Renkli bir meyve veya sebze ekleyerek çantana renk katabilirsin!';
  else if (hasWater && hasFruitVeg && !hasProtein) nextSuggestion = 'Peynir, yumurta veya ceviz gibi bir protein kaynağı ekleyebilirsin.';
  else if (hasWater && hasFruitVeg && hasProtein && !hasGrain) nextSuggestion = 'Tam buğday ekmeği veya lavaş eklersen enerjin gün boyu sürer!';
  else if (score >= 80) nextSuggestion = 'Çantan çok dengeli! Belki farklı renkte bir sebze ekleyebilirsin. 🌈';

  // Rozetler
  const badges = [];
  if (hasWater) badges.push({ ad: 'Su Kahramanı', ikon: '💧' });
  if (hasProtein) badges.push({ ad: 'Protein Gücü', ikon: '💪' });
  if (colorVariety >= 3) badges.push({ ad: 'Renkli Seçim', ikon: '🌈' });
  if (hasGrain) badges.push({ ad: 'Tam Tahıl Enerjisi', ikon: '🌾' });
  if (score >= 80) badges.push({ ad: 'Denge Şampiyonu', ikon: '⭐' });
  if (dogal >= 3) badges.push({ ad: 'Doğal Beslenme', ikon: '🌿' });

  // Özet metinler
  const childSummary = score >= 80
    ? `Vay be! ${stars} yıldızlı bir çanta hazırladın. Gerçek bir ${levelTitle} oldun! 🏆`
    : score >= 50
    ? `İyi gidiyorsun! ${levelTitle} unvanını kazandın. Küçük eklemelerle daha da güzel olabilir. ✨`
    : `Başlangıç tamam! Eksik grupları ekleyerek yıldızlarını artırabilirsin. 💪`;

  const parentSummary = score >= 80
    ? `Çantanız dengeli bir beslenme örüntüsü gösteriyor. Su, renkli sebze/meyve, protein ve tahıl dengesi iyi kurulmuş.`
    : `Çanta geliştirilmeye açık. ${missingGroups.join(', ')} eklenmesi beslenme dengesini güçlendirecektir.`;

  return {
    score, stars, levelTitle, strengths, missingGroups, gentleWarnings,
    nextSuggestion, badges, colorVariety, processingLevel,
    childSummary, parentSummary,
    hasWater, hasFruitVeg, hasProtein, hasGrain, limitedCount
  };
}

// ─────────────────────────────────────────────────────────
// AKILLI GERİ BİLDİRİM FONKSİYONU
// ─────────────────────────────────────────────────────────
function getSmartFeedback(bag) {
  if (bag.length === 0) return "Şef önlüğünü taktın! Önce sana enerji verecek bir ana besin seçelim. 👩‍🍳";

  const a = analyzeBag(bag);
  const limitedRatio = a.limitedCount / bag.length;

  if (limitedRatio >= 0.5) return "Tatlı/tuzlu ürünler bazen olabilir. Bugün yanına taze bir renk ekleyerek dengeyi güçlendirelim. 🍎";
  if (!a.hasWater) return "Çantan güzel şekilleniyor. Bir bardak su kahramanı da eklersek vücudun çok daha mutlu olur. 💧";
  if (!a.hasProtein) return "Enerjin var; şimdi kaslarını destekleyecek peynir, yumurta, yoğurt veya ceviz gibi bir seçim ekleyebiliriz. 💪";
  if (!a.hasFruitVeg) return "Güzel gidiyorsun! Renkli bir meyve veya sebze eklersen çantan gökkuşağına dönüşür. 🌈";
  if (!a.hasGrain) return "Uzun süre tok kalmak için tam buğday ekmeği veya ev yapımı sandviç iyi bir tamamlayıcı olabilir. 🌾";
  if (a.score >= 80) return "Bu çanta tam bir okul günü dostu: su, enerji, renk ve güç dengesi iyi görünüyor! 🏆";
  return `Harika ilerliyorsun! ${a.nextSuggestion}`;
}

// ─────────────────────────────────────────────────────────
// OPSİYONEL API HAZIRLIĞI (Gelecek entegrasyon iskeleti)
// ─────────────────────────────────────────────────────────
async function getAIFeedbackFromAPI(bag, analysis) {
  // Optional future integration
  // Uncomment and configure when API key is available
  //
  // const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=API_KEY', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ contents: [{ parts: [{ text: `Çanta analizi: ${JSON.stringify(analysis)}` }] }] })
  // });
  //
  // Must return safe JSON:
  // {
  //   childMessage: string,
  //   parentNote: string,
  //   teacherPrompt: string,
  //   nextSuggestion: string
  // }

  // Fallback to local analysis
  return {
    childMessage: analysis.childSummary,
    parentNote: analysis.parentSummary,
    teacherPrompt: `Öğrencilerin beslenme çantaları analiz edildi. Skor: ${analysis.score}/100. Eksik gruplar: ${analysis.missingGroups.join(', ')}.`,
    nextSuggestion: analysis.nextSuggestion
  };
}

// ─────────────────────────────────────────────────────────
// ANA UYGULAMA
// ─────────────────────────────────────────────────────────
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [waterGlasses, setWaterGlasses] = useState(0);
  const [bag, setBag] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [todayTip, setTodayTip] = useState(TIPS[0]);

  // Su verisi localStorage
  useEffect(() => {
    const savedWater = localStorage.getItem('dijital_canta_su');
    if (savedWater) {
      const savedDate = localStorage.getItem('dijital_canta_tarih');
      const today = new Date().toLocaleDateString();
      if (savedDate === today) {
        setWaterGlasses(parseInt(savedWater, 10));
      } else {
        localStorage.setItem('dijital_canta_tarih', today);
        setWaterGlasses(0);
      }
    } else {
      localStorage.setItem('dijital_canta_tarih', new Date().toLocaleDateString());
    }
    // Günün ipucu
    const dayIndex = new Date().getDate() % TIPS.length;
    setTodayTip(TIPS[dayIndex]);
  }, []);

  useEffect(() => {
    localStorage.setItem('dijital_canta_su', waterGlasses.toString());
  }, [waterGlasses]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(e => console.log(e));
    } else {
      if (document.exitFullscreen) document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  // ── ALT NAVIGASYON ──────────────────────────────────────
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50">
      <button onClick={() => setCurrentScreen('home')} className={`p-2 transition-colors ${currentScreen === 'home' ? 'text-orange-500' : 'text-slate-400'}`}>
        <Home size={24} />
      </button>
      <button onClick={() => setCurrentScreen('learn')} className={`p-2 transition-colors ${currentScreen === 'learn' ? 'text-orange-500' : 'text-slate-400'}`}>
        <Search size={24} />
      </button>
      <div onClick={() => { setCurrentScreen('pack'); setShowResult(false); }}
        className="bg-orange-500 p-3 rounded-full -mt-10 shadow-lg shadow-orange-200 text-white cursor-pointer active:scale-90 transition-transform" title="Çantamı Hazırla">
        <Plus size={28} />
      </div>
      <button onClick={() => setCurrentScreen('games')} className={`p-2 transition-colors ${currentScreen === 'games' ? 'text-purple-500' : 'text-slate-400'}`}>
        <Gamepad2 size={24} />
      </button>
      <button onClick={() => setCurrentScreen('parents')} className={`p-2 transition-colors ${currentScreen === 'parents' ? 'text-orange-500' : 'text-slate-400'}`}>
        <User size={24} />
      </button>
    </div>
  );

  const Header = ({ title, onBack }) => (
    <div className="flex items-center gap-4 mb-6 animate-in fade-in slide-in-from-top-2">
      <button onClick={onBack} className="p-2 bg-white rounded-full shadow-sm text-slate-500 active:scale-95">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h2>
    </div>
  );

  // ── 1. ANA SAYFA ────────────────────────────────────────
  const HomeScreen = () => (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="bg-orange-500 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-orange-100">
        <div className="relative z-10">
          <ChefHat size={48} className="mb-4 text-orange-100 opacity-90" />
          <h1 className="text-3xl font-bold leading-tight tracking-tight">Mutfakta <br /> Şef Sensin!</h1>
          <p className="text-orange-100 mt-2 font-medium opacity-90">Kendi beslenme çantanı hazırla!</p>
        </div>
        <div className="absolute -right-4 -top-4 w-32 h-32 bg-orange-400 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute right-12 bottom-0 w-20 h-20 bg-orange-600 rounded-full opacity-30 blur-xl"></div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div onClick={() => setCurrentScreen('learn')} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center text-center gap-2 group active:scale-95 transition-transform cursor-pointer">
          <div className="bg-green-100 p-3 rounded-2xl text-green-600"><BookOpen size={24} /></div>
          <span className="text-[12px] font-bold text-slate-600">Eğitim</span>
        </div>

        <div onClick={() => setCurrentScreen('water')} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center text-center gap-2 relative overflow-hidden group cursor-pointer active:scale-95 transition-transform">
          <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600 z-10"><Droplets size={24} /></div>
          <div className="flex items-center gap-1 z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))} className="text-cyan-300 hover:text-cyan-500"><MinusCircle size={14} /></button>
            <span className="text-sm font-black text-slate-700">{waterGlasses}</span>
            <button onClick={() => setWaterGlasses(waterGlasses + 1)} className="text-cyan-400 hover:text-cyan-600"><PlusCircle size={14} /></button>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bardak</span>
        </div>

        <div onClick={() => setCurrentScreen('games')} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center text-center gap-2 active:scale-95 transition-transform cursor-pointer">
          <div className="bg-purple-100 p-3 rounded-2xl text-purple-600"><Gamepad2 size={24} /></div>
          <span className="text-[12px] font-bold text-slate-600">Oyunlar</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div onClick={() => setCurrentScreen('parents')} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform cursor-pointer hover:shadow-md">
          <div className="bg-slate-100 text-slate-600 p-4 rounded-2xl"><Users size={24} /></div>
          <span className="font-bold text-slate-700 leading-tight">Veli Köşesi</span>
        </div>
        <div onClick={() => setCurrentScreen('teachers')} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-transform cursor-pointer hover:shadow-md">
          <div className="bg-indigo-100 text-indigo-600 p-4 rounded-2xl"><GraduationCap size={24} /></div>
          <span className="font-bold text-slate-700 leading-tight">Öğretmenler</span>
        </div>
      </div>

      {/* Günün İpucu — Dinamik */}
      <div className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-50 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800">Günün İpucu</h3>
          <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full capitalize">{todayTip.tip}</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">{todayTip.ikon}</div>
          <div className="flex-1">
            <p className="text-sm text-slate-600 font-medium">{todayTip.mesaj}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // ── 2. BESİNLERİ TANI ─────────────────────────────────
  const LearnScreen = () => {
    const [filter, setFilter] = useState('Tümü');
    const categories = ['Tümü', 'Sebze Meyve', 'Protein', 'Süt Ürünleri', 'Tahıllar', 'İçecekler', 'Karışık', 'Sınırlı'];
    const filteredFoods = filter === 'Tümü' ? FOODS : FOODS.filter(f => f.kategori === filter);

    const etiketRengi = (etiket) => {
      if (['protein', 'kas-destek'].includes(etiket)) return 'bg-orange-100 text-orange-700';
      if (['lif', 'tam tahıl', 'yulaf'].includes(etiket)) return 'bg-amber-100 text-amber-700';
      if (['kalsiyum', 'D vitamini', 'B12', 'probiyotik'].includes(etiket)) return 'bg-blue-100 text-blue-700';
      if (['vitamin C', 'beta-karoten', 'antioksidan', 'likopen'].includes(etiket)) return 'bg-green-100 text-green-700';
      if (['su', 'hidrasyon'].includes(etiket)) return 'bg-cyan-100 text-cyan-700';
      if (['şekerli', 'çok işlenmiş', 'tuzlu', 'katkılı'].includes(etiket)) return 'bg-pink-100 text-pink-700';
      if (['omega-3', 'sağlıklı yağ', 'E vitamini'].includes(etiket)) return 'bg-purple-100 text-purple-700';
      return 'bg-slate-100 text-slate-600';
    };

    return (
      <div className="flex flex-col animate-in fade-in slide-in-from-right-4 pb-10">
        <Header title="Besinleri Tanı" onBack={() => setCurrentScreen('home')} />
        <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-6 px-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-bold text-sm transition-colors ${filter === cat ? 'bg-orange-500 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 mt-2">
          {filteredFoods.map(food => (
            <div key={food.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${food.renk}`}>
                {food.ikon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-slate-800 text-lg">{food.ad}</h4>
                  {food.onerilenMi
                    ? <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase shrink-0">Tavsiye</span>
                    : <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-1 rounded-full font-bold uppercase shrink-0">Bazen</span>
                  }
                </div>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{food.aciklama}</p>

                {/* Besin etiketleri */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {food.besinEtiketleri && food.besinEtiketleri.map(etiket => (
                    <span key={etiket} className={`text-[10px] px-2 py-0.5 rounded-lg font-semibold ${etiketRengi(etiket)}`}>{etiket}</span>
                  ))}
                  {food.mevsimindeMi && <span className="text-[10px] bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-lg font-semibold">mevsiminde</span>}
                </div>

                {/* Çantada ne işe yarar */}
                {food.cocukMesaji && (
                  <p className="text-[11px] text-slate-400 mt-2 italic leading-snug">📌 {food.cocukMesaji}</p>
                )}

                {/* Alternatif — sadece sınırlı ürünlerde */}
                {food.alternatifler && food.alternatifler.length > 0 && (
                  <div className="mt-2 bg-orange-50 rounded-xl px-3 py-2">
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wide">Alternatif: </span>
                    <span className="text-[11px] text-orange-700">{food.alternatifler.join(', ')}</span>
                  </div>
                )}

                {food.porsiyonNotu && (
                  <span className="inline-block mt-1 text-[10px] text-slate-400 font-medium">📦 {food.porsiyonNotu}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ── 3. ÇANTAMI HAZIRLA ─────────────────────────────────
  const PackScreen = () => {
    const toggleItem = (food) => {
      if (bag.find(item => item.id === food.id)) {
        setBag(bag.filter(item => item.id !== food.id));
      } else {
        if (bag.length < 8) {
          setBag([...bag, food]);
        } else {
          showToast('Çantan doldu! Yeni bir şey eklemek için önce birini çıkar. 🎒');
        }
      }
    };

    if (showResult) {
      return <EvaluationScreen bag={bag} onReset={() => { setBag([]); setShowResult(false); }} onBack={() => setShowResult(false)} />;
    }

    return (
      <div className="flex flex-col h-[85vh] animate-in fade-in slide-in-from-right-4">
        <Header title="Çantamı Hazırla" onBack={() => setCurrentScreen('home')} />

        {/* Toast Mesaj */}
        {toastMsg && (
          <div className="bg-orange-100 border border-orange-200 text-orange-800 text-sm font-medium rounded-2xl px-4 py-3 mb-3 animate-in fade-in">
            {toastMsg}
          </div>
        )}

        {/* Asistan Mesajı */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4 flex items-start gap-3">
          <div className="text-2xl mt-1">👩‍🍳</div>
          <p className="text-blue-800 font-medium text-sm leading-snug">{getSmartFeedback(bag)}</p>
        </div>

        {/* Besin Listesi */}
        <div className="flex-1 overflow-y-auto bg-white rounded-3xl p-4 shadow-sm border border-slate-100 mb-4">
          <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">Besinler (Tıkla ve Ekle)</h3>
          <div className="grid grid-cols-3 gap-3">
            {FOODS.map(food => {
              const isSelected = bag.some(item => item.id === food.id);
              return (
                <div key={food.id} onClick={() => toggleItem(food)}
                  className={`relative p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1 cursor-pointer transition-all active:scale-95 ${isSelected ? 'bg-green-100 border-2 border-green-500 shadow-inner' : food.besinGrubu === 'sınırlı' ? 'bg-pink-50 border-2 border-transparent hover:bg-pink-100' : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'}`}>
                  <div className="text-3xl">{food.ikon}</div>
                  <span className="text-[10px] font-bold text-slate-700 leading-tight mt-1">{food.ad}</span>
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1"><Check size={12} /></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Çantam */}
        <div className="bg-orange-500 rounded-t-[32px] p-6 text-white -mx-6 px-6 pb-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-black text-xl flex items-center gap-2"><ShoppingBag size={20} /> Benim Çantam</h3>
            <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-bold">{bag.length} / 8</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {bag.length === 0 ? (
              <div className="text-orange-200 text-sm font-medium italic py-4">Çantan şu an boş...</div>
            ) : (
              bag.map(item => (
                <div key={item.id} className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-md animate-in zoom-in relative" onClick={() => toggleItem(item)}>
                  {item.ikon}
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-80"><Minus size={12} /></div>
                </div>
              ))
            )}
            {[...Array(Math.max(0, 8 - bag.length))].map((_, i) => (
              <div key={`empty-${i}`} className="w-16 h-16 shrink-0 border-2 border-dashed border-orange-300 rounded-2xl flex items-center justify-center text-orange-300"><Plus size={20} /></div>
            ))}
          </div>
          <button onClick={() => setShowResult(true)} disabled={bag.length === 0}
            className={`w-full mt-6 py-4 rounded-2xl font-black text-lg flex justify-center items-center transition-all ${bag.length > 0 ? 'bg-white text-orange-600 shadow-xl shadow-orange-700/50 active:scale-95' : 'bg-orange-400 text-orange-200 cursor-not-allowed'}`}>
            Çantamı Tamamla!
          </button>
        </div>
      </div>
    );
  };

  // ── 4. DEĞERLENDİRME ─────────────────────────────────
  const EvaluationScreen = ({ bag, onReset, onBack }) => {
    const a = analyzeBag(bag);

    const kartlar = [
      {
        baslik: 'Su Dengesi', ikon: '💧',
        durum: a.hasWater,
        olumlu: 'Su ekledin — vücudun tam güçte! 💧',
        oneri: 'Su çantanın olmazsa olmazı; bir dahaki sefere ekleyelim.'
      },
      {
        baslik: 'Renkli Meyve/Sebze', ikon: '🌈',
        durum: a.hasFruitVeg,
        olumlu: `${a.colorVariety} farklı renk grubu — gökkuşağı çantası! 🌈`,
        oneri: 'Taze bir meyve veya sebze ekleyerek vitaminleri artırabilirsin.'
      },
      {
        baslik: 'Protein Desteği', ikon: '💪',
        durum: a.hasProtein,
        olumlu: 'Protein kaynağın var — kasların büyüyecek! 💪',
        oneri: 'Peynir, yumurta, yoğurt veya ceviz eklersen kasların güçlenir.'
      },
      {
        baslik: 'Tam Tahıl / Uzun Enerji', ikon: '🌾',
        durum: a.hasGrain,
        olumlu: 'Tahıl seçtin — gün boyu enerjin sürecek! 🌾',
        oneri: 'Tam buğday ekmeği veya lavaş eklersen enerjin uzun sürer.'
      },
      {
        baslik: 'İşlenmiş Ürün Dengesi', ikon: '⚖️',
        durum: a.limitedCount === 0,
        olumlu: 'Doğal ve az işlenmiş besinler seçtin — tebrikler! 🌿',
        oneri: 'İşlenmiş ürünlerin yanına taze bir seçim ekleyerek dengeyi güçlendirebilirsin.'
      },
      {
        baslik: 'Çeşitlilik', ikon: '🎨',
        durum: bag.length >= 4,
        olumlu: `${bag.length} farklı besin seçtin — çok çeşitli bir çanta! 🎨`,
        oneri: 'Daha fazla çeşit ekleyerek farklı vitamin ve mineraller alabilirsin.'
      }
    ];

    const dinamikBaslik = a.stars >= 5 ? 'Süper Şef Çantası!' : a.stars >= 4 ? 'Harika Seçimler!' : a.stars >= 3 ? 'Güzel Seçimlerin Var!' : a.stars >= 2 ? 'İyi Başlangıç!' : 'Şefe İlk Adım!';

    return (
      <div className="flex flex-col animate-in slide-in-from-bottom-8 pb-10">
        <Header title="Çantanı İnceleyelim" onBack={onBack} />

        {/* Yıldız ve skor */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 text-center mb-4">
          <div className="text-6xl mb-3 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < a.stars ? 'text-yellow-400' : 'text-slate-200 grayscale opacity-40'}>⭐</span>
            ))}
          </div>
          <div className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-1 rounded-full mb-3">{a.levelTitle}</div>
          <h2 className="text-2xl font-black text-slate-800 mb-1">{dinamikBaslik}</h2>
          <p className="text-slate-500 text-sm font-medium mb-2">{a.childSummary}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex-1 bg-slate-100 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full transition-all duration-700" style={{ width: `${a.score}%` }}></div>
            </div>
            <span className="text-sm font-black text-orange-600">{a.score}/100</span>
          </div>
        </div>

        {/* Çanta Karnesi */}
        <div className="bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 mb-4">
          <h3 className="font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
            <Award size={18} className="text-orange-500" /> Çanta Karnesi
          </h3>
          <div className="space-y-3">
            {kartlar.map((kart, i) => (
              <div key={i} className={`p-3 rounded-2xl flex items-start gap-3 ${kart.durum ? 'bg-green-50' : 'bg-orange-50'}`}>
                <div className="text-xl">{kart.ikon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{kart.baslik}</span>
                    {kart.durum
                      ? <span className="text-[10px] bg-green-200 text-green-700 px-2 py-0.5 rounded-full font-bold">✓ Tamam</span>
                      : <span className="text-[10px] bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full font-bold">Öneri var</span>
                    }
                  </div>
                  <p className={`text-sm font-medium ${kart.durum ? 'text-green-700' : 'text-orange-700'}`}>
                    {kart.durum ? kart.olumlu : kart.oneri}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sıradaki Öneri */}
        {a.nextSuggestion && (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4 flex items-start gap-3">
            <div className="text-xl">💡</div>
            <div>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">Bir Dahaki Sefere Dene</p>
              <p className="text-blue-800 font-medium text-sm">{a.nextSuggestion}</p>
            </div>
          </div>
        )}

        {/* Kazanılan Rozetler */}
        {a.badges.length > 0 && (
          <div className="bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 mb-4">
            <h3 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
              <Star size={18} className="text-yellow-500" /> Kazandığın Rozetler
            </h3>
            <div className="flex flex-wrap gap-2">
              {a.badges.map((rozet, i) => (
                <div key={i} className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 px-3 py-2 rounded-2xl">
                  <span className="text-lg">{rozet.ikon}</span>
                  <span className="text-sm font-bold text-yellow-700">{rozet.ad}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Veli Özeti (küçük) */}
        <div className="bg-slate-50 rounded-2xl p-4 mb-4">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">Veli Notu</p>
          <p className="text-sm text-slate-600">{a.parentSummary}</p>
        </div>

        <button onClick={onReset} className="w-full bg-slate-800 text-white py-4 rounded-2xl font-black text-lg active:scale-95 transition-transform">
          Yeni Çanta Hazırla
        </button>
      </div>
    );
  };

  // ── 5. SU TAKİBİ ────────────────────────────────────────
  const WaterScreen = () => {
    let message = '';
    let messageColor = 'text-cyan-50';
    if (waterGlasses === 0) { message = 'Bugün ilk su damlasını ekleyerek başlayabilirsin. 💧'; }
    else if (waterGlasses <= 3) { message = `Güzel başlangıç! ${waterGlasses} bardak içtin. Devam et! 👍`; }
    else if (waterGlasses <= 6) { message = 'Vücudun ritmini buluyor! Yarı yola geldin. ⚡'; }
    else if (waterGlasses <= 8) { message = 'Hedefe çok yaklaştın! Neredeyse tamamdın. 🏅'; }
    else { message = 'Su kahramanı rozetini kazandın! Vücudun sana teşekkür ediyor. 🏆'; }

    const barDolu = Math.min(waterGlasses, 8);

    return (
      <div className="flex flex-col animate-in fade-in slide-in-from-right-4 pb-10 h-full">
        <Header title="Günlük Su Takibi" onBack={() => setCurrentScreen('home')} />
        <div className="bg-cyan-500 rounded-[32px] p-8 text-white text-center flex-1 flex flex-col items-center justify-center shadow-xl shadow-cyan-200">
          <div className="text-cyan-100 font-bold uppercase tracking-widest text-sm mb-4">Bugün İçtiğin Su</div>
          <div className="relative mb-8">
            <div className="text-[120px] leading-none drop-shadow-xl select-none">💧</div>
            <div className="absolute inset-0 flex items-center justify-center font-black text-5xl text-white mt-10">
              {waterGlasses}
            </div>
          </div>
          <p className={`font-medium text-cyan-50 text-base mb-8 h-12 flex items-center text-center ${messageColor}`}>{message}</p>
          <div className="flex gap-4">
            <button onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white active:scale-90 transition-transform backdrop-blur">
              <Minus size={32} />
            </button>
            <button onClick={() => setWaterGlasses(waterGlasses + 1)}
              className="w-20 h-20 bg-white text-cyan-500 rounded-full flex items-center justify-center active:scale-90 transition-transform shadow-lg shadow-cyan-600/50">
              <Plus size={40} />
            </button>
          </div>

          {/* Su tracker — maksimum 8 bar dolar, sayı artabilir */}
          <div className="mt-8 flex gap-1 justify-center">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`w-3 h-8 rounded-full transition-all duration-500 ${i < barDolu ? 'bg-white' : 'bg-cyan-600'}`}></div>
            ))}
          </div>
          <p className="text-cyan-100 text-xs mt-3">Hedef: Günde 8 Bardak</p>
          {waterGlasses > 8 && (
            <p className="text-cyan-100 text-xs mt-1 font-bold">🎉 +{waterGlasses - 8} bardak ekstra!</p>
          )}
        </div>
      </div>
    );
  };

  // ── 6. VELİ KÖŞESİ ─────────────────────────────────────
  const ParentsScreen = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 pb-10">
      <Header title="Veli Köşesi" onBack={() => setCurrentScreen('home')} />
      <div className="space-y-4">

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-3"><Info size={20} className="text-blue-500" /> Dengeli Çanta Formülü</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">Dengeli bir beslenme çantası 4 temel grubu içermelidir:</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { ikon: '💧', ad: '1 Su', renk: 'bg-cyan-50 text-cyan-700' },
              { ikon: '🥕', ad: '1 Meyve/Sebze', renk: 'bg-green-50 text-green-700' },
              { ikon: '🥚', ad: '1 Protein', renk: 'bg-orange-50 text-orange-700' },
              { ikon: '🌾', ad: '1 Tam Tahıl', renk: 'bg-amber-50 text-amber-700' },
            ].map(item => (
              <div key={item.ad} className={`flex items-center gap-2 p-2 rounded-xl font-bold text-sm ${item.renk}`}>
                <span className="text-lg">{item.ikon}</span> {item.ad}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3 italic">Not: Özel sağlık durumu varsa lütfen uzman görüşü alın.</p>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"><Info size={20} className="text-green-500" /> Seçim Dili Kullanın</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Çocuğunuza "bunu yeme" demek yerine seçim dili deneyin:</p>
          <div className="mt-3 space-y-2">
            <div className="flex gap-2 text-sm">
              <span className="text-red-400 font-bold shrink-0">✗</span>
              <span className="text-slate-400 line-through">"Cips yeme!"</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-green-500 font-bold shrink-0">✓</span>
              <span className="text-green-700 font-medium">"Ceviz veya leblebi de var, hangisini seçersin?"</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-red-400 font-bold shrink-0">✗</span>
              <span className="text-slate-400 line-through">"Gazlı içecek içme!"</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-green-500 font-bold shrink-0">✓</span>
              <span className="text-green-700 font-medium">"Bugün ayran deneyelim mi, çok ferahlatıcı!"</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"><Info size={20} className="text-orange-500" /> Haftalık Çeşitlilik Önerisi</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">Her gün farklı renkte meyve/sebze koymaya çalışın:</p>
          <div className="flex gap-2 flex-wrap">
            {[
              { gun: 'Pzt', renk: 'kırmızı', ikon: '🍅', bg: 'bg-red-100' },
              { gun: 'Sal', renk: 'turuncu', ikon: '🥕', bg: 'bg-orange-100' },
              { gun: 'Çar', renk: 'sarı', ikon: '🍌', bg: 'bg-yellow-100' },
              { gun: 'Per', renk: 'yeşil', ikon: '🥒', bg: 'bg-green-100' },
              { gun: 'Cum', renk: 'mor', ikon: '🍇', bg: 'bg-purple-100' },
            ].map(item => (
              <div key={item.gun} className={`flex flex-col items-center p-2 rounded-2xl ${item.bg} text-center`}>
                <span className="text-2xl">{item.ikon}</span>
                <span className="text-[10px] font-bold text-slate-600 mt-1">{item.gun}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"><Info size={20} className="text-purple-500" /> Paketli Ürünlere Alternatifler</h3>
          <div className="space-y-2">
            {[
              { paketli: 'Paketli kek', alternatif: 'Ev yapımı az şekerli kurabiye', ikon: '🍪' },
              { paketli: 'Cips', alternatif: 'Leblebi veya tuzsuz kuruyemiş', ikon: '🌰' },
              { paketli: 'Şekerli meyve suyu', alternatif: 'Taze sıkılmış meyve suyu', ikon: '🍊' },
              { paketli: 'Hazır bisküvi', alternatif: 'Tam tahıl ekmek + peynir', ikon: '🧀' },
            ].map(item => (
              <div key={item.paketli} className="flex items-center gap-3 p-2 bg-slate-50 rounded-xl">
                <span className="text-xl">{item.ikon}</span>
                <div>
                  <span className="text-xs text-slate-400 line-through block">{item.paketli}</span>
                  <span className="text-sm font-bold text-green-700">{item.alternatif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-2"><Info size={20} className="text-indigo-500" /> Birlikte Hazırlayın</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Araştırmalar, çocukların kendi hazırladıkları beslenme çantalarındaki gıdaları daha iştahla tükettiğini gösteriyor. "Bugün elma mı koyalım armut mu?" diyerek ona kontrollü seçenekler sunun.</p>
        </div>

      </div>
    </div>
  );

  // ── 7. ÖĞRETMEN KÖŞESİ ─────────────────────────────────
  const TeachersScreen = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 pb-10">
      <Header title="Öğretmen Köşesi" onBack={() => setCurrentScreen('home')} />
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-2xl">
        <p className="text-indigo-800 text-sm font-medium">Bu uygulama sınıf içi "Sağlıklı Yaşam" etkinliklerinde akıllı tahta üzerinden etkileşimli olarak kullanılabilir.</p>
      </div>
      <div className="space-y-4">

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
            <Zap size={18} className="text-yellow-500" /> 10 Dakikalık Sınıf Etkinliği
          </h3>
          <p className="text-sm text-slate-500 mb-3">Öğrenciler kendi sanal çantalarını hazırlasın, ardından gruplar birbirinin çantasını değerlendirsin.</p>
          <div className="space-y-2">
            {['1. Herkes uygulamayı açar ve çantasını hazırlar (3 dk)', '2. Çanta karnesi ekrana yansıtılır (2 dk)', '3. "En dengeli çanta kim?" tartışması (3 dk)', '4. Öğrenciler birbirlerine nazik öneri verir (2 dk)'].map((adim, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="bg-indigo-100 text-indigo-700 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{i + 1}</span>
                <span>{adim.substring(3)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-3">Besin Grubu Eşleştirme Oyunu</h3>
          <p className="text-sm text-slate-600 mb-3">Besinleri gruplarıyla eşleştirin:</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { grup: 'Meyve/Sebze', ikon: '🥕🍎🥒', renk: 'bg-green-50 text-green-700' },
              { grup: 'Protein', ikon: '🥚🧀🥜', renk: 'bg-orange-50 text-orange-700' },
              { grup: 'Süt Ürünleri', ikon: '🥛🧀🥣', renk: 'bg-blue-50 text-blue-700' },
              { grup: 'Tahıllar', ikon: '🍞🫓🌾', renk: 'bg-amber-50 text-amber-700' },
            ].map(item => (
              <div key={item.grup} className={`p-3 rounded-2xl ${item.renk}`}>
                <div className="text-xl mb-1">{item.ikon}</div>
                <div className="text-xs font-bold">{item.grup}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-2">Eleştirel Düşünme Soruları</h3>
          <p className="text-sm text-slate-600 mb-2">Öğrencilerle yargılamadan konuşmak için:</p>
          <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4 italic">
            <li>"Bugün çantanda sana en çok enerji verecek besin sence hangisi?"</li>
            <li>"Su şişeni bugün kaç kez doldurdun?"</li>
            <li>"Eğer çantanı boyasaydın, eksik kalan renk hangisi olurdu?"</li>
            <li>"Bir besin sadece bir gruba mı girer? Yoğurtlu meyve hangi gruba ait?"</li>
            <li>"Akşam yemeğinde ne yersen sabah beslenmen değişir mi?"</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center gap-2">
            <Award size={18} className="text-orange-500" /> Mini Değerlendirme Rubriği
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-2 text-slate-500 font-bold">Kriter</th>
                  <th className="text-center py-2 text-green-600 font-bold">İyi</th>
                  <th className="text-center py-2 text-orange-600 font-bold">Gelişiyor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { kriter: 'Su', iyi: 'Su var', gelisiyor: 'Su yok' },
                  { kriter: 'Çeşitlilik', iyi: '3+ besin grubu', gelisiyor: '1-2 grup' },
                  { kriter: 'Renk Dengesi', iyi: '3+ renk', gelisiyor: '1-2 renk' },
                  { kriter: 'Açıklama', iyi: 'Neden seçtiğini söylüyor', gelisiyor: 'Açıklamıyor' },
                ].map(row => (
                  <tr key={row.kriter}>
                    <td className="py-2 font-bold text-slate-700">{row.kriter}</td>
                    <td className="py-2 text-center text-green-700 bg-green-50 rounded-lg">{row.iyi}</td>
                    <td className="py-2 text-center text-orange-700 bg-orange-50 rounded-lg">{row.gelisiyor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 text-lg mb-2">Sınıf İçi Etkinlikler</h3>
          <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
            <li><strong>Gökkuşağı Tabağı:</strong> Her gün farklı renkte bir meyve getirme görevi verin.</li>
            <li><strong>Su Kahramanları:</strong> Sınıf panosunda her içilen şişe suya bir yıldız ekleyin.</li>
            <li><strong>Sürpriz Kutu:</strong> Gözleri kapalıyken sebze/meyvelere dokunarak ne olduklarını tahmin etme oyunu.</li>
            <li><strong>Etiket Okuma:</strong> Paketli ürünlerin içerik listesini sınıfça okuyun ve bilinmeyenleri araştırın.</li>
          </ul>
        </div>

      </div>
    </div>
  );

  // ── 8. OYUNLAR ─────────────────────────────────────────
  const GamesScreen = () => (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-4 pb-10">
      <Header title="Oyun Köşesi" onBack={() => setCurrentScreen('home')} />
      <p className="text-slate-500 text-sm font-medium mb-4">Eğlenirken sağlıklı beslenmeyi öğrenmeye devam et!</p>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="bg-blue-50 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-blue-500"><Gamepad2 size={32} /></div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-lg leading-tight">Beslenme Çantam</h4>
            <p className="text-xs text-slate-500 font-medium mt-1 mb-3">Sağlıklı Besinler Bulmacası</p>
            <a href="https://wordwall.net/tr/resource/109295540" target="_blank" rel="noopener noreferrer"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
              Hemen Oyna <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="bg-purple-50 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-purple-500"><Sparkles size={32} /></div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-800 text-lg leading-tight">Yapay Zeka Şef</h4>
            <p className="text-xs text-slate-500 font-medium mt-1 mb-3">Gemini ile Beslenme Sohbeti</p>
            <a href="https://g.co/gemini/share/f6f23ca4fb7f" target="_blank" rel="noopener noreferrer"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform">
              Keşfet <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // ── ANA RENDER ─────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 pb-24">
      <button onClick={toggleFullScreen}
        className="fixed top-4 right-4 z-50 p-3 bg-white/90 backdrop-blur rounded-full shadow-md border border-slate-100 text-slate-600 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all"
        title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran Yap'}>
        {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
      </button>

      <div className="max-w-md mx-auto px-6 pt-10 min-h-screen relative pb-6">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'learn' && <LearnScreen />}
        {currentScreen === 'pack' && <PackScreen />}
        {currentScreen === 'water' && <WaterScreen />}
        {currentScreen === 'parents' && <ParentsScreen />}
        {currentScreen === 'teachers' && <TeachersScreen />}
        {currentScreen === 'games' && <GamesScreen />}
      </div>

      <BottomNav />
    </div>
  );
};

export default App;
