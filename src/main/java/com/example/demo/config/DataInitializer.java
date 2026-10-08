package com.example.demo.config;

import com.example.demo.model.Category;
import com.example.demo.model.Coupon;
import com.example.demo.model.Product;
import com.example.demo.model.Review;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.CouponRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ReviewRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final CouponRepository couponRepository;
    private final ReviewRepository reviewRepository;

    public DataInitializer(CategoryRepository categoryRepository,
                           ProductRepository productRepository,
                           CouponRepository couponRepository,
                           ReviewRepository reviewRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.couponRepository = couponRepository;
        this.reviewRepository = reviewRepository;
    }

    @Override
    public void run(String... args) {
        if (categoryRepository.count() > 0) {
            return; // Data already seeded
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
        // Product 1: Elegant Trench Coat
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
                outerwear
        );
        p1.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?auto=format&fit=crop&w=800&q=80"
        ));
        p1.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p1.setColors(Arrays.asList("Bej", "Qora", "Xaki"));

        // Product 2: Cashmere Knit Sweater
        Product p2 = new Product(
                "Oversize Kash勃ir Sviter",
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
                women
        );
        p2.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
        ));
        p2.setSizes(Arrays.asList("XS", "S", "M", "L"));
        p2.setColors(Arrays.asList("Krem", "Kulrang", "Jigarrang"));

        // Product 3: Men's Wool Blazer
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
                men
        );
        p3.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80"
        ));
        p3.setSizes(Arrays.asList("M", "L", "XL", "XXL"));
        p3.setColors(Arrays.asList("To'q ko'k", "Qora", "Kulrang"));

        // Product 4: Floral Silk Maxi Dress
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
                dresses
        );
        p4.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
        ));
        p4.setSizes(Arrays.asList("S", "M", "L"));
        p4.setColors(Arrays.asList("Zangori", "Pushti", "Oq"));

        // Product 5: Streetwear Minimalist Hoodie
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
                men
        );
        p5.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
        ));
        p5.setSizes(Arrays.asList("S", "M", "L", "XL", "XXL"));
        p5.setColors(Arrays.asList("Qora", "Oq", "Zaytun yashil", "Mox"));

        // Product 6: Minimalist Leather Sneakers
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
                shoes
        );
        p6.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
        ));
        p6.setSizes(Arrays.asList("39", "40", "41", "42", "43", "44"));
        p6.setColors(Arrays.asList("Oq", "Qora"));

        // Product 7: Handcrafted Leather Tote Bag
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
                accessories
        );
        p7.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
        ));
        p7.setSizes(Arrays.asList("Standard"));
        p7.setColors(Arrays.asList("Jigarrang", "Qora", "Karamel"));

        // Product 8: Denim Jacket Vintage Wash
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
                outerwear
        );
        p8.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=800&q=80"
        ));
        p8.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p8.setColors(Arrays.asList("Moviy", "Qora"));

        // Product 9: Linen Summer Shirt
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
                men
        );
        p9.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
        ));
        p9.setSizes(Arrays.asList("S", "M", "L", "XL"));
        p9.setColors(Arrays.asList("Oq", "Bej", "Osmonrang"));

        // Product 10: Wool Beret & Scarf Set
        Product p10 = new Product(
                "Junli Beret va Shrf To'plami",
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
                accessories
        );
        p10.setImages(Arrays.asList(
                "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80"
        ));
        p10.setSizes(Arrays.asList("Universal"));
        p10.setColors(Arrays.asList("Qizil", "Qora", "Kulrang"));

        productRepository.saveAll(Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10));

        // 3. Seed Coupons
        Coupon c1 = new Coupon("WELCOME10", 10, BigDecimal.ZERO, true);
        Coupon c2 = new Coupon("SPRING20", 20, BigDecimal.valueOf(50), true);
        Coupon c3 = new Coupon("VIP30", 30, BigDecimal.valueOf(100), true);
        couponRepository.saveAll(Arrays.asList(c1, c2, c3));

        // 4. Seed Reviews
        Review r1 = new Review(p1.getId(), "Madina Rahimova", 5, "Trençkot ajoyib sifatda keldi! Matosi juda qalin va qulay.");
        Review r2 = new Review(p1.getId(), "Dildora Umarova", 5, "Fasoni xuddi rasmda ko'rsatilgandek. Tavsiya qilaman!");
        Review r3 = new Review(p3.getId(), "Bekzod Aliyev", 5, "Erkaklar pidjagi kutilganidan ham yaxshi chiqdi, andozasi juda chiroyli.");
        Review r4 = new Review(p6.getId(), "Shaxboz Qosimov", 5, "Krossovkalar juda qulay, oyoqni hech ham charchatmaydi.");
        reviewRepository.saveAll(Arrays.asList(r1, r2, r3, r4));

        System.out.println(">>> Kiyim-kechak do'koni ma'lumotlari muvaffaqiyatli yuklandi! <<<");
    }
}
