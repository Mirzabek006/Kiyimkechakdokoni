# VELVET & CO. — Kiyim-kechak Onlayn Do'koni (E-Commerce Store)

Figma platformasidagi **"E-commerce Website Template (Freebie)"** dizayni asosida yaratilgan to'liq funksional kiyim-kechak do'koni.

---

## 🛠 Texnologiyalar Steki

- **Backend:** Java 17, Spring Boot 3.3.4, Spring Data JPA, Hibernate, H2 Database, Validation
- **Frontend:** HTML5, CSS3 (Custom Variables, Flexbox, Grid, Glassmorphism, Responsive), JavaScript ES6+
- **API Arxitekturasi:** REST API (Controllers, Services, Repositories, Entities, Java 17 Records DTOs)

---

## 📂 Loyiha Tuzilishi

- `src/main/java/com/example/demo/`
  - `model/` — Kategoriya, Mahsulot, Buyurtma, Sharh, Kupon modellari
  - `repository/` — Spring Data JPA interfeyslari (qidiruv, saralash, filtrlar)
  - `service/` — Biznes mantiq, savat, buyurtma hisob-kitoblari va promokodlar
  - `controller/` — REST API endpointlari (`/api/v1/products`, `/api/v1/categories`, `/api/v1/orders`, `/api/v1/coupons`)
  - `dto/` — Java 17 record DTO-lar
  - `config/` — `DataInitializer` (boshlang'ich kiyimlar katalogi) va `CorsConfig`
- `src/main/resources/`
  - `application.properties` — H2 ma'lumotlar bazasi va port 8080 konfiguratsiyasi
  - `static/` — Frontend fayllari (`index.html`, `css/style.css`, `js/app.js`)

---

## 🚀 Ishga Tushirish

1. Terminalda yoki IDE (IntelliJ IDEA) da loyihani oching.
2. Ishga tushiring:
   ```bash
   ./mvnw spring-boot:run
   ```
3. Brauzerda oching:
   - Do'kon: `http://localhost:8080/`
   - H2 Database konsoli: `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:clothingstore`, sa)

---

## 🎁 Sinov uchun promokodlar
- `WELCOME10` — 10% chegirma
- `SPRING20` — 20% chegirma ($50+)
- `VIP30` — 30% chegirma ($100+)
