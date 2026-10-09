package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findBySlug(String slug);

    List<Product> findByIsFeaturedTrue();

    List<Product> findByIsNewArrivalTrue();

    List<Product> findByIsBestSellerTrue();

    List<Product> findByIsDealTrue();

    List<Product> findByCategorySlug(String categorySlug);

    List<Product> findByBrandIgnoreCase(String brand);

    List<Product> findByBrandOriginIgnoreCase(String brandOrigin);

    @Query("SELECT p FROM Product p WHERE " +
           "(:categorySlug IS NULL OR :categorySlug = '' OR p.category.slug = :categorySlug) AND " +
           "(:brand IS NULL OR :brand = '' OR LOWER(p.brand) = LOWER(:brand)) AND " +
           "(:brandOrigin IS NULL OR :brandOrigin = '' OR LOWER(p.brandOrigin) = LOWER(:brandOrigin) OR LOWER(p.brandOriginCode) = LOWER(:brandOrigin)) AND " +
           "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
           "(:maxPrice IS NULL OR p.price <= :maxPrice) AND " +
           "(:query IS NULL OR :query = '' OR LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(p.brand) LIKE LOWER(CONCAT('%', :query, '%')))")
    List<Product> searchProducts(
            @Param("categorySlug") String categorySlug,
            @Param("brand") String brand,
            @Param("brandOrigin") String brandOrigin,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice,
            @Param("query") String query
    );
}
