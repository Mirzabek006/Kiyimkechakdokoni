package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(String categorySlug, String brand, String brandOrigin,
                                        BigDecimal minPrice, BigDecimal maxPrice,
                                        String query, String size, String color, String sortBy) {
        String cleanCategory = (categorySlug != null && !categorySlug.isBlank()) ? categorySlug.trim() : null;
        String cleanBrand = (brand != null && !brand.isBlank() && !brand.equalsIgnoreCase("all")) ? brand.trim() : null;
        String cleanBrandOrigin = (brandOrigin != null && !brandOrigin.isBlank() && !brandOrigin.equalsIgnoreCase("all")) ? brandOrigin.trim() : null;
        String cleanQuery = (query != null && !query.isBlank()) ? query.trim() : null;

        List<Product> products = productRepository.searchProducts(
                cleanCategory,
                cleanBrand,
                cleanBrandOrigin,
                minPrice,
                maxPrice,
                cleanQuery
        );

        // Filter by size if requested
        if (size != null && !size.isBlank() && !size.equalsIgnoreCase("all")) {
            products = products.stream()
                    .filter(p -> p.getSizes().stream().anyMatch(s -> s.equalsIgnoreCase(size)))
                    .collect(Collectors.toList());
        }

        // Filter by color if requested
        if (color != null && !color.isBlank() && !color.equalsIgnoreCase("all")) {
            products = products.stream()
                    .filter(p -> p.getColors().stream().anyMatch(c -> c.equalsIgnoreCase(color)))
                    .collect(Collectors.toList());
        }

        // Sorting
        if (sortBy != null) {
            switch (sortBy.toLowerCase()) {
                case "price-low-high" -> products.sort(Comparator.comparing(Product::getPrice));
                case "price-high-low" -> products.sort(Comparator.comparing(Product::getPrice).reversed());
                case "rating" -> products.sort(Comparator.comparing(Product::getRating).reversed());
                case "newest" -> products.sort(Comparator.comparing(Product::getIsNewArrival).reversed());
                case "popular" -> products.sort(Comparator.comparing(Product::getReviewCount).reversed());
                default -> {
                    // Default sort: featured first, then id
                    products.sort(Comparator.comparing(Product::getIsFeatured).reversed()
                            .thenComparing(Product::getId));
                }
            }
        }

        return products;
    }

    public List<Product> getAllProducts(String categorySlug, BigDecimal minPrice, BigDecimal maxPrice,
                                        String query, String size, String color, String sortBy) {
        return getAllProducts(categorySlug, null, null, minPrice, maxPrice, query, size, color, sortBy);
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Optional<Product> getProductBySlug(String slug) {
        return productRepository.findBySlug(slug);
    }

    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeaturedTrue();
    }

    public List<Product> getNewArrivals() {
        return productRepository.findByIsNewArrivalTrue();
    }

    public List<Product> getBestSellers() {
        return productRepository.findByIsBestSellerTrue();
    }

    public List<Product> getDeals() {
        return productRepository.findByIsDealTrue();
    }

    public List<Product> getProductsByCategory(String categorySlug) {
        return productRepository.findByCategorySlug(categorySlug);
    }

    public List<Product> getProductsByBrand(String brand) {
        return productRepository.findByBrandIgnoreCase(brand);
    }

    public List<Product> getProductsByBrandOrigin(String brandOrigin) {
        return productRepository.findByBrandOriginIgnoreCase(brandOrigin);
    }
}
