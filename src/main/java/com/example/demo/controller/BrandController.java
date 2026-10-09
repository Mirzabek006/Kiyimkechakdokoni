package com.example.demo.controller;

import com.example.demo.dto.BrandDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/brands")
@CrossOrigin(origins = "*")
public class BrandController {

    private static final List<BrandDto> BRANDS = Arrays.asList(
            new BrandDto("VIP Brand", "Italiya", "IT",
                    "Eksklyuziv oliy toifadagi hashamatli kechki liboslar va maxsus smokinglar",
                    "Эксклюзивные роскошные вечерние платья и смокинги высшего класса",
                    "Exclusive high-end luxury evening gowns and custom tuxedos"),
            new BrandDto("Caber Brand", "Turkiya", "TR",
                    "Zamonaviy futuristik kiber-moda, funksional techwear va neon streetwear",
                    "Современная футуристическая кибер-мода, функциональный techwear и неоновый streetwear",
                    "Futuristic cyber fashion, functional techwear and neon streetwear"),
            new BrandDto("Koton", "Turkiya", "TR",
                    "Zamonaviy yoshlar va kundalik shahar uslubidagi qulay liboslar",
                    "Современная молодежная и повседневная городская одежда",
                    "Modern youth and casual urban fashion"),
            new BrandDto("Emporio Armani", "Italiya", "IT",
                    "Italiya nafisligi va klassik bichimning eng yuksak namunasi",
                    "Итальянская утонченность и вершина классического кроя",
                    "Italian elegance and classic tailoring"),
            new BrandDto("Ipekyol", "Turkiya", "TR",
                    "Nafis ipak matolar va ayollar uchun hashamatli biznes uslubi",
                    "Изысканные шелковые ткани и роскошный женский деловой стиль",
                    "Refined silk fabrics and luxury women's business wear"),
            new BrandDto("Dolce & Gabbana", "Italiya", "IT",
                    "Sitsiliya nafosati, boy bezaklar va yuqori moda asarlari",
                    "Сицилийский шарм, богатый декор и шедевры высокой моды",
                    "Sicilian romance, rich embellishments and haute couture"),
            new BrandDto("Colin's", "Turkiya", "TR",
                    "Sifatli jinsi mahsulotlari va erkin casual kundalik kiyimlar",
                    "Качественный деним и свободная повседневная одежда casual",
                    "Quality denim and relaxed everyday casual wear"),
            new BrandDto("Gucci", "Italiya", "IT",
                    "Zamonaviy hashamat, afsonaviy monogrammalar va charm aksessuarlar",
                    "Современная роскошь, легендарные монограммы и кожаные аксессуары",
                    "Modern luxury, iconic monograms and leather accessories"),
            new BrandDto("D'S Damat", "Turkiya", "TR",
                    "Erkaklar uchun nufuzli kostyum-shimlar va mukammal bichim",
                    "Престижные мужские костюмы и безупречный крой",
                    "Prestigious men's suits and impeccable tailoring"),
            new BrandDto("Prada", "Italiya", "IT",
                    "Innovatsion minimalist dizayn va intellektual moda falsafasi",
                    "Инновационный минималистичный дизайн и интеллектуальная мода",
                    "Innovative minimalist design and high fashion philosophy"),
            new BrandDto("LC Waikiki Premium", "Turkiya", "TR",
                    "Oila uchun eng sara tabiiy matoli premium kolleksiyalar",
                    "Премиальные семейные коллекции из натуральных тканей",
                    "Premium family collections with natural materials"),
            new BrandDto("Mavi Jeans", "Turkiya", "TR",
                    "O'rta yer dengizi ruhiyati aks etgan jahon andozasidagi jinsilar",
                    "Средиземноморский дух и джинсы мирового уровня",
                    "Mediterranean lifestyle and world-class denim fit"),
            new BrandDto("Massimo Dutti", "Italiya", "IT",
                    "Vazmin shahar aristokratizmi va tabiiy premium tolalar",
                    "Сдержанный городской аристократизм и премиальные ткани",
                    "Sophisticated urban elegance and natural premium fabrics"),
            new BrandDto("Salvatore Ferragamo", "Italiya", "IT",
                    "Afsonaviy italyan charmi, poyabzallari va hunarmandchilik an'analari",
                    "Легендарная итальянская кожа, обувь и ремесленные традиции",
                    "Legendary handcrafted Italian leather shoes and accessories")
    );

    @GetMapping
    public ResponseEntity<List<BrandDto>> getBrands(@RequestParam(required = false) String origin) {
        if (origin != null && !origin.isBlank() && !origin.equalsIgnoreCase("all")) {
            List<BrandDto> filtered = BRANDS.stream()
                    .filter(b -> b.getOrigin().equalsIgnoreCase(origin) || b.getCode().equalsIgnoreCase(origin))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(filtered);
        }
        return ResponseEntity.ok(BRANDS);
    }

    @GetMapping("/{name}")
    public ResponseEntity<BrandDto> getBrandByName(@PathVariable String name) {
        return BRANDS.stream()
                .filter(b -> b.getName().equalsIgnoreCase(name))
                .findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
