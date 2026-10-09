// Velvet & Co. - E-commerce Store Application JS
const API_BASE = '/api/v1';

// Multilingual Translations Dictionary (UZ, RU, EN)
const i18n = {
  uz: {
    top_promo: "Mavsumiy chegirmalar! Barcha $50 dan ortiq xaridlarga yetkazib berish BEPUL",
    top_coupon: "Kupon:",
    top_support: "Qo'llab-quvvatlash",
    nav_home: "Bosh sahifa",
    nav_categories: "Kategoriyalar",
    nav_trending: "Ommabop",
    nav_deal: "Aksiya",
    nav_catalog: "Katalog",
    nav_stores: "Do'konlarimiz",
    search_placeholder: "Kiyim qidirish...",
    hero_badge: "✨ Yangi Mavsum Kolleksiyasi 2026",
    hero_title: "Nafis Uslub & <span>Mukammal</span> Liboslar Dunyosi",
    hero_desc: "Yuqori sifatli tabiiy matolar, zamonaviy bichim va har bir detalga bo'lgan e'tibor. Kundalik va tantanali obrazlar uchun eksklyuziv modellar.",
    hero_btn_shop: "Kolleksiyani ko'rish →",
    hero_btn_deal: "Mavsumiy chegirmalar",
    hero_stat_clients: "Mamnun xaridorlar",
    hero_stat_quality: "Tabiiy matolar",
    hero_stat_delivery: "Tezkor yetkazish",
    hero_float_title: "Yuqori Baholangan Brend",
    hero_float_desc: "4.9 / 5.0 (1,200+ sharhlar)",
    feat_1_title: "Bepul Yetkazib Berish",
    feat_1_desc: "$50 dan ortiq har qanday buyurtmaga",
    feat_2_title: "100% Sifat Kafolati",
    feat_2_desc: "Sertifikatlangan premium materiallar",
    feat_3_title: "14 Kunlik Qaytarish",
    feat_3_desc: "O'lcham to'g'ri kelmasa oson almashtirish",
    feat_4_title: "24/7 Qo'llab-quvvatlash",
    feat_4_desc: "Doimiy yordam va konsultatsiya",
    cat_tag: "Katalog Bo'limlari",
    cat_title: "Kategoriya Bo'yicha Tanlang",
    cat_sub: "O'zingizga mos uslubdagi kiyimlar va aksessuarlarni toping",
    cat_view: "Kolleksiyani ko'rish →",
    trend_tag: "Eng Sara Tanlov",
    trend_title: "Ommabop Liboslar",
    trend_sub: "Mijozlarimiz eng ko'p tanlayotgan va yuqori baholagan liboslar",
    tab_all: "Barchasi",
    tab_featured: "Tavsiya etilgan",
    tab_new: "Yangi kelganlar",
    tab_bestseller: "Top sotilganlar",
    tab_deal: "Katta chegirma",
    deal_badge: "Faqat Bugun Chegirma",
    deal_title: "Kuzgi Maxsus To'plamga 30% Gacha Chegirma!",
    deal_desc: "Cheklangan miqdordagi premium trençkotlar va ipak liboslar uchun eksklyuziv narxlar. Aksiya tugashiga oz vaqt qoldi.",
    deal_btn: "Aksiyadan Foydalanish →",
    catalog_tag: "To'liq Mahsulotlar",
    catalog_title: "Barcha Liboslar Katalogi",
    catalog_sub: "O'zingizga ma'qul narx, o'lcham va kategoriya bo'yicha saralang",
    filter_title: "Filtrlar",
    filter_clear: "Tozalash",
    filter_cat_title: "Kategoriyalar",
    filter_all_cats: "Barcha bo'limlar",
    filter_price_title: "Narx Oralig'i ($)",
    filter_size_title: "O'lcham",
    sort_label: "Saralash:",
    sort_featured: "Tavsiya etilgan",
    sort_price_asc: "Narx: Arzondan qimmatga",
    sort_price_desc: "Narx: Qimmatdan arzonga",
    sort_rating: "Mijozlar reytingi",
    sort_newest: "Yangi qo'shilganlar",
    nav_brands: "Brendlar",
    brands_tag: "Xalqaro Moda Uylari",
    brands_title: "Turkiya & Italiya Brendlari",
    brands_sub: "Italiya nafisligi va Turkiyaning yuqori sifatli to'qimachilik an'analari uyg'unlashgan original liboslar to'plami",
    brand_nav_all: "Barcha Brendlar",
    brand_nav_turkey: "Turk Brendlari",
    brand_nav_italy: "Italiya Brendlari",
    filter_origin_title: "Brend Mamlakati",
    filter_brand_title: "Mashhur Brendlar",
    brand_lbl: "Brend:",
    brand_origin_lbl: "Ishlab chiqarilgan davlat:",
    stores_tag: "Manzillar & Lokatsiyalar",
    stores_title: "Do'konlarimiz & Filiallar",
    stores_sub: "Butiklarimizga tashrif buyuring yoki qo'lda yangi do'kon manzilini kiriting",
    stores_btn_add: "+ Yangi Do'kon Qo'shish",
    store_landmark_lbl: "Mo'ljal:",
    store_hours_lbl: "Ish vaqti:",
    store_phone_lbl: "Telefon:",
    store_btn_map: "Xaritada ko'rish (Google Maps) ↗",
    store_btn_delete: "O'chirish",
    store_modal_title: "Yangi Do'kon Manzilini Kiritish",
    store_modal_sub: "Do'kon nomi, shahar va aniq lokatsiya ma'lumotlarini qo'lda kiriting",
    cart_title: "Xarid Savatingiz",
    cart_empty: "Savat hozircha bo'sh",
    cart_empty_btn: "Xarid qilishni boshlash",
    cart_coupon_btn: "Qo'llash",
    cart_subtotal: "Oraliq jami:",
    cart_discount: "Chegirma:",
    cart_shipping: "Yetkazib berish:",
    cart_total: "Jami summa:",
    cart_checkout_btn: "Rasmiylashtirishga o'tish →",
    checkout_title: "Buyurtmani Rasmiylashtirish",
    checkout_sub: "Yetkazib berish ma'lumotlaringizni to'ldiring",
    checkout_btn: "Buyurtmani tasdiqlash",
    toast_added: "savatga qo'shildi!",
    toast_removed: "Mahsulot savatdan o'chirildi.",
    toast_coupon_empty: "Iltimos, kupon kodini kiriting!",
    toast_store_saved: "Do'kon manzili muvaffaqiyatli saqlandi!",
    toast_store_deleted: "Do'kon muvaffaqiyatli o'chirildi.",
    lang_changed: "Til o'zgartirildi: O'zbekcha"
  },
  ru: {
    top_promo: "Сезонные скидки! БЕСПЛАТНАЯ доставка на все заказы от $50",
    top_coupon: "Купон:",
    top_support: "Поддержка",
    nav_home: "Главная",
    nav_categories: "Категории",
    nav_brands: "Бренды",
    nav_trending: "Популярное",
    nav_deal: "Акции",
    nav_catalog: "Каталог",
    nav_stores: "Наши магазины",
    search_placeholder: "Поиск одежды...",
    hero_badge: "✨ Новая Коллекция 2026",
    hero_title: "Изысканный Стиль & <span>Идеальный</span> Образ",
    hero_desc: "Высококачественные натуральные ткани, современный крой и внимание к деталям. Эксклюзивные модели на каждый день и праздники.",
    hero_btn_shop: "Смотреть коллекцию →",
    hero_btn_deal: "Сезонные скидки",
    hero_stat_clients: "Довольных клиентов",
    hero_stat_quality: "Натуральные ткани",
    hero_stat_delivery: "Быстрая доставка",
    hero_float_title: "Премиальный Бренд",
    hero_float_desc: "4.9 / 5.0 (1,200+ отзывов)",
    feat_1_title: "Бесплатная Доставка",
    feat_1_desc: "На любые заказы свыше $50",
    feat_2_title: "100% Гарантия Качества",
    feat_2_desc: "Сертифицированные премиум ткани",
    feat_3_title: "Возврат в течение 14 дней",
    feat_3_desc: "Легкий обмен, если не подошел размер",
    feat_4_title: "Поддержка 24/7",
    feat_4_desc: "Всегда на связи и готовы помочь",
    cat_tag: "Разделы Каталога",
    cat_title: "Выберите по Категориям",
    cat_sub: "Найдите одежду и аксессуары в вашем неповторимом стиле",
    cat_view: "Смотреть коллекцию →",
    trend_tag: "Лучший Выбор",
    trend_title: "Популярная Одежда",
    trend_sub: "Модели, которые чаще всего выбирают наши покупатели",
    tab_all: "Все",
    tab_featured: "Рекомендуемые",
    tab_new: "Новинки",
    tab_bestseller: "Хиты продаж",
    tab_deal: "Большая скидка",
    deal_badge: "Скидка только сегодня",
    deal_title: "Скидки до 30% на Осеннюю Коллекцию!",
    deal_desc: "Эксклюзивные цены на тренчи и шелковые платья ограниченного тиража. До окончания акции осталось немного.",
    deal_btn: "Воспользоваться акцией →",
    catalog_tag: "Все Товары",
    catalog_title: "Полный Каталог Одежды",
    catalog_sub: "Фильтруйте по цене, размеру и категории",
    filter_title: "Фильтры",
    filter_clear: "Очистить",
    filter_cat_title: "Категории",
    filter_all_cats: "Все категории",
    filter_price_title: "Диапазон Цен ($)",
    filter_size_title: "Размер",
    sort_label: "Сортировка:",
    sort_featured: "Рекомендуемые",
    sort_price_asc: "Сначала дешевые",
    sort_price_desc: "Сначала дорогие",
    sort_rating: "По рейтингу",
    sort_newest: "Сначала новые",
    nav_brands: "Бренды",
    brands_tag: "Международные Дома Моды",
    brands_title: "Турецкие & Итальянские Бренды",
    brands_sub: "Оригинальные коллекции одежды от ведущих домов моды Италии и лучших турецких фабрик",
    brand_nav_all: "Все Бренды",
    brand_nav_turkey: "Турецкие Бренды",
    brand_nav_italy: "Итальянские Бренды",
    filter_origin_title: "Страна Бренда",
    filter_brand_title: "Популярные Бренды",
    brand_lbl: "Бренд:",
    brand_origin_lbl: "Страна производства:",
    stores_tag: "Адреса и Локации",
    stores_title: "Наши Магазины и Филиалы",
    stores_sub: "Посетите наши фирменные бутики или добавьте локацию вручную",
    stores_btn_add: "+ Добавить Магазин Вручную",
    store_landmark_lbl: "Ориентир:",
    store_hours_lbl: "Режим работы:",
    store_phone_lbl: "Телефон:",
    store_btn_map: "Открыть на Google Maps ↗",
    store_btn_delete: "Удалить",
    store_modal_title: "Добавить Новый Магазин Вручную",
    store_modal_sub: "Введите название, город и точный адрес филиала",
    cart_title: "Ваша Корзина",
    cart_empty: "Корзина пока пуста",
    cart_empty_btn: "Начать покупки",
    cart_coupon_btn: "Применить",
    cart_subtotal: "Промежуточный итог:",
    cart_discount: "Скидка:",
    cart_shipping: "Доставка:",
    cart_total: "Общий итог:",
    cart_checkout_btn: "Перейти к оформлению →",
    checkout_title: "Оформление Заказа",
    checkout_sub: "Заполните данные для доставки",
    checkout_btn: "Подтвердить заказ",
    toast_added: "добавлен в корзину!",
    toast_removed: "Товар удален из корзины.",
    toast_coupon_empty: "Пожалуйста, введите промокод!",
    toast_store_saved: "Магазин успешно добавлен!",
    toast_store_deleted: "Магазин удален.",
    lang_changed: "Язык изменен: Русский"
  },
  en: {
    top_promo: "Seasonal Sale! FREE shipping on all orders over $50",
    top_coupon: "Coupon:",
    top_support: "Support",
    nav_home: "Home",
    nav_categories: "Categories",
    nav_brands: "Brands",
    nav_trending: "Trending",
    nav_deal: "Deals",
    nav_catalog: "Catalog",
    nav_stores: "Our Stores",
    search_placeholder: "Search fashion...",
    hero_badge: "✨ New Season Collection 2026",
    hero_title: "Refined Style & <span>Flawless</span> Fashion",
    hero_desc: "High quality organic fabrics, modern silhouettes, and attention to every detail. Exclusive pieces for everyday elegance.",
    hero_btn_shop: "Explore Collection →",
    hero_btn_deal: "Seasonal Deals",
    hero_stat_clients: "Happy Customers",
    hero_stat_quality: "Natural Fabrics",
    hero_stat_delivery: "Fast Shipping",
    hero_float_title: "Top Rated Atelier",
    hero_float_desc: "4.9 / 5.0 (1,200+ reviews)",
    feat_1_title: "Free Worldwide Shipping",
    feat_1_desc: "On all orders above $50",
    feat_2_title: "100% Quality Guarantee",
    feat_2_desc: "Certified luxury materials",
    feat_3_title: "14-Day Free Returns",
    feat_3_desc: "Hassle-free size exchange",
    feat_4_title: "24/7 Dedicated Support",
    feat_4_desc: "Friendly consultation anytime",
    cat_tag: "Catalog Sections",
    cat_title: "Browse By Category",
    cat_sub: "Find apparel and accessories tailored to your lifestyle",
    cat_view: "View Collection →",
    trend_tag: "Top Selection",
    trend_title: "Trending Styles",
    trend_sub: "Most coveted pieces loved by our community",
    tab_all: "All",
    tab_featured: "Featured",
    tab_new: "New Arrivals",
    tab_bestseller: "Best Sellers",
    tab_deal: "Hot Deals",
    deal_badge: "Special Deal Today",
    deal_title: "Up to 30% Off Autumn Essentials!",
    deal_desc: "Limited edition trench coats, silk dresses and blazers at exclusive prices. Hurry, offer ends soon.",
    deal_btn: "Claim Offer Now →",
    catalog_tag: "All Products",
    catalog_title: "Full Fashion Catalog",
    catalog_sub: "Filter and sort across sizes, colors, and prices",
    filter_title: "Filters",
    filter_clear: "Reset",
    filter_cat_title: "Categories",
    filter_all_cats: "All Categories",
    filter_price_title: "Price Range ($)",
    filter_size_title: "Size",
    sort_label: "Sort by:",
    sort_featured: "Featured",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_rating: "Customer Rating",
    sort_newest: "Newest Arrivals",
    nav_brands: "Brands",
    brands_tag: "International Fashion Houses",
    brands_title: "Turkish & Italian Brands",
    brands_sub: "Original collections combining Italian elegance and high quality Turkish textile heritage",
    brand_nav_all: "All Brands",
    brand_nav_turkey: "Turkish Brands",
    brand_nav_italy: "Italian Brands",
    filter_origin_title: "Brand Origin",
    filter_brand_title: "Famous Brands",
    brand_lbl: "Brand:",
    brand_origin_lbl: "Country of Origin:",
    stores_tag: "Addresses & Locations",
    stores_title: "Our Stores & Boutiques",
    stores_sub: "Visit our flagship locations or manually add a new branch address",
    stores_btn_add: "+ Add Store Manually",
    store_landmark_lbl: "Landmark:",
    store_hours_lbl: "Hours:",
    store_phone_lbl: "Phone:",
    store_btn_map: "View on Google Maps ↗",
    store_btn_delete: "Delete",
    store_modal_title: "Add New Store Location Manually",
    store_modal_sub: "Enter the branch name, city, and exact address coordinates",
    cart_title: "Shopping Cart",
    cart_empty: "Your cart is currently empty",
    cart_empty_btn: "Start Shopping",
    cart_coupon_btn: "Apply",
    cart_subtotal: "Subtotal:",
    cart_discount: "Discount:",
    cart_shipping: "Shipping:",
    cart_total: "Total:",
    cart_checkout_btn: "Proceed to Checkout →",
    checkout_title: "Order Checkout",
    checkout_sub: "Provide your delivery contact details",
    checkout_btn: "Confirm Order",
    toast_added: "added to cart!",
    toast_removed: "Item removed from cart.",
    toast_coupon_empty: "Please enter a promo code!",
    toast_store_saved: "Store location added successfully!",
    toast_store_deleted: "Store deleted successfully.",
    lang_changed: "Language changed: English"
  }
};

// Initial Fallback Stores Data (VIP Brand, Caber Brand & Flagships)
const fallbackStores = [
  {
    id: 1,
    nameUz: "VIP Brand Exclusive Boutique (Tashkent City)",
    nameRu: "VIP Brand Эксклюзивный Бутик (Tashkent City)",
    nameEn: "VIP Brand Exclusive Boutique (Tashkent City)",
    brandType: "VIP Brand",
    city: "Toshkent",
    addressUz: "Toshkent City Mall, 2-qavat, VIP Gallery 204",
    addressRu: "Tashkent City Mall, 2 этаж, VIP Gallery 204",
    addressEn: "Tashkent City Mall, 2nd Floor, VIP Gallery 204",
    landmark: "Hilton mehmonxonasi va Kongress markazi ro'parasida",
    phone: "+998 (71) 205-77-77",
    workingHours: "10:00 - 23:00",
    lat: 41.3142,
    lng: 69.2515,
    rating: 5.0,
    reviewCount: 168,
    mapUrl: "https://maps.google.com/?q=41.3142,69.2515",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nameUz: "Caber Brand Cyber & Techwear Store (Magic City)",
    nameRu: "Caber Brand Кибер-магазин Techwear (Magic City)",
    nameEn: "Caber Brand Cyber & Techwear Store (Magic City)",
    brandType: "Caber Brand",
    city: "Toshkent",
    addressUz: "Bobur ko'chasi 174, Magic City Park, Pavilion 8",
    addressRu: "улица Бабура 174, парк Magic City, Павильон 8",
    addressEn: "174 Babur Street, Magic City Park, Pavilion 8",
    landmark: "Magic City fontani va amfiteatr yaqinida",
    phone: "+998 (90) 880-01-01",
    workingHours: "10:00 - 23:00",
    lat: 41.3039,
    lng: 69.2458,
    rating: 4.9,
    reviewCount: 142,
    mapUrl: "https://maps.google.com/?q=41.3039,69.2458",
    imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nameUz: "VELVET & CO. Toshkent Bosh Do'koni (Flagship)",
    nameRu: "Главный флагманский магазин в Ташкенте (Флагман)",
    nameEn: "Tashkent Flagship Central Boutique",
    brandType: "VELVET & CO.",
    city: "Toshkent",
    addressUz: "Amir Temur shoh ko'chasi, 105-uy",
    addressRu: "проспект Амира Темура, дом 105",
    addressEn: "105 Amir Temur Avenue",
    landmark: "Metro 'Minor' yaqinida, 'Oloy' bozori ro'parasida",
    phone: "+998 (71) 200-00-01",
    workingHours: "10:00 - 22:00",
    lat: 41.3285,
    lng: 69.2842,
    rating: 4.9,
    reviewCount: 210,
    mapUrl: "https://maps.google.com/?q=41.3285,69.2842",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nameUz: "VIP Brand Haute Couture Lounge (Mirabad Avenue)",
    nameRu: "VIP Brand Салон Высокой Моды (Mirabad Avenue)",
    nameEn: "VIP Brand Haute Couture Lounge (Mirabad Avenue)",
    brandType: "VIP Brand",
    city: "Toshkent",
    addressUz: "Mirobod tumani, Mirabad Avenue rezidensiyasi, D blok",
    addressRu: "Мирабадский район, ЖК Mirabad Avenue, блок D",
    addressEn: "Mirabad District, Mirabad Avenue Residence, Block D",
    landmark: "Grand Mir mehmonxonasi yonidagi elit savdo xiyoboni",
    phone: "+998 (71) 207-99-99",
    workingHours: "11:00 - 22:00",
    lat: 41.2965,
    lng: 69.2718,
    rating: 5.0,
    reviewCount: 95,
    mapUrl: "https://maps.google.com/?q=41.2965,69.2718",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nameUz: "VIP Brand Royal Salon (Samarqand Registon)",
    nameRu: "VIP Brand Королевский Салон (Самарканд Регистан)",
    nameEn: "VIP Brand Royal Salon (Samarkand Registan)",
    brandType: "VIP Brand",
    city: "Samarqand",
    addressUz: "Registon ko'chasi 58, 'Registon Plaza' 1-qavat",
    addressRu: "улица Регистан 58, 1 этаж Регистан Плаза",
    addressEn: "58 Registan Street, Registan Plaza 1st Floor",
    landmark: "Registon me'moriy ansambliga 200m masofada",
    phone: "+998 (66) 235-88-88",
    workingHours: "09:30 - 21:30",
    lat: 39.6558,
    lng: 66.9745,
    rating: 4.9,
    reviewCount: 114,
    mapUrl: "https://maps.google.com/?q=39.6558,66.9745",
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    nameUz: "Caber Brand Cyber Lab (Samarqand)",
    nameRu: "Caber Brand Кибер-магазин (Самарканд)",
    nameEn: "Caber Brand Cyber Lab (Samarkand)",
    brandType: "Caber Brand",
    city: "Samarqand",
    addressUz: "Universitet xiyoboni 45, 'Silk Road' Savdo Majmuasi",
    addressRu: "Университетский бульвар 45, ТЦ 'Silk Road'",
    addressEn: "45 University Boulevard, Silk Road Center",
    landmark: "Samarqand Davlat Universiteti bosh binosi ro'parasida",
    phone: "+998 (66) 240-55-11",
    workingHours: "10:00 - 22:00",
    lat: 39.6482,
    lng: 66.9602,
    rating: 4.8,
    reviewCount: 88,
    mapUrl: "https://maps.google.com/?q=39.6482,66.9602",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    nameUz: "VIP Brand Silk Road Atelier (Buxoro Labi-Hovuz)",
    nameRu: "VIP Brand Шёлковое Ателье (Бухара Ляби-Хауз)",
    nameEn: "VIP Brand Silk Road Atelier (Bukhara Lyabi-Hauz)",
    brandType: "VIP Brand",
    city: "Buxoro",
    addressUz: "B. Naqshband ko'chasi, 24-uy",
    addressRu: "улица Б. Накшбанд, дом 24",
    addressEn: "24 B. Naqshband Street",
    landmark: "Labi-Hovuz me'moriy majmuasi yonida",
    phone: "+998 (65) 224-77-88",
    workingHours: "09:30 - 21:00",
    lat: 39.7747,
    lng: 64.4286,
    rating: 5.0,
    reviewCount: 76,
    mapUrl: "https://maps.google.com/?q=39.7747,64.4286",
    imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    nameUz: "Caber Brand Urban Hub (Farg'ona)",
    nameRu: "Caber Brand Урбан Хаб (Фергана)",
    nameEn: "Caber Brand Urban Hub (Fergana)",
    brandType: "Caber Brand",
    city: "Farg'ona",
    addressUz: "Al-Farg'oniy ko'chasi 32, 'Atlas' savdo markazi, 2-qavat",
    addressRu: "улица Аль-Фергани 32, ТЦ 'Atlas', 2 этаж",
    addressEn: "32 Al-Fergani Street, Atlas Shopping Mall, 2nd Floor",
    landmark: "Markaziy viloyat teatri ro'parasida",
    phone: "+998 (73) 224-11-22",
    workingHours: "09:00 - 21:00",
    lat: 40.3842,
    lng: 71.7843,
    rating: 4.9,
    reviewCount: 64,
    mapUrl: "https://maps.google.com/?q=40.3842,71.7843",
    imageUrl: "https://images.unsplash.com/photo-1519748771451-a94c59638755?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    nameUz: "VELVET & CO. Andijon Filiali (Navro'z Mall)",
    nameRu: "VELVET & CO. Андижанский Филиал (Навруз Молл)",
    nameEn: "VELVET & CO. Andijan Branch (Navruz Mall)",
    brandType: "VELVET & CO.",
    city: "Andijon",
    addressUz: "Bobur shoh ko'chasi 48, 'Navro'z Mall' majmuasi",
    addressRu: "проспект Бабура 48, комплекс 'Навруз Молл'",
    addressEn: "48 Babur Avenue, Navruz Mall",
    landmark: "Andijon temir yo'l vokzali va Bobur maydoni oralig'ida",
    phone: "+998 (74) 223-40-50",
    workingHours: "09:00 - 21:30",
    lat: 40.7821,
    lng: 72.3442,
    rating: 4.8,
    reviewCount: 82,
    mapUrl: "https://maps.google.com/?q=40.7821,72.3442",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    nameUz: "VELVET & CO. Namangan Gullar Diyori (Sardoba)",
    nameRu: "VELVET & CO. Наманганский Филиал (Сардоба)",
    nameEn: "VELVET & CO. Namangan Branch (Sardoba)",
    brandType: "VELVET & CO.",
    city: "Namangan",
    addressUz: "Bobur bog'i ko'chasi 12, 'Sardoba Plaza'",
    addressRu: "улица Парка Бабура 12, 'Сардоба Плаза'",
    addressEn: "12 Babur Park Street, Sardoba Plaza",
    landmark: "Bobur nomidagi markaziy bog' yonida",
    phone: "+998 (69) 227-12-34",
    workingHours: "09:00 - 21:00",
    lat: 40.9983,
    lng: 71.6726,
    rating: 4.8,
    reviewCount: 59,
    mapUrl: "https://maps.google.com/?q=40.9983,71.6726",
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
  }
];

// Fallback Categories & Products
const fallbackCategories = [
  { id: 1, name: "Ayollar kolleksiyasi", slug: "women", imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Erkaklar kolleksiyasi", slug: "men", imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Ustki kiyimlar", slug: "outerwear", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Ko'ylaklar va Kostyumlar", slug: "dresses", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Oyoq kiyimlar", slug: "shoes", imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Aksessuarlar & Sumkalar", slug: "accessories", imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80" }
];

const fallbackProducts = [
  {
    id: 1,
    name: "Klassik Bej Trençkot",
    slug: "classic-beige-trench-coat",
    description: "Yuqori sifatli gabardin matodan tikilgan, ikki qator tugmali klassik ayollar trençkoti.",
    price: 89.00,
    oldPrice: 129.00,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 48,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Bej", "Qora", "Xaki"],
    brand: "Massimo Dutti",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 2,
    name: "Oversize Kashmir Sviter",
    slug: "oversize-cashmere-sweater",
    description: "100% yumshoq tabiiy kashmir junidan to'qilgan qulay sviter.",
    price: 65.00,
    oldPrice: 85.00,
    discountPercent: 23,
    rating: 4.8,
    reviewCount: 36,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ayollar kolleksiyasi", slug: "women" },
    sizes: ["XS", "S", "M", "L"],
    colors: ["Krem", "Kulrang"],
    brand: "Koton",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 3,
    name: "Erkaklar Italiya Fason Pidjagi",
    slug: "mens-wool-blazer",
    description: "Italiya andozasida tayyorlangan premium erkaklar kostyum-pidjagi.",
    price: 119.00,
    oldPrice: 160.00,
    discountPercent: 25,
    rating: 5.0,
    reviewCount: 29,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["To'q ko'k", "Qora"],
    brand: "Emporio Armani",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 4,
    name: "Gulli Ipak Kechki Ko'ylak",
    slug: "floral-silk-maxi-dress",
    description: "Yengil tabiiy ipak matodan tikilgan uzun gulli libos.",
    price: 79.00,
    oldPrice: 99.00,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 54,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ko'ylaklar va Kostyumlar", slug: "dresses" },
    sizes: ["S", "M", "L"],
    colors: ["Zangori", "Pushti"],
    brand: "Ipekyol",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 5,
    name: "Og'ir Paxtali Streetwear Xudi",
    slug: "streetwear-heavy-cotton-hoodie",
    description: "450 GSM zichlikdagi 100% paxta matosidan tayyorlangan premium xudi.",
    price: 49.00,
    oldPrice: 69.00,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 72,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Qora", "Oq", "Zaytun yashil"],
    brand: "Colin's",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 6,
    name: "Tabiiy Charm Oq Krossovka",
    slug: "minimalist-white-leather-sneakers",
    description: "Toza minimalist uslubdagi charm krossovkalar.",
    price: 95.00,
    oldPrice: 130.00,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 88,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    category: { name: "Oyoq kiyimlar", slug: "shoes" },
    sizes: ["40", "41", "42", "43"],
    colors: ["Oq", "Qora"],
    brand: "Prada",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 7,
    name: "Qo'lda Tikilgan Charm Sumka",
    slug: "handcrafted-leather-tote-bag",
    description: "Premium to'liq charm matodan tikilgan keng hajmli ayollar sumkasi.",
    price: 110.00,
    oldPrice: 150.00,
    discountPercent: 26,
    rating: 5.0,
    reviewCount: 41,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    category: { name: "Aksessuarlar & Sumkalar", slug: "accessories" },
    sizes: ["Standard"],
    colors: ["Jigarrang", "Qora"],
    brand: "Gucci",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 8,
    name: "Vintaj Djinsi Kurtka",
    slug: "vintage-wash-denim-jacket",
    description: "Klassik 90-yillar uslubidagi djinsi kurtka.",
    price: 59.00,
    oldPrice: 79.00,
    discountPercent: 25,
    rating: 4.7,
    reviewCount: 63,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Moviy"],
    brand: "Mavi Jeans",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 9,
    name: "Zig'irpoya Yozgi Erkaklar Ko'ylagi",
    slug: "mens-summer-linen-shirt",
    description: "100% tabiiy zig'ir (linen) matosidan tikilgan yozgi erkin ko'ylak.",
    price: 45.00,
    oldPrice: 55.00,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: 31,
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oq", "Bej"],
    brand: "D'S Damat",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 10,
    name: "Junli Beret va Sharf To'plami",
    slug: "wool-beret-scarf-set",
    description: "Yumshoq junli beret va uzun nafis sharf. Kuz-qish mavsumi aksessuari.",
    price: 35.00,
    oldPrice: 45.00,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 19,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    category: { name: "Aksessuarlar & Sumkalar", slug: "accessories" },
    sizes: ["Universal"],
    colors: ["Qizil", "Qora"],
    brand: "LC Waikiki",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 11,
    name: "Milano Velvet Smoking Kostyum",
    slug: "milano-velvet-tuxedo-suit",
    description: "Italiyaning eng sara baxmal matosidan tikilgan hashamatli erkaklar smoking kostyumi.",
    price: 189.00,
    oldPrice: 250.00,
    discountPercent: 24,
    rating: 5.0,
    reviewCount: 38,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["48", "50", "52"],
    colors: ["Qora", "To'q ko'k"],
    brand: "Dolce & Gabbana",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 12,
    name: "Turkiya Premium Polo Futbolka",
    slug: "turkey-premium-cotton-polo",
    description: "100% Egey paxtasidan to'qilgan elastik va nafis polo.",
    price: 38.00,
    oldPrice: 49.00,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 95,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Oq", "To'q ko'k"],
    brand: "LC Waikiki Premium",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 13,
    name: "Florensiya Charm Klassik Lofer",
    slug: "florence-classic-leather-loafers",
    description: "Italiyaning Florensiya shahrida qo'lda ishlangan haqiqiy buzoq charmi poyabzali.",
    price: 145.00,
    oldPrice: 195.00,
    discountPercent: 25,
    rating: 4.9,
    reviewCount: 44,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    category: { name: "Oyoq kiyimlar", slug: "shoes" },
    sizes: ["40", "41", "42", "43"],
    colors: ["Jigarrang", "Qora"],
    brand: "Salvatore Ferragamo",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 14,
    name: "Istanbul Qishki Issiq Termo Kurtka",
    slug: "istanbul-winter-thermal-jacket",
    description: "Turkiya texnologiyasi asosida ishlab chiqarilgan shamol va sovuq o'tkazmaydigan engil kurtka.",
    price: 98.00,
    oldPrice: 135.00,
    discountPercent: 27,
    rating: 4.8,
    reviewCount: 58,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Qora", "Grafit"],
    brand: "Koton Exclusive",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 15,
    name: "VIP Brand Oltin Chokli Ipak Kechki Libos",
    slug: "vip-brand-gold-silk-evening-dress",
    description: "Italiyaning eng sara tabiiy shoyi matosidan tikilgan, oltin ipli kashtali eksklyuziv VIP Brand kechki ko'ylagi.",
    price: 185.00,
    oldPrice: 245.00,
    discountPercent: 24,
    rating: 5.0,
    reviewCount: 67,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ko'ylaklar va Kostyumlar", slug: "dresses" },
    sizes: ["XS", "S", "M", "L"],
    colors: ["Zangori Oltin", "Zumrad"],
    brand: "VIP Brand",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 16,
    name: "VIP Brand Milano Royal Baxmal Tuxedo",
    slug: "vip-brand-milano-royal-velvet-tuxedo",
    description: "VIP elita tadbirlari uchun maxsus tayyorlangan, shoyi yoqali hashamatli qora baxmal erkaklar kostyumi.",
    price: 260.00,
    oldPrice: 340.00,
    discountPercent: 23,
    rating: 5.0,
    reviewCount: 49,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["48", "50", "52", "54"],
    colors: ["Qora", "To'q Binafsha"],
    brand: "VIP Brand",
    brandOrigin: "Italiya",
    brandOriginCode: "IT"
  },
  {
    id: 17,
    name: "Caber Brand Cyberpunk Suv O'tkazmaydigan Kurtka",
    slug: "caber-brand-cyberpunk-waterproof-jacket",
    description: "Zamonaviy Caber Brand techwear texnologiyasi: nafas oluvchi membranali, neon reflektiv lentalari bilan himoyalangan suv o'tkazmaydigan kurtka.",
    price: 115.00,
    oldPrice: 155.00,
    discountPercent: 25,
    rating: 4.9,
    reviewCount: 84,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Kiber Qora", "Neon Yashil"],
    brand: "Caber Brand",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  },
  {
    id: 18,
    name: "Caber Brand Neon Reflektiv Streetwear Xudi",
    slug: "caber-brand-neon-reflective-hoodie",
    description: "480 GSM og'ir paxtali, kechasi nur qaytaruvchi kiber grafika tushirilgan Caber Brand oversize xudisi.",
    price: 68.00,
    oldPrice: 89.00,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 112,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Antratsit", "Kiber Oq"],
    brand: "Caber Brand",
    brandOrigin: "Turkiya",
    brandOriginCode: "TR"
  }
];

// Brand Directory Data (VIP Brand, Caber Brand, Turkiya & Italiya)
const brandList = [
  { name: "VIP Brand", origin: "Italiya", code: "IT", descUz: "⭐ Hashamatli yuqori moda, shaxsiy bichim va qirollik shoyisi eksklyuziv liboslari", descRu: "⭐ Эксклюзивная высокая мода, королевский шёлк и люкс наряды", descEn: "⭐ Exclusive haute couture, royal silk & bespoke VIP luxury couture" },
  { name: "Caber Brand", origin: "Turkiya", code: "TR", descUz: "⚡ Futuristik kiber moda, yuqori texnologiyali matolar va cyber streetwear", descRu: "⚡ Футуристическая кибер-мода, techwear ткани и уличный стиль", descEn: "⚡ Futuristic cyber fashion, waterproof techwear & cyber streetwear" },
  { name: "LC Waikiki", origin: "Turkiya", code: "TR", descUz: "Zamonaviy, sifatli va qulay oilaviy kiyimlar", descRu: "Современная одежда для всей семьи", descEn: "Modern and quality apparel for everyone" },
  { name: "Koton", origin: "Turkiya", code: "TR", descUz: "So'nggi trendlar asosidagi yoshlar liboslari", descRu: "Стильные тренды и молодежная мода", descEn: "Latest youth and women trends" },
  { name: "Colin's", origin: "Turkiya", code: "TR", descUz: "Klassik va erkin streetwear jinslar va kiyimlar", descRu: "Качественный деним и streetwear", descEn: "Quality denim and streetwear" },
  { name: "Mavi Jeans", origin: "Turkiya", code: "TR", descUz: "Turkiyaning eng mashhur jinsi brendi", descRu: "Всемирно известный джинсовый бренд", descEn: "World-renowned premium denim brand" },
  { name: "D'S Damat", origin: "Turkiya", code: "TR", descUz: "Klassik erkaklar kostyumlari va nafis ko'ylaklar", descRu: "Элегантная классическая мужская одежда", descEn: "Elegant classic suits and shirts" },
  { name: "Ipekyol", origin: "Turkiya", code: "TR", descUz: "Nafis va bejirim premium ayollar liboslari", descRu: "Изысканная премиум коллекция для женщин", descEn: "Sophisticated premium women's couture" },
  { name: "Emporio Armani", origin: "Italiya", code: "IT", descUz: "Milano uslubidagi hashamat va mukammal andoza", descRu: "Миланская роскошь и безупречный крой", descEn: "Milan luxury with impeccable tailoring" },
  { name: "Gucci", origin: "Italiya", code: "IT", descUz: "Italiya oliy modasi va hashamatli aksessuarlar", descRu: "Высокая итальянская мода и аксессуары", descEn: "Italian high fashion and luxury accessories" },
  { name: "Prada", origin: "Italiya", code: "IT", descUz: "Minimalist va ilg'or italyancha dizayn san'ati", descRu: "Минималистичный дизайн и эстетика", descEn: "Minimalist modern luxury design" },
  { name: "Dolce & Gabbana", origin: "Italiya", code: "IT", descUz: "Sitsiliya jozibadorligi va boy naqshlar", descRu: "Сицилийский шарм и классика", descEn: "Sicilian charm and expressive haute couture" },
  { name: "Massimo Dutti", origin: "Italiya", code: "IT", descUz: "Nafis shahar uslubi va tabiiy materiallar", descRu: "Элегантный городской шик и ткани", descEn: "Sophisticated urban elegance" },
  { name: "Salvatore Ferragamo", origin: "Italiya", code: "IT", descUz: "Afsonaviy italyan charmi va poyabzallari", descRu: "Легендарная итальянская кожа и обувь", descEn: "Legendary handcrafted Italian leather shoes" }
];

// App State
let state = {
  lang: localStorage.getItem('velvet_lang') || 'uz',
  products: [],
  categories: [],
  stores: [],
  cart: JSON.parse(localStorage.getItem('velvet_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('velvet_wishlist')) || [],
  appliedCoupon: null,
  activeTab: 'all',
  activeCategory: null,
  activeBrand: null,
  activeBrandOrigin: null,
  activeStoreFilter: 'all',
  storeSearchQuery: '',
  storesMap: null,
  mapMarkers: [],
  mapTileLayers: {},
  currentMapLayerName: 'roadmap',
  activeStoreId: null,
  searchQuery: '',
  selectedSize: null,
  selectedColor: null,
  minPrice: null,
  maxPrice: null,
  sortBy: 'featured'
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  initCountdown();
});

async function initApp() {
  applyLanguage(state.lang);
  updateCartBadge();
  updateWishlistBadge();
  await loadCategories();
  renderBrandsGrid();
  renderBrandSidebarChips();
  await loadProducts();
  await loadStores();
  setupEventListeners();
}

// Language Handling
function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('velvet_lang', lang);
  applyLanguage(lang);
  renderBrandsGrid(state.activeBrandOrigin || 'all');
  renderBrandSidebarChips();
  updateStoreFilterCounts();
  renderStores();
  renderStoresMapMarkers();
  renderProducts();
  renderCatalogProducts();
  renderCartDrawer();
  const dict = i18n[lang] || i18n.uz;
  showToast(dict.lang_changed, 'success');
}

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.uz;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}

function t(key) {
  const dict = i18n[state.lang] || i18n.uz;
  return dict[key] || key;
}

// ==========================================================================
// STORE LOCATIONS & GOOGLE MAPS INTERACTIVE SYSTEM (VIP Brand, Caber Brand & Flagships)
// ==========================================================================

async function loadStores() {
  try {
    const res = await fetch(`${API_BASE}/stores`);
    if (res.ok) {
      const serverStores = await res.json();
      // Combine server stores with our rich fallback stores if needed
      state.stores = serverStores.length >= fallbackStores.length ? serverStores : fallbackStores;
    } else {
      state.stores = fallbackStores;
    }
  } catch (err) {
    state.stores = fallbackStores;
  }
  updateStoreFilterCounts();
  renderStores();
  initStoresMap();
}

function updateStoreFilterCounts() {
  const allCountEl = document.getElementById('countAllStores');
  const vipCountEl = document.getElementById('countVipStores');
  const caberCountEl = document.getElementById('countCaberStores');
  const statusPill = document.getElementById('mapStatusPill');

  const total = state.stores.length;
  const vipCount = state.stores.filter(s => (s.brandType || '').toLowerCase().includes('vip')).length;
  const caberCount = state.stores.filter(s => (s.brandType || '').toLowerCase().includes('caber')).length;

  if (allCountEl) allCountEl.innerText = total;
  if (vipCountEl) vipCountEl.innerText = vipCount;
  if (caberCountEl) caberCountEl.innerText = caberCount;
  if (statusPill) statusPill.innerText = `${total} ta do'kon faol`;
}

function getFilteredStores() {
  let list = state.stores;

  // Filter by category / brand / city pill
  if (state.activeStoreFilter && state.activeStoreFilter !== 'all') {
    const f = state.activeStoreFilter.toLowerCase();
    if (f === 'vip') {
      list = list.filter(s => (s.brandType || '').toLowerCase().includes('vip') || (s.nameUz || '').toLowerCase().includes('vip'));
    } else if (f === 'caber') {
      list = list.filter(s => (s.brandType || '').toLowerCase().includes('caber') || (s.nameUz || '').toLowerCase().includes('caber'));
    } else if (f === 'vodiy') {
      const vodiyCities = ['andijon', 'namangan', "farg'ona", 'fergana'];
      list = list.filter(s => vodiyCities.includes((s.city || '').toLowerCase()));
    } else {
      list = list.filter(s => (s.city || '').toLowerCase() === f);
    }
  }

  // Filter by text search
  if (state.storeSearchQuery) {
    const q = state.storeSearchQuery;
    list = list.filter(s => 
      (s.nameUz && s.nameUz.toLowerCase().includes(q)) ||
      (s.nameRu && s.nameRu.toLowerCase().includes(q)) ||
      (s.nameEn && s.nameEn.toLowerCase().includes(q)) ||
      (s.city && s.city.toLowerCase().includes(q)) ||
      (s.addressUz && s.addressUz.toLowerCase().includes(q)) ||
      (s.brandType && s.brandType.toLowerCase().includes(q)) ||
      (s.landmark && s.landmark.toLowerCase().includes(q))
    );
  }

  return list;
}

// Initialize Leaflet Map with Google Maps Styling & Tiles
function initStoresMap() {
  const mapContainer = document.getElementById('storesMap');
  if (!mapContainer || typeof L === 'undefined') return;

  // Reset existing map if re-initializing
  if (state.storesMap) {
    try {
      state.storesMap.remove();
    } catch (e) {}
    state.storesMap = null;
    state.mapMarkers = [];
  }

  // Tashkent center coordinates
  const initialLat = 41.311081;
  const initialLng = 69.279737;

  state.storesMap = L.map('storesMap', {
    center: [initialLat, initialLng],
    zoom: 12,
    scrollWheelZoom: true,
    zoomControl: true
  });

  // Google Maps Roadmap & Satellite tile layers
  state.mapTileLayers = {
    roadmap: L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps'
    }),
    satellite: L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps Satellite'
    }),
    carto: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    })
  };

  // Add default layer (Google Roadmap, with graceful error fallback)
  state.mapTileLayers.roadmap.addTo(state.storesMap);
  state.mapTileLayers.roadmap.on('tileerror', function() {
    if (state.currentMapLayerName === 'roadmap') {
      try {
        state.storesMap.removeLayer(state.mapTileLayers.roadmap);
        state.mapTileLayers.carto.addTo(state.storesMap);
      } catch (err) {}
    }
  });

  state.currentMapLayerName = 'roadmap';

  // Render markers onto the map
  renderStoresMapMarkers();
}

// Create custom Google Maps style pin icons
function createMapPinIcon(brandType) {
  const b = (brandType || '').toLowerCase();
  let pinClass = 'pin-velvet';
  let badgeLabel = '📍 DO\'KON';

  if (b.includes('vip')) {
    pinClass = 'pin-vip';
    badgeLabel = '⭐ VIP';
  } else if (b.includes('caber')) {
    pinClass = 'pin-caber';
    badgeLabel = '⚡ CABER';
  } else {
    pinClass = 'pin-velvet';
    badgeLabel = '💎 VELVET';
  }

  return L.divIcon({
    className: 'custom-map-pin-wrapper',
    html: `
      <div class="custom-map-pin ${pinClass}">
        <span class="pin-badge">${badgeLabel}</span>
        <div class="pin-point"></div>
      </div>
    `,
    iconSize: [68, 38],
    iconAnchor: [34, 38],
    popupAnchor: [0, -38]
  });
}

// Render markers on the map according to active filter
function renderStoresMapMarkers() {
  if (!state.storesMap || typeof L === 'undefined') return;

  // Clear previous markers
  state.mapMarkers.forEach(m => {
    try {
      state.storesMap.removeLayer(m.marker);
    } catch(e) {}
  });
  state.mapMarkers = [];

  const displayStores = getFilteredStores();
  const validLatLngStores = displayStores.filter(s => s.lat && s.lng);

  if (validLatLngStores.length === 0) return;

  const latLngList = [];

  validLatLngStores.forEach(store => {
    const latLng = [store.lat, store.lng];
    latLngList.push(latLng);

    const name = state.lang === 'ru' ? (store.nameRu || store.nameUz) :
                 state.lang === 'en' ? (store.nameEn || store.nameUz) : store.nameUz;
    const address = state.lang === 'ru' ? (store.addressRu || store.addressUz) :
                    state.lang === 'en' ? (store.addressEn || store.addressUz) : store.addressUz;
    const mapUrl = store.mapUrl || `https://maps.google.com/?q=${store.lat},${store.lng}`;
    
    const brandType = store.brandType || 'VELVET & CO.';
    const isVip = brandType.toLowerCase().includes('vip');
    const isCaber = brandType.toLowerCase().includes('caber');
    const badgeStyle = isVip ? 'background:#d97706; color:#fff;' : (isCaber ? 'background:#06b6d4; color:#fff;' : 'background:#111827; color:#fff;');
    const badgeText = isVip ? '⭐ VIP Brand' : (isCaber ? '⚡ Caber Brand' : '💎 VELVET Flagship');

    const popupHtml = `
      <div class="map-popup-card">
        <div class="mpc-img-wrap">
          <img src="${store.imageUrl || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80'}" alt="${name}">
          <span class="mpc-badge" style="${badgeStyle}">${badgeText}</span>
        </div>
        <div class="mpc-content">
          <h4 class="mpc-title">${name}</h4>
          <div class="mpc-rating">★ ${store.rating || '4.9'} <span class="mpc-reviews">(${store.reviewCount || 120} sharhlar)</span></div>
          <div class="mpc-row">
            <span class="mpc-icon">📍</span>
            <span><strong>Manzil:</strong> ${address}</span>
          </div>
          ${store.landmark ? `
            <div class="mpc-row">
              <span class="mpc-icon">🏢</span>
              <span><strong>Mo'ljal:</strong> ${store.landmark}</span>
            </div>
          ` : ''}
          <div class="mpc-row">
            <span class="mpc-icon">🕒</span>
            <span><strong>Ish vaqti:</strong> ${store.workingHours || '10:00 - 22:00'}</span>
          </div>
          <div class="mpc-row">
            <span class="mpc-icon">📞</span>
            <span><strong>Tel:</strong> <a href="tel:${store.phone}">${store.phone}</a></span>
          </div>
          <div class="mpc-actions">
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="mpc-btn-gmaps">
              Google Maps da Ochish (Yo'nalish) ↗
            </a>
          </div>
        </div>
      </div>
    `;

    const customIcon = createMapPinIcon(store.brandType);
    const marker = L.marker(latLng, { icon: customIcon }).addTo(state.storesMap);
    marker.bindPopup(popupHtml, { maxWidth: 320, className: 'gmaps-style-popup' });

    marker.on('click', () => {
      state.activeStoreId = store.id;
      updateActiveStoreBanner(store);
      highlightStoreCard(store.id);
    });

    state.mapMarkers.push({ storeId: store.id, marker: marker, store: store });
  });

  // Fit bounds if multiple markers and no search query active
  if (latLngList.length > 1 && !state.storeSearchQuery) {
    state.storesMap.fitBounds(L.latLngBounds(latLngList), { padding: [40, 40], maxZoom: 14 });
  } else if (latLngList.length === 1) {
    state.storesMap.setView(latLngList[0], 15);
  }
}

// Fly directly to a chosen store with zoom animation & open popup
function flyToStore(storeId) {
  const store = state.stores.find(s => s.id === storeId);
  if (!store) return;

  state.activeStoreId = storeId;

  // Smooth scroll to the map container
  const mapWrap = document.querySelector('.stores-map-wrapper');
  if (mapWrap) {
    mapWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (state.storesMap && store.lat && store.lng) {
    state.storesMap.flyTo([store.lat, store.lng], 16, {
      animate: true,
      duration: 1.2
    });

    const markerItem = state.mapMarkers.find(m => m.storeId === storeId);
    if (markerItem) {
      setTimeout(() => {
        markerItem.marker.openPopup();
      }, 700);
    }
  }

  updateActiveStoreBanner(store);
  highlightStoreCard(storeId);
}

// Highlight store card in the grid
function highlightStoreCard(storeId) {
  document.querySelectorAll('.store-card').forEach(c => c.classList.remove('active-store-card'));
  const targetCard = document.getElementById(`store-card-${storeId}`);
  if (targetCard) {
    targetCard.classList.add('active-store-card');
  }
}

// Update the quick status banner below the map
function updateActiveStoreBanner(store) {
  const banner = document.getElementById('activeStoreBanner');
  if (!banner) return;

  const badge = document.getElementById('asbBadge');
  const title = document.getElementById('asbTitle');
  const address = document.getElementById('asbAddress');
  const mapLink = document.getElementById('asbMapLink');

  const name = state.lang === 'ru' ? (store.nameRu || store.nameUz) :
               state.lang === 'en' ? (store.nameEn || store.nameUz) : store.nameUz;
  const addr = state.lang === 'ru' ? (store.addressRu || store.addressUz) :
               state.lang === 'en' ? (store.addressEn || store.addressUz) : store.addressUz;
  const brand = store.brandType || 'VELVET & CO.';
  const isVip = brand.toLowerCase().includes('vip');
  const isCaber = brand.toLowerCase().includes('caber');

  if (badge) {
    badge.innerText = isVip ? '⭐ VIP Brand' : (isCaber ? '⚡ Caber Brand' : '💎 Flagship');
    badge.className = 'asb-badge ' + (isVip ? 'badge-vip' : (isCaber ? 'badge-caber' : 'badge-velvet'));
  }
  if (title) title.innerText = name;
  if (address) address.innerText = `${store.city}, ${addr}`;
  if (mapLink) {
    mapLink.href = store.mapUrl || `https://maps.google.com/?q=${store.lat},${store.lng}`;
  }

  banner.style.display = 'flex';
}

// Filter stores by pill (all, vip, caber, Toshkent, Samarqand, etc.)
function filterStores(filterType) {
  state.activeStoreFilter = filterType;

  // Update pills active state
  document.querySelectorAll('#storeFilterPills .store-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-store-filter') === filterType);
  });

  renderStores();
  renderStoresMapMarkers();
}

// Search stores input
function handleStoreSearch(event) {
  state.storeSearchQuery = (event.target.value || '').toLowerCase().trim();
  renderStores();
  renderStoresMapMarkers();
}

// Map tool buttons
function fitAllStoreBounds() {
  if (!state.storesMap || state.mapMarkers.length === 0) return;
  const validLatLngs = state.stores.filter(s => s.lat && s.lng).map(s => [s.lat, s.lng]);
  if (validLatLngs.length > 0) {
    state.storesMap.fitBounds(L.latLngBounds(validLatLngs), { padding: [50, 50] });
    showToast("Barcha do'konlar xaritaga moslandi", 'info');
  }
}

function focusStoreCity(city) {
  filterStores(city);
  if (state.storesMap) {
    if (city === 'Toshkent') state.storesMap.flyTo([41.311081, 69.279737], 13);
    else if (city === 'Samarqand') state.storesMap.flyTo([39.6542, 66.9597], 13);
    else if (city === 'Buxoro') state.storesMap.flyTo([39.7747, 64.4286], 13);
    else if (city === 'vodiy') state.storesMap.flyTo([40.7821, 72.3442], 10);
  }
}

function toggleMapLayer() {
  if (!state.storesMap) return;
  const btn = document.getElementById('mapLayerToggleBtn');

  if (state.currentMapLayerName === 'roadmap') {
    state.storesMap.removeLayer(state.mapTileLayers.roadmap);
    state.mapTileLayers.satellite.addTo(state.storesMap);
    state.currentMapLayerName = 'satellite';
    if (btn) btn.innerHTML = `<span>🛰️</span> Qatlam: Sun'iy yo'ldosh`;
    showToast("Google Maps sun'iy yo'ldosh qatlami yoqildi", 'info');
  } else {
    state.storesMap.removeLayer(state.mapTileLayers.satellite);
    state.mapTileLayers.roadmap.addTo(state.storesMap);
    state.currentMapLayerName = 'roadmap';
    if (btn) btn.innerHTML = `<span>🗺️</span> Qatlam: Google Standart`;
    showToast("Google Maps standart xaritasi yoqildi", 'info');
  }
}

function resetMapView() {
  fitAllStoreBounds();
}

function locateUserLocation() {
  if (navigator.geolocation && state.storesMap) {
    showToast("Joylashuvingiz aniqlanmoqda...", 'info');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const uLat = pos.coords.latitude;
        const uLng = pos.coords.longitude;
        state.storesMap.flyTo([uLat, uLng], 14);

        L.popup()
          .setLatLng([uLat, uLng])
          .setContent("<b>Sizning joylashuvingiz</b>")
          .openOn(state.storesMap);

        showToast("Sizning lokatsiyangiz topildi!", 'success');
      },
      () => {
        // Fallback to Tashkent
        state.storesMap.flyTo([41.311081, 69.279737], 13);
        showToast("Joylashuv ruxsati berilmadi. Toshkent markazi ko'rsatildi.", 'info');
      }
    );
  } else {
    focusStoreCity('Toshkent');
  }
}

// Render dynamic Store cards
function renderStores() {
  const container = document.getElementById('storesGrid');
  if (!container) return;

  const displayStores = getFilteredStores();

  if (displayStores.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <p style="font-size: 16px; font-weight: 600; color: var(--secondary); margin-bottom: 12px;">Qidiruv bo'yicha hech qanday do'kon topilmadi.</p>
        <button class="btn btn-outline" onclick="filterStores('all'); document.getElementById('storeSearchInput').value='';" style="font-size: 13px;">
          Barcha do'konlarni ko'rsatish
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = displayStores.map(store => {
    const name = state.lang === 'ru' ? (store.nameRu || store.nameUz) :
                 state.lang === 'en' ? (store.nameEn || store.nameUz) : store.nameUz;
    const address = state.lang === 'ru' ? (store.addressRu || store.addressUz) :
                    state.lang === 'en' ? (store.addressEn || store.addressUz) : store.addressUz;
    const mapUrl = store.mapUrl || `https://maps.google.com/?q=${store.lat || ''},${store.lng || ''}`;

    const brand = store.brandType || 'VELVET & CO.';
    const isVip = brand.toLowerCase().includes('vip');
    const isCaber = brand.toLowerCase().includes('caber');
    const badgeLabel = isVip ? '⭐ VIP Brand' : (isCaber ? '⚡ Caber Brand' : '💎 Flagship');
    const badgeClass = isVip ? 'store-badge-vip' : (isCaber ? 'store-badge-caber' : 'store-badge-velvet');

    const isSelected = state.activeStoreId === store.id;

    return `
      <div class="store-card ${badgeClass} ${isSelected ? 'active-store-card' : ''}" id="store-card-${store.id}">
        <div class="store-img-wrap" onclick="flyToStore(${store.id})" style="cursor: pointer;">
          <img src="${store.imageUrl || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'}" alt="${name}">
          <span class="store-brand-pill ${badgeClass}">${badgeLabel}</span>
          <span class="store-city-badge">${store.city}</span>
        </div>
        <div class="store-content">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
            <h3 class="store-title" onclick="flyToStore(${store.id})" style="cursor: pointer;">${name}</h3>
            <span class="store-rating-tag">★ ${store.rating || '4.9'}</span>
          </div>
          <div class="store-meta-list">
            <div class="store-meta-item">
              <span class="store-meta-icon">📍</span>
              <div><strong>Manzil:</strong> ${address}</div>
            </div>
            ${store.landmark ? `
              <div class="store-meta-item">
                <span class="store-meta-icon">🏢</span>
                <div><strong>Mo'ljal:</strong> ${store.landmark}</div>
              </div>
            ` : ''}
            <div class="store-meta-item">
              <span class="store-meta-icon">🕒</span>
              <div><strong>Ish vaqti:</strong> ${store.workingHours || '10:00 - 22:00'}</div>
            </div>
            <div class="store-meta-item">
              <span class="store-meta-icon">📞</span>
              <div><strong>Telefon:</strong> <a href="tel:${store.phone}">${store.phone}</a></div>
            </div>
          </div>
          <div class="store-actions">
            <button class="btn-locate-map" onclick="flyToStore(${store.id})">
              <span>🗺️</span> Xaritada ko'rish
            </button>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-map-link" title="Google Maps da ochish">
              <span>Google Maps</span> ↗
            </a>
            <button class="btn-delete-store" onclick="deleteStore(${store.id})" title="Do'konni o'chirish">
              ✕
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Handle Add Store Submit (Yangi do'kon qo'shish)
async function handleAddStoreSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  // City default coordinates fallback if lat/lng empty
  const cityDefaults = {
    'toshkent': { lat: 41.311081, lng: 69.279737 },
    'samarqand': { lat: 39.6542, lng: 66.9597 },
    'buxoro': { lat: 39.7747, lng: 64.4286 },
    'andijon': { lat: 40.7821, lng: 72.3442 },
    'namangan': { lat: 40.9983, lng: 71.6726 },
    "farg'ona": { lat: 40.3842, lng: 71.7843 }
  };

  const cityKey = (form.city.value || '').trim().toLowerCase();
  const defCoords = cityDefaults[cityKey] || { lat: 41.311081, lng: 69.279737 };

  const parsedLat = form.lat && form.lat.value ? parseFloat(form.lat.value) : defCoords.lat;
  const parsedLng = form.lng && form.lng.value ? parseFloat(form.lng.value) : defCoords.lng;

  const newStore = {
    id: Date.now(),
    nameUz: form.nameUz.value.trim(),
    nameRu: form.nameRu.value.trim() || form.nameUz.value.trim(),
    nameEn: form.nameEn.value.trim() || form.nameUz.value.trim(),
    brandType: form.brandType ? form.brandType.value : "VELVET & CO.",
    city: form.city.value.trim(),
    addressUz: form.addressUz.value.trim(),
    addressRu: form.addressRu.value.trim() || form.addressUz.value.trim(),
    addressEn: form.addressEn.value.trim() || form.addressUz.value.trim(),
    landmark: form.landmark.value.trim(),
    phone: form.phone.value.trim(),
    workingHours: form.workingHours.value.trim() || "09:00 - 21:00",
    lat: parsedLat,
    lng: parsedLng,
    rating: 5.0,
    reviewCount: 1,
    mapUrl: form.mapUrl.value.trim() || `https://maps.google.com/?q=${parsedLat},${parsedLng}`,
    imageUrl: form.imageUrl.value.trim() || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  };

  try {
    const res = await fetch(`${API_BASE}/stores`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStore)
    });
    if (res.ok) {
      const savedStore = await res.json();
      savedStore.lat = savedStore.lat || newStore.lat;
      savedStore.lng = savedStore.lng || newStore.lng;
      savedStore.brandType = savedStore.brandType || newStore.brandType;
      state.stores.unshift(savedStore);
    } else {
      state.stores.unshift(newStore);
    }
  } catch (err) {
    state.stores.unshift(newStore);
  } finally {
    submitBtn.disabled = false;
    form.reset();
    closeModal('addStoreModal');
    updateStoreFilterCounts();
    renderStores();
    renderStoresMapMarkers();
    flyToStore(newStore.id);
    showToast("Yangi do'kon xaritaga muvaffaqiyatli qo'shildi!", 'success');
  }
}

// Delete Store
async function deleteStore(id) {
  const confirmMsg = state.lang === 'ru' ? "Вы действительно хотите удалить этот магазин?" :
                     state.lang === 'en' ? "Are you sure you want to delete this store?" :
                     "Ushbu do'kon manzilini o'chirishga ishonchingiz komilmi?";
  if (!confirm(confirmMsg)) return;

  try {
    await fetch(`${API_BASE}/stores/${id}`, { method: 'DELETE' });
  } catch (err) {}

  state.stores = state.stores.filter(s => s.id !== id);
  updateStoreFilterCounts();
  renderStores();
  renderStoresMapMarkers();
  showToast("Do'kon o'chirildi", 'info');
}

// Load Categories
async function loadCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (res.ok) {
      state.categories = await res.json();
    } else {
      state.categories = fallbackCategories;
    }
  } catch (err) {
    state.categories = fallbackCategories;
  }
  renderCategories();
  renderCategoryFilterSidebar();
}

// Load Products
async function loadProducts() {
  try {
    let url = `${API_BASE}/products?sortBy=${state.sortBy}`;
    if (state.activeCategory) url += `&category=${state.activeCategory}`;
    if (state.activeBrand) url += `&brand=${encodeURIComponent(state.activeBrand)}`;
    if (state.activeBrandOrigin && state.activeBrandOrigin !== 'all') url += `&brandOrigin=${encodeURIComponent(state.activeBrandOrigin)}`;
    if (state.searchQuery) url += `&q=${encodeURIComponent(state.searchQuery)}`;
    if (state.selectedSize) url += `&size=${state.selectedSize}`;
    if (state.selectedColor) url += `&color=${state.selectedColor}`;
    if (state.minPrice) url += `&minPrice=${state.minPrice}`;
    if (state.maxPrice) url += `&maxPrice=${state.maxPrice}`;

    const res = await fetch(url);
    if (res.ok) {
      state.products = await res.json();
    } else {
      state.products = filterLocalProducts();
    }
  } catch (err) {
    state.products = filterLocalProducts();
  }
  renderProducts();
  renderCatalogProducts();
}

function filterLocalProducts() {
  let list = [...fallbackProducts];
  if (state.activeCategory) {
    list = list.filter(p => p.category?.slug === state.activeCategory);
  }
  if (state.activeBrand) {
    list = list.filter(p => p.brand && p.brand.toLowerCase() === state.activeBrand.toLowerCase());
  }
  if (state.activeBrandOrigin && state.activeBrandOrigin !== 'all') {
    list = list.filter(p => p.brandOrigin && p.brandOrigin.toLowerCase() === state.activeBrandOrigin.toLowerCase());
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => (p.name && p.name.toLowerCase().includes(q)) ||
                            (p.description && p.description.toLowerCase().includes(q)) ||
                            (p.brand && p.brand.toLowerCase().includes(q)));
  }
  if (state.selectedSize) {
    list = list.filter(p => p.sizes?.includes(state.selectedSize));
  }
  if (state.selectedColor) {
    list = list.filter(p => p.colors?.includes(state.selectedColor));
  }
  if (state.minPrice) {
    list = list.filter(p => p.price >= parseFloat(state.minPrice));
  }
  if (state.maxPrice) {
    list = list.filter(p => p.price <= parseFloat(state.maxPrice));
  }
  if (state.activeTab === 'featured') {
    list = list.filter(p => p.isFeatured);
  } else if (state.activeTab === 'new') {
    list = list.filter(p => p.isNewArrival);
  } else if (state.activeTab === 'bestseller') {
    list = list.filter(p => p.isBestSeller);
  } else if (state.activeTab === 'deal') {
    list = list.filter(p => p.isDeal);
  }
  return list;
}

// Render Categories Grid
function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = state.categories.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat.slug}')">
      <img src="${cat.imageUrl}" alt="${cat.name}" loading="lazy">
      <div class="category-overlay">
        <h4>${cat.name}</h4>
        <span>${t('cat_view')}</span>
      </div>
    </div>
  `).join('');
}

// Render Category Filter in Sidebar
function renderCategoryFilterSidebar() {
  const container = document.getElementById('categoryFilterList');
  if (!container) return;

  let html = `
    <li class="category-filter-item ${!state.activeCategory ? 'active' : ''}" onclick="filterByCategory(null)">
      <span>${t('filter_all_cats')}</span>
      <span>${fallbackProducts.length}</span>
    </li>
  `;

  html += state.categories.map(cat => `
    <li class="category-filter-item ${state.activeCategory === cat.slug ? 'active' : ''}" onclick="filterByCategory('${cat.slug}')">
      <span>${cat.name}</span>
      <span>→</span>
    </li>
  `).join('');

  container.innerHTML = html;
}

// Render Products Grid (Tabs Section)
function renderProducts() {
  const container = document.getElementById('trendingProductsGrid');
  if (!container) return;

  let displayProducts = state.products;
  if (state.activeTab === 'featured') {
    displayProducts = state.products.filter(p => p.isFeatured);
  } else if (state.activeTab === 'new') {
    displayProducts = state.products.filter(p => p.isNewArrival);
  } else if (state.activeTab === 'bestseller') {
    displayProducts = state.products.filter(p => p.isBestSeller);
  } else if (state.activeTab === 'deal') {
    displayProducts = state.products.filter(p => p.isDeal);
  }

  if (displayProducts.length === 0) {
    container.innerHTML = `<p style="grid-column: span 4; text-align: center; color: var(--text-muted); padding: 40px 0;">Mahsulotlar topilmadi.</p>`;
    return;
  }

  container.innerHTML = displayProducts.map(p => createProductCardHtml(p)).join('');
}

// Render Catalog Products (Catalog Section)
function renderCatalogProducts() {
  const container = document.getElementById('catalogProductsGrid');
  const countEl = document.getElementById('catalogProductCount');
  if (!container) return;

  if (countEl) countEl.innerText = `${state.products.length} ta mahsulot topildi`;

  if (state.products.length === 0) {
    container.innerHTML = `<p style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 60px 0;">Mos keluvchi mahsulotlar mavjud emas.</p>`;
    return;
  }

  container.innerHTML = state.products.map(p => createProductCardHtml(p)).join('');
}

// Generate Product Card HTML
function createProductCardHtml(p) {
  const isWish = state.wishlist.includes(p.id);
  const badgeHtml = p.discountPercent ? `<span class="badge badge-sale">-${p.discountPercent}%</span>` :
                    p.isNewArrival ? `<span class="badge badge-new">NEW</span>` :
                    p.isBestSeller ? `<span class="badge badge-hot">HOT</span>` : '';

  const flagEmoji = p.brandOriginCode === 'TR' ? '🇹🇷' : (p.brandOriginCode === 'IT' ? '🇮🇹' : '🏷️');
  const brandTagHtml = p.brand ? `
    <div class="product-brand-tag" onclick="event.stopPropagation(); filterByBrand('${p.brand}')" title="${p.brandOrigin || ''}">
      <span>${flagEmoji} ${p.brand}</span>
      <span class="brand-country">${p.brandOrigin || ''}</span>
    </div>
  ` : '';

  const quickViewLabel = state.lang === 'ru' ? 'Быстрый просмотр' : state.lang === 'en' ? 'Quick View' : 'Tezkor ko\'rish';

  return `
    <div class="product-card">
      <div class="product-thumb-wrap">
        <div class="product-badge-wrap">
          ${badgeHtml}
        </div>
        <button class="product-wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
          <svg width="18" height="18" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
        <img src="${p.primaryImage}" alt="${p.name}" loading="lazy">
        <button class="product-quick-view-btn" onclick="openQuickView(${p.id})">${quickViewLabel}</button>
      </div>
      <div class="product-details">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 4px;">
          <span class="product-category-name">${p.category ? p.category.name : 'Atelier'}</span>
          ${brandTagHtml}
        </div>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-rating">
          <div class="stars">★★★★★</div>
          <span class="rating-count">(${p.reviewCount || 12})</span>
        </div>
        <div class="product-footer">
          <div class="product-prices">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="quickAddToCart(${p.id})">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Cart Functionality
function quickAddToCart(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes && product.sizes.length ? product.sizes[0] : 'Standard';
  const defaultColor = product.colors && product.colors.length ? product.colors[0] : 'Klassik';

  addToCart(product, defaultSize, defaultColor, 1);
}

function addToCart(product, size, color, quantity = 1) {
  const existingIndex = state.cart.findIndex(
    item => item.productId === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      productId: product.id,
      productName: product.name,
      productImage: product.primaryImage,
      price: product.price,
      quantity: quantity,
      size: size,
      color: color
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`"${product.name}" ${t('toast_added')}`, 'success');
  openDrawer('cartDrawer');
}

function updateCartQty(index, delta) {
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(t('toast_removed'), 'info');
}

function saveCart() {
  localStorage.setItem('velvet_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.innerText = count;
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
        <p style="font-size: 16px; margin-bottom: 12px;">${t('cart_empty')}</p>
        <button class="btn btn-primary" onclick="closeAllModals(); scrollToShop();">${t('cart_empty_btn')}</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '$0.00';
    if (discountEl) discountEl.innerText = '-$0.00';
    if (shippingEl) shippingEl.innerText = '$0.00';
    if (totalEl) totalEl.innerText = '$0.00';
    return;
  }

  container.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item-row">
      <img src="${item.productImage}" alt="${item.productName}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.productName}</h4>
        <div class="cart-item-meta">O'lcham: ${item.size} | Rang: ${item.color}</div>
        <div class="cart-item-bottom">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">✕</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (state.appliedCoupon) {
    discount = (subtotal * state.appliedCoupon.discountPercent) / 100;
  }
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 10;
  const total = Math.max(0, subtotal - discount + shipping);

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (discountEl) discountEl.innerText = `-$${discount.toFixed(2)}`;
  if (shippingEl) shippingEl.innerText = shipping === 0 ? 'BEPUL' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

// Coupon Validation
async function applyCoupon() {
  const input = document.getElementById('couponCodeInput');
  if (!input || !input.value.trim()) {
    showToast(t('toast_coupon_empty'), 'error');
    return;
  }

  const code = input.value.trim().toUpperCase();
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  try {
    const res = await fetch(`${API_BASE}/coupons/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, orderAmount: subtotal })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.valid) {
        state.appliedCoupon = { code: data.code, discountPercent: data.discountPercent, discountAmount: data.discountAmount };
        showToast(data.message, 'success');
        renderCartDrawer();
      } else {
        showToast(data.message, 'error');
      }
    } else {
      applyLocalCoupon(code, subtotal);
    }
  } catch (err) {
    applyLocalCoupon(code, subtotal);
  }
}

function applyLocalCoupon(code, subtotal) {
  if (code === 'WELCOME10') {
    state.appliedCoupon = { code: 'WELCOME10', discountPercent: 10 };
    showToast("Kupon qo'llandi! 10% chegirma.", 'success');
  } else if (code === 'SPRING20') {
    state.appliedCoupon = { code: 'SPRING20', discountPercent: 20 };
    showToast("Kupon qo'llandi! 20% chegirma.", 'success');
  } else if (code === 'VIP30') {
    state.appliedCoupon = { code: 'VIP30', discountPercent: 30 };
    showToast("Kupon qo'llandi! 30% chegirma.", 'success');
  } else {
    showToast("Yaroqsiz kupon kodi!", 'error');
  }
  renderCartDrawer();
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Istaklar ro'yxatidan olib tashlandi.", 'info');
  } else {
    state.wishlist.push(productId);
    showToast("Istaklar ro'yxatiga saqlandi! ❤️", 'success');
  }
  localStorage.setItem('velvet_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderProducts();
  renderCatalogProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.innerText = state.wishlist.length;
}

// Quick View Modal
function openQuickView(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.getElementById('quickViewContent');
  if (!modalContent) return;

  const sizes = product.sizes || ['S', 'M', 'L'];
  const colors = product.colors || ['Standart'];

  const flagEmoji = product.brandOriginCode === 'TR' ? '🇹🇷' : (product.brandOriginCode === 'IT' ? '🇮🇹' : '🏷️');
  const brandBadge = product.brand ? `
    <div style="margin: 8px 0;">
      <span class="product-brand-tag" style="font-size: 13px; padding: 5px 12px;">
        ${flagEmoji} <strong>${product.brand}</strong> &bull; <span class="brand-country">${product.brandOrigin || ''}</span>
      </span>
    </div>
  ` : '';

  modalContent.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img src="${product.primaryImage}" alt="${product.name}" class="quick-view-img">
      </div>
      <div class="quick-view-details">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="product-category-name">${product.category ? product.category.name : 'Kolleksiya'}</span>
          ${brandBadge}
        </div>
        <h3>${product.name}</h3>
        <div class="product-rating">
          <div class="stars">★★★★★</div>
          <span class="rating-count">${product.rating} (${product.reviewCount} sharh)</span>
        </div>
        <div class="product-prices" style="margin: 14px 0;">
          <span class="price-current" style="font-size: 26px;">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="price-old" style="font-size: 18px;">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p class="quick-view-desc">${product.description}</p>
        
        <div style="margin-bottom: 16px;">
          <label style="font-size: 13px; font-weight: 700; display: block; margin-bottom: 6px;">O'lcham:</label>
          <div class="size-chips" id="qvSizeChips">
            ${sizes.map((s, idx) => `
              <button class="size-chip ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize(this, '${s}')">${s}</button>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <label style="font-size: 13px; font-weight: 700; display: block; margin-bottom: 6px;">Rang:</label>
          <div class="size-chips" id="qvColorChips">
            ${colors.map((c, idx) => `
              <button class="size-chip ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewColor(this, '${c}')">${c}</button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 14px; align-items: center;">
          <div class="qty-control" style="height: 46px;">
            <button class="qty-btn" style="width: 36px;" onclick="adjustQvQty(-1)">-</button>
            <span class="qty-val" id="qvQtyVal" style="width: 44px; font-size: 15px;">1</span>
            <button class="qty-btn" style="width: 36px;" onclick="adjustQvQty(1)">+</button>
          </div>
          <button class="btn btn-accent" style="flex-grow: 1;" onclick="addQuickViewToCart(${product.id})">
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  `;

  window.qvSelectedSize = sizes[0];
  window.qvSelectedColor = colors[0];
  window.qvQuantity = 1;

  openModal('quickViewModal');
}

function selectQuickViewSize(btn, size) {
  document.querySelectorAll('#qvSizeChips .size-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.qvSelectedSize = size;
}

function selectQuickViewColor(btn, color) {
  document.querySelectorAll('#qvColorChips .size-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.qvSelectedColor = color;
}

function adjustQvQty(delta) {
  window.qvQuantity = Math.max(1, (window.qvQuantity || 1) + delta);
  const el = document.getElementById('qvQtyVal');
  if (el) el.innerText = window.qvQuantity;
}

function addQuickViewToCart(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, window.qvSelectedSize, window.qvSelectedColor, window.qvQuantity || 1);
  closeModal('quickViewModal');
}

// Checkout and Order Placement
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Xarid qilish uchun avval mahsulot tanlang!", 'error');
    return;
  }
  closeDrawer('cartDrawer');
  openModal('checkoutModal');
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerText = "Buyurtma yuborilmoqda...";

  const orderData = {
    customerName: form.customerName.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    shippingAddress: form.shippingAddress.value.trim(),
    city: form.city.value.trim(),
    postalCode: form.postalCode.value.trim(),
    paymentMethod: form.paymentMethod.value,
    couponCode: state.appliedCoupon ? state.appliedCoupon.code : null,
    items: state.cart.map(i => ({
      productId: i.productId,
      productName: i.productName,
      productImage: i.productImage,
      price: i.price,
      quantity: i.quantity,
      size: i.size,
      color: i.color,
      subtotal: i.price * i.quantity
    }))
  };

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (res.ok) {
      const order = await res.json();
      completeOrderSuccess(order);
    } else {
      const fakeOrder = {
        orderNumber: 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
        customerName: orderData.customerName,
        totalAmount: state.cart.reduce((s, i) => s + i.price * i.quantity, 0)
      };
      completeOrderSuccess(fakeOrder);
    }
  } catch (err) {
    const fakeOrder = {
      orderNumber: 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      customerName: orderData.customerName,
      totalAmount: state.cart.reduce((s, i) => s + i.price * i.quantity, 0)
    };
    completeOrderSuccess(fakeOrder);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = t('checkout_btn');
  }
}

function completeOrderSuccess(order) {
  closeModal('checkoutModal');
  state.cart = [];
  state.appliedCoupon = null;
  saveCart();
  updateCartBadge();

  const successBox = document.getElementById('orderSuccessDetails');
  if (successBox) {
    successBox.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 16px;">✓</div>
        <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">Buyurtmangiz Qabul Qilindi!</h3>
        <p style="color: var(--secondary); margin-bottom: 16px;">Xaridingiz uchun tashakkur, ${order.customerName}.</p>
        <div style="background: #f9fafb; padding: 14px; border-radius: var(--radius-md); font-family: monospace; font-size: 16px; font-weight: 700; margin-bottom: 20px;">
          Buyurtma raqami: ${order.orderNumber}
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">Operatorlarimiz tez orada siz bilan bog'lanadilar.</p>
        <button class="btn btn-primary" onclick="closeModal('orderSuccessModal')">Xaridni davom ettirish</button>
      </div>
    `;
  }
  openModal('orderSuccessModal');
}

// Flash Sale Countdown
function initCountdown() {
  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

  setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const hEl = document.getElementById('timerHours');
    const mEl = document.getElementById('timerMins');
    const sEl = document.getElementById('timerSecs');

    if (hEl) hEl.innerText = hours < 10 ? '0' + hours : hours;
    if (mEl) mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (sEl) sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

// Event Listeners & Filter Handlers
function setupEventListeners() {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderProducts();
    });
  });

  // Header Search Input
  const searchInput = document.getElementById('headerSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      loadProducts();
    });
  }

  // Size Filter Chips in Sidebar
  document.querySelectorAll('#sizeFilterChips .size-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        state.selectedSize = null;
      } else {
        document.querySelectorAll('#sizeFilterChips .size-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedSize = btn.innerText;
      }
      loadProducts();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      loadProducts();
    });
  }

  // Price Filters
  const minPriceInput = document.getElementById('minPriceInput');
  const maxPriceInput = document.getElementById('maxPriceInput');
  if (minPriceInput) {
    minPriceInput.addEventListener('change', (e) => {
      state.minPrice = e.target.value;
      loadProducts();
    });
  }
  if (maxPriceInput) {
    maxPriceInput.addEventListener('change', (e) => {
      state.maxPrice = e.target.value;
      loadProducts();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Tabriklaymiz! 15% chegirma emailingizga yuborildi.", 'success');
      newsletterForm.reset();
    });
  }
}

function filterByCategory(slug) {
  state.activeCategory = slug;
  renderCategoryFilterSidebar();
  loadProducts();
  scrollToShop();
}

function clearAllFilters() {
  state.activeCategory = null;
  state.activeBrand = null;
  state.activeBrandOrigin = null;
  state.searchQuery = '';
  state.selectedSize = null;
  state.selectedColor = null;
  state.minPrice = null;
  state.maxPrice = null;
  state.sortBy = 'featured';

  const sInput = document.getElementById('headerSearchInput');
  if (sInput) sInput.value = '';
  const minInput = document.getElementById('minPriceInput');
  if (minInput) minInput.value = '';
  const maxInput = document.getElementById('maxPriceInput');
  if (maxInput) maxInput.value = '';

  document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#sidebarOriginPills .brand-origin-pill').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-sidebar-origin') === 'all');
  });
  document.querySelectorAll('#brandNavFilters .brand-nav-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-brand-origin') === 'all');
  });
  renderCategoryFilterSidebar();
  renderBrandSidebarChips();
  renderBrandsGrid('all');
  loadProducts();
}

// Brands Section & Management (Turkiya & Italiya)
function renderBrandsGrid(originFilter = 'all') {
  const container = document.getElementById('brandsGrid');
  if (!container) return;

  let filtered = brandList;
  if (originFilter && originFilter !== 'all') {
    filtered = brandList.filter(b => b.origin.toLowerCase() === originFilter.toLowerCase());
  }

  container.innerHTML = filtered.map(b => {
    const flag = b.code === 'TR' ? '🇹🇷' : (b.code === 'IT' ? '🇮🇹' : '🏷️');
    const desc = state.lang === 'ru' ? b.descRu : (state.lang === 'en' ? b.descEn : b.descUz);
    const originLabel = state.lang === 'ru' ? (b.code === 'TR' ? 'Турция' : 'Италия') :
                        state.lang === 'en' ? (b.code === 'TR' ? 'Turkey' : 'Italy') :
                        (b.code === 'TR' ? 'Turkiya' : 'Italiya');
    const isActive = state.activeBrand === b.name;

    return `
      <div class="brand-card origin-${b.code.toLowerCase()} ${isActive ? 'active' : ''}" onclick="filterByBrand('${b.name}')">
        <div class="brand-flag-icon">${flag}</div>
        <h4 class="brand-card-title">${b.name}</h4>
        <div class="brand-card-country">${originLabel}</div>
        <p class="brand-card-desc">${desc}</p>
        <span class="brand-card-action">${t('cat_view')}</span>
      </div>
    `;
  }).join('');
}

function filterBrandsByOrigin(origin) {
  state.activeBrandOrigin = origin === 'all' ? null : origin;
  document.querySelectorAll('#brandNavFilters .brand-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-brand-origin') === origin);
  });
  document.querySelectorAll('#sidebarOriginPills .brand-origin-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-sidebar-origin') === origin);
  });
  renderBrandsGrid(origin);
  loadProducts();
}

function filterByBrand(brandName) {
  if (state.activeBrand === brandName) {
    state.activeBrand = null;
  } else {
    state.activeBrand = brandName;
  }
  renderBrandSidebarChips();
  renderBrandsGrid(state.activeBrandOrigin || 'all');
  loadProducts();
  scrollToShop();
}

function filterByBrandOrigin(origin) {
  filterBrandsByOrigin(origin);
  scrollToShop();
}

function renderBrandSidebarChips() {
  const container = document.getElementById('brandFilterChips');
  if (!container) return;

  container.innerHTML = brandList.map(b => `
    <button class="brand-chip ${state.activeBrand === b.name ? 'active' : ''}" onclick="filterByBrand('${b.name}')">
      ${b.code === 'TR' ? '🇹🇷' : '🇮🇹'} ${b.name}
    </button>
  `).join('');
}

function scrollToShop() {
  const shopEl = document.getElementById('catalogSection');
  if (shopEl) {
    shopEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal & Drawer Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

function openDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  if (id === 'cartDrawer') renderCartDrawer();
}

function closeDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
}

// Toast System
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
