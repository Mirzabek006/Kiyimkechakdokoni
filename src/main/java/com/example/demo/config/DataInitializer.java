package com.example.demo.config;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final CouponRepository couponRepository;
    private final ReviewRepository reviewRepository;
    private final StoreRepository storeRepository;

    public DataInitializer(CategoryRepository categoryRepository,
                           ProductRepository productRepository,
                           CouponRepository couponRepository,
                           ReviewRepository reviewRepository,
                           StoreRepository storeRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.couponRepository = couponRepository;
        this.reviewRepository = reviewRepository;
        this.storeRepository = storeRepository;
    }

    @Override
    public void run(String... args) {
        seedStores();
        seedCategoriesAndProducts();
    }

    private void seedStores() {
        if (storeRepository.count() > 0) {
            return;
        }

        // Store 1: VIP Brand Tashkent City Mall
        Store s1 = new Store(
                "VIP Brand Exclusive Boutique (Toshkent City)",
                "VIP Brand Эксклюзивный Бутик (Ташкент Сити)",
                "VIP Brand Exclusive Boutique (Tashkent City)",
                "VIP Brand",
                "Toshkent",
                "Toshkent City Mall, 2-qavat, VIP Gallery 204",
                "Tashkent City Mall, 2 этаж, VIP Gallery 204",
                "Tashkent City Mall, 2nd Floor, VIP Gallery 204",
                "Hilton mehmonxonasi va Kongress markazi ro'parasida",
                "+998 (71) 205-77-77",
                "10:00 - 23:00",
                41.3142,
                69.2515,
                5.0,
                168,
                "https://maps.google.com/?q=41.3142,69.2515",
                "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
        );

        // Store 2: Caber Brand Magic City
        Store s2 = new Store(
                "Caber Brand Cyber & Techwear Store (Magic City)",
                "Caber Brand Кибер-магазин Techwear (Magic City)",
                "Caber Brand Cyber & Techwear Store (Magic City)",
                "Caber Brand",
                "Toshkent",
                "Bobur ko'chasi 174, Magic City Park, Pavilion 8",
                "улица Бабура 174, парк Magic City, Павильон 8",
                "174 Babur Street, Magic City Park, Pavilion 8",
                "Magic City fontani va amfiteatr yaqinida",
                "+998 (90) 880-01-01",
                "10:00 - 23:00",
                41.3039,
                69.2458,
                4.9,
                142,
                "https://maps.google.com/?q=41.3039,69.2458",
                "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
        );

        // Store 3: VELVET Flagship Amir Temur
        Store s3 = new Store(
                "VELVET & CO. Toshkent Bosh Do'koni (Flagship)",
                "Главный флагманский магазин в Ташкенте (Флагман)",
                "Tashkent Flagship Central Boutique",
                "VELVET & CO.",
                "Toshkent",
                "Amir Temur shoh ko'chasi, 105-uy",
                "проспект Амира Темура, дом 105",
                "105 Amir Temur Avenue",
                "Metro 'Minor' yaqinida, 'Oloy' bozori ro'parasida",
                "+998 (71) 200-00-01",
                "10:00 - 22:00",
                41.3285,
                69.2842,
                4.9,
                210,
                "https://maps.google.com/?q=41.3285,69.2842",
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
        );

        // Store 4: VIP Brand Mirabad Avenue
        Store s4 = new Store(
                "VIP Brand Haute Couture Lounge (Mirabad Avenue)",
                "VIP Brand Салон Высокой Моды (Mirabad Avenue)",
                "VIP Brand Haute Couture Lounge (Mirabad Avenue)",
                "VIP Brand",
                "Toshkent",
                "Mirobod tumani, Mirabad Avenue rezidensiyasi, D blok",
                "Мирабадский район, ЖК Mirabad Avenue, блок D",
                "Mirabad District, Mirabad Avenue Residence, Block D",
                "Grand Mir mehmonxonasi yonidagi elit savdo xiyoboni",
                "+998 (71) 207-99-99",
                "11:00 - 22:00",
                41.2965,
                69.2718,
                5.0,
                95,
                "https://maps.google.com/?q=41.2965,69.2718",
                "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80"
        );

        // Store 5: VIP Brand Samarkand Registan
        Store s5 = new Store(
                "VIP Brand Royal Salon (Samarqand Registon)",
                "VIP Brand Королевский Салон (Самарканд Регистан)",
                "VIP Brand Royal Salon (Samarkand Registan)",
                "VIP Brand",
                "Samarqand",
                "Registon ko'chasi 58, 'Registon Plaza' 1-qavat",
                "улица Регистан 58, 1 этаж Регистан Плаза",
                "58 Registan Street, Registan Plaza 1st Floor",
                "Registon me'moriy ansambliga 200m masofada",
                "+998 (66) 235-88-88",
                "09:30 - 21:30",
                39.6558,
                66.9745,
                4.9,
                114,
                "https://maps.google.com/?q=39.6558,66.9745",
                "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80"
        );

        // Store 6: Caber Brand Samarkand Cyber Lab
        Store s6 = new Store(
                "Caber Brand Cyber Lab (Samarqand)",
                "Caber Brand Кибер-магазин (Самарканд)",
                "Caber Brand Cyber Lab (Samarkand)",
                "Caber Brand",
                "Samarqand",
                "Universitet xiyoboni 45, 'Silk Road' Savdo Majmuasi",
                "Университетский бульвар 45, ТЦ 'Silk Road'",
                "45 University Boulevard, Silk Road Center",
                "Samarqand Davlat Universiteti bosh binosi ro'parasida",
                "+998 (66) 240-55-11",
                "10:00 - 22:00",
                39.6482,
                66.9602,
                4.8,
                88,
                "https://maps.google.com/?q=39.6482,66.9602",
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        );

        // Store 7: VIP Brand Bukhara Silk Road
        Store s7 = new Store(
                "VIP Brand Silk Road Atelier (Buxoro Labi-Hovuz)",
                "VIP Brand Шёлковое Ателье (Бухара Ляби-Хауз)",
                "VIP Brand Silk Road Atelier (Bukhara Lyabi-Hauz)",
                "VIP Brand",
                "Buxoro",
                "B. Naqshband ko'chasi, 24-uy",
                "улица Б. Накшбанд, дом 24",
                "24 B. Naqshband Street",
                "Labi-Hovuz me'moriy majmuasi yonida",
                "+998 (65) 224-77-88",
                "09:30 - 21:00",
                39.7747,
                64.4286,
                5.0,
                76,
                "https://maps.google.com/?q=39.7747,64.4286",
                "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80"
        );

        // Store 8: Caber Brand Fergana Urban Hub
        Store s8 = new Store(
                "Caber Brand Urban Hub (Farg'ona)",
                "Caber Brand Урбан Хаб (Фергана)",
                "Caber Brand Urban Hub (Fergana)",
                "Caber Brand",
                "Farg'ona",
                "Al-Farg'oniy ko'chasi 32, 'Atlas' savdo markazi, 2-qavat",
                "улица Аль-Фергани 32, ТЦ 'Atlas', 2 этаж",
                "32 Al-Fergani Street, Atlas Shopping Mall, 2nd Floor",
                "Markaziy viloyat teatri ro'parasida",
                "+998 (73) 224-11-22",
                "09:00 - 21:00",
                40.3842,
                71.7843,
                4.9,
                64,
                "https://maps.google.com/?q=40.3842,71.7843",
                "https://images.unsplash.com/photo-1519748771451-a94c59638755?auto=format&fit=crop&w=800&q=80"
        );

        // Store 9: VELVET Andijan Navro'z Mall
        Store s9 = new Store(
                "VELVET & CO. Andijon Filiali (Navro'z Mall)",
                "VELVET & CO. Андижанский Филиал (Навруз Молл)",
                "VELVET & CO. Andijan Branch (Navruz Mall)",
                "VELVET & CO.",
                "Andijon",
                "Bobur shoh ko'chasi 48, 'Navro'z Mall' majmuasi",
                "проспект Бабура 48, комплекс 'Навруз Молл'",
                "48 Babur Avenue, Navruz Mall",
                "Andijon temir yo'l vokzali va Bobur maydoni oralig'ida",
                "+998 (74) 223-40-50",
                "09:00 - 21:30",
                40.7821,
                72.3442,
                4.8,
                82,
                "https://maps.google.com/?q=40.7821,72.3442",
                "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
        );

        // Store 10: VELVET Namangan Sardoba Plaza
        Store s10 = new Store(
                "VELVET & CO. Namangan Gullar Diyori (Sardoba)",
                "VELVET & CO. Наманганский Филиал (Сардоба)",
                "VELVET & CO. Namangan Branch (Sardoba)",
                "VELVET & CO.",
                "Namangan",
                "Bobur bog'i ko'chasi 12, 'Sardoba Plaza'",
                "улица Парка Бабура 12, 'Сардоба Плаза'",
                "12 Babur Park Street, Sardoba Plaza",
                "Bobur nomidagi markaziy bog' yonida",
                "+998 (69) 227-12-34",
                "09:00 - 21:00",
                40.9983,
                71.6726,
                4.8,
                59,
                "https://maps.google.com/?q=40.9983,71.6726",
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
        );

        storeRepository.saveAll(Arrays.asList(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10));
        System.out.println(">>> 10 ta do'kon lokatsiyasi (VIP, Caber, Velvet) DB ga muvaffaqiyatli saqlandi! <<<");
    }

    private void seedCategoriesAndProducts() {
        if (categoryRepository.count() > 0) {
            return;
        }

        // 1. Seed Categories
        Category women = new Category(
                "Ayollar kolleksiyasi",
                "women",
                "Nafis, zamonaviy va bejirim ayollar liboslari",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
                1
        );
        Category men = new Category(
                "Erkaklar kolleksiyasi",
                "men",
                "Klassik va kundalik uslubdagi erkaklar kiyimlari",
                "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80",
                2
        );
        Category outerwear = new Category(
                "Ustki kiyimlar",
                "outerwear",
                "Issiq kurtkalar, palto va trençkotlar",
                "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
                3
        );
        Category dresses = new Category(
                "Ko'ylaklar va Kostyumlar",
                "dresses",
                "Kechki bazm va ofis uchun maxsus liboslar",
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
                4
        );
        Category shoes = new Category(
                "Oyoq kiyimlar",
                "shoes",
                "Qulay krossovkalar va sifatli charm poyabzallar",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
                5
        );
        Category accessories = new Category(
                "Aksessuarlar & Sumkalar",
                "accessories",
                "Elegant sumkalar, soatlar va kamar to'plami",
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
                6
        );

        categoryRepository.saveAll(Arrays.asList(women, men, outerwear, dresses, shoes, accessories));

        // 2. Seed Products
        // Product 1: Classic Trench Coat (Massimo Dutti)
        Product p1 = new Product(
                "Klassik Bej Trençkot",
                "classic-beige-trench-coat",
                "Yuqori sifatli suv o'tkazmaydigan gabardin matodan tikilgan, ikki qator tugmali klassik ayollar trençkoti. Bahor va kuz mavsumi uchun mukammal tanlov.",
                BigDecimal.valueOf(89.00),
                BigDecimal.valueOf(129.00),
                31,
                4.9,
                48,
                25,
                true,  // isFeatured
                true,  // isNewArrival
                false, // isBestSeller
                true,  // isDeal
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
                outerwear,
                "Massimo Dutti",
                "Italiya",
                "IT"
        );
        p1.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?auto=format&fit=crop&w=800&q=80"
        ));
        p1.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p1.setColors(Arrays.asList("Bej", "Qora", "Xaki"));

        // Product 2: Cashmere Knit Sweater (Koton)
        Product p2 = new Product(
                "Oversize Kashmir Sviter",
                "oversize-cashmere-sweater",
                "100% yumshoq tabiiy kashmir junidan to'qilgan qulay sviter. Kundalik obrazlaringizga nafislik va iliqlik bag'ishlaydi.",
                BigDecimal.valueOf(65.00),
                BigDecimal.valueOf(85.00),
                23,
                4.8,
                36,
                40,
                true,
                false,
                true,
                false,
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
                women,
                "Koton",
                "Turkiya",
                "TR"
        );
        p2.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
        ));
        p2.setSizes(Arrays.asList("XS", "S", "M", "L"));
        p2.setColors(Arrays.asList("Krem", "Kulrang", "Jigarrang"));

        // Product 3: Men's Wool Blazer (Emporio Armani)
        Product p3 = new Product(
                "Erkaklar Italiya Fason Pidjagi",
                "mens-wool-blazer",
                "Italiya andozasida tayyorlangan premium erkaklar kostyum-pidjagi. Biznes uchrashuvlar va tantanali kechalar uchun eng zo'r yechim.",
                BigDecimal.valueOf(119.00),
                BigDecimal.valueOf(160.00),
                25,
                5.0,
                29,
                18,
                true,
                true,
                true,
                false,
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                men,
                "Emporio Armani",
                "Italiya",
                "IT"
        );
        p3.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80"
        ));
        p3.setSizes(Arrays.asList("M", "L", "XL", "XXL"));
        p3.setColors(Arrays.asList("To'q ko'k", "Qora", "Kulrang"));

        // Product 4: Floral Silk Maxi Dress (Ipekyol)
        Product p4 = new Product(
                "Gulli Ipak Kechki Ko'ylak",
                "floral-silk-maxi-dress",
                "Yengil tabiiy ipak matodan tikilgan uzun gulli libos. Bel qismida elastik bog'ich va nafis yenglar bilan bezatilgan.",
                BigDecimal.valueOf(79.00),
                BigDecimal.valueOf(99.00),
                20,
                4.9,
                54,
                30,
                true,
                false,
                true,
                true,
                "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
                dresses,
                "Ipekyol",
                "Turkiya",
                "TR"
        );
        p4.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
        ));
        p4.setSizes(Arrays.asList("S", "M", "L"));
        p4.setColors(Arrays.asList("Zangori", "Pushti", "Oq"));

        // Product 5: Streetwear Hoodie (Colin's)
        Product p5 = new Product(
                "Og'ir Paxtali Streetwear Xudi",
                "streetwear-heavy-cotton-hoodie",
                "450 GSM zichlikdagi 100% paxta matosidan tayyorlangan premium xudi. Keng bichim (baggy fit) va qulay cho'ntak.",
                BigDecimal.valueOf(49.00),
                BigDecimal.valueOf(69.00),
                29,
                4.8,
                72,
                65,
                false,
                true,
                true,
                false,
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
                men,
                "Colin's",
                "Turkiya",
                "TR"
        );
        p5.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
        ));
        p5.setSizes(Arrays.asList("S", "M", "L", "XL", "XXL"));
        p5.setColors(Arrays.asList("Qora", "Oq", "Zaytun yashil"));

        // Product 6: Leather Sneakers (Prada)
        Product p6 = new Product(
                "Tabiiy Charm Oq Krossovka",
                "minimalist-white-leather-sneakers",
                "Toza minimalist uslubdagi charm krossovkalar. Qulay ortopedik patak va bardoshli taglik.",
                BigDecimal.valueOf(95.00),
                BigDecimal.valueOf(130.00),
                27,
                4.9,
                88,
                22,
                true,
                false,
                true,
                false,
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
                shoes,
                "Prada",
                "Italiya",
                "IT"
        );
        p6.setSizes(Arrays.asList("39", "40", "41", "42", "43", "44"));
        p6.setColors(Arrays.asList("Oq", "Qora"));

        // Product 7: Handcrafted Leather Tote Bag (Gucci)
        Product p7 = new Product(
                "Qo'lda Tikilgan Charm Sumka",
                "handcrafted-leather-tote-bag",
                "Premium to'liq charm matodan tikilgan keng hajmli ayollar sumkasi. Noutbuk va barcha kundalik buyumlar sig'adi.",
                BigDecimal.valueOf(110.00),
                BigDecimal.valueOf(150.00),
                26,
                5.0,
                41,
                15,
                true,
                true,
                false,
                true,
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
                accessories,
                "Gucci",
                "Italiya",
                "IT"
        );
        p7.setSizes(Arrays.asList("Standard"));
        p7.setColors(Arrays.asList("Jigarrang", "Qora", "Karamel"));

        // Product 8: Denim Jacket (Mavi Jeans)
        Product p8 = new Product(
                "Vintaj Djinsi Kurtka",
                "vintage-wash-denim-jacket",
                "Klassik 90-yillar uslubidagi djinsi kurtka. Bardoshli paxta djinsi va sifatli metall tugmalar.",
                BigDecimal.valueOf(59.00),
                BigDecimal.valueOf(79.00),
                25,
                4.7,
                63,
                35,
                false,
                true,
                false,
                false,
                "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=800&q=80",
                outerwear,
                "Mavi Jeans",
                "Turkiya",
                "TR"
        );
        p8.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p8.setColors(Arrays.asList("Moviy", "Qora"));

        // Product 9: Linen Summer Shirt (D'S Damat)
        Product p9 = new Product(
                "Zig'irpoya Yozgi Erkaklar Ko'ylagi",
                "mens-summer-linen-shirt",
                "100% tabiiy zig'ir (linen) matosidan tikilgan yozgi erkin ko'ylak. Nafas oluvchi va salqin tutuvchi tuzilish.",
                BigDecimal.valueOf(45.00),
                BigDecimal.valueOf(55.00),
                18,
                4.8,
                31,
                50,
                false,
                false,
                true,
                false,
                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
                men,
                "D'S Damat",
                "Turkiya",
                "TR"
        );
        p9.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p9.setColors(Arrays.asList("Oq", "Bej"));

        // Product 10: Wool Beret (LC Waikiki)
        Product p10 = new Product(
                "Junli Beret va Sharf To'plami",
                "wool-beret-scarf-set",
                "Yumshoq junli beret va uzun nafis sharf. Kuz-qish mavsumi uchun qulay va zamonaviy aksessuar.",
                BigDecimal.valueOf(35.00),
                BigDecimal.valueOf(45.00),
                22,
                4.9,
                19,
                28,
                false,
                true,
                false,
                true,
                "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
                accessories,
                "LC Waikiki",
                "Turkiya",
                "TR"
        );
        p10.setSizes(Arrays.asList("Universal"));
        p10.setColors(Arrays.asList("Qizil", "Qora"));

        // Product 11: VIP Brand Gold Evening Dress
        Product p11 = new Product(
                "VIP Brand Oltin Chokli Ipak Kechki Libos",
                "vip-brand-gold-silk-evening-dress",
                "Italiyaning eng sara tabiiy shoyi matosidan tikilgan, oltin ipli kashtali eksklyuziv VIP Brand kechki ko'ylagi. Oliy toifadagi marosimlar uchun.",
                BigDecimal.valueOf(185.00),
                BigDecimal.valueOf(245.00),
                24,
                5.0,
                67,
                15,
                true,
                true,
                true,
                true,
                "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
                dresses,
                "VIP Brand",
                "Italiya",
                "IT"
        );
        p11.setSizes(Arrays.asList("XS", "S", "M", "L"));
        p11.setColors(Arrays.asList("Zangori Oltin", "Zumrad", "Qora"));

        // Product 12: VIP Brand Milano Tuxedo
        Product p12 = new Product(
                "VIP Brand Milano Royal Baxmal Tuxedo",
                "vip-brand-milano-royal-velvet-tuxedo",
                "VIP elita tadbirlari uchun maxsus tayyorlangan, shoyi yoqali hashamatli qora baxmal erkaklar kostyumi.",
                BigDecimal.valueOf(260.00),
                BigDecimal.valueOf(340.00),
                23,
                5.0,
                49,
                12,
                true,
                true,
                true,
                false,
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                men,
                "VIP Brand",
                "Italiya",
                "IT"
        );
        p12.setSizes(Arrays.asList("48", "50", "52", "54"));
        p12.setColors(Arrays.asList("Qora", "To'q Binafsha"));

        // Product 13: Caber Brand Cyberpunk Jacket
        Product p13 = new Product(
                "Caber Brand Cyberpunk Suv O'tkazmaydigan Kurtka",
                "caber-brand-cyberpunk-waterproof-jacket",
                "Zamonaviy Caber Brand techwear texnologiyasi: nafas oluvchi membranali, neon reflektiv lentalari bilan himoyalangan suv o'tkazmaydigan kurtka.",
                BigDecimal.valueOf(115.00),
                BigDecimal.valueOf(155.00),
                25,
                4.9,
                84,
                30,
                true,
                true,
                true,
                true,
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
                outerwear,
                "Caber Brand",
                "Turkiya",
                "TR"
        );
        p13.setSizes(Arrays.asList("S", "M", "L", "XL", "XXL"));
        p13.setColors(Arrays.asList("Kiber Qora", "Neon Yashil"));

        // Product 14: Caber Brand Neon Hoodie
        Product p14 = new Product(
                "Caber Brand Neon Reflektiv Streetwear Xudi",
                "caber-brand-neon-reflective-hoodie",
                "480 GSM og'ir paxtali, kechasi nur qaytaruvchi kiber grafika tushirilgan Caber Brand oversize xudisi.",
                BigDecimal.valueOf(68.00),
                BigDecimal.valueOf(89.00),
                23,
                4.9,
                112,
                45,
                true,
                true,
                true,
                false,
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
                men,
                "Caber Brand",
                "Turkiya",
                "TR"
        );
        p14.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p14.setColors(Arrays.asList("Antratsit", "Kiber Oq"));

        productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14));

        // 3. Seed Coupons
        Coupon c1 = new Coupon("WELCOME10", 10, BigDecimal.ZERO, true);
        Coupon c2 = new Coupon("SPRING20", 20, BigDecimal.valueOf(50), true);
        Coupon c3 = new Coupon("VIP30", 30, BigDecimal.valueOf(100), true);
        couponRepository.saveAll(Arrays.asList(c1, c2, c3));

        // 4. Seed Reviews
        Review r1 = new Review(p1.getId(), "Madina Rahimova", 5, "Trençkot ajoyib sifatda keldi! Matosi juda qalin va qulay.");
        Review r2 = new Review(p11.getId(), "Sevara Karimova", 5, "VIP Brand libosi to'yimda hamma havas qildi! Oltin choklari haqiqiy san'at.");
        Review r3 = new Review(p12.getId(), "Bekzod Aliyev", 5, "VIP Brand baxmal smokingsi o'ta nafis va qomatga juda yarashdi.");
        Review r4 = new Review(p13.getId(), "Timur Rustamov", 5, "Caber Brand kiber kurtkasi yomg'irda ham, shamolda ham 100% himoya qiladi!");
        reviewRepository.saveAll(Arrays.asList(r1, r2, r3, r4));

        System.out.println(">>> Kiyim-kechak do'koni ma'lumotlari (VIP, Caber va boshqa brendlar) muvaffaqiyatli yuklandi! <<<");
    }
}
