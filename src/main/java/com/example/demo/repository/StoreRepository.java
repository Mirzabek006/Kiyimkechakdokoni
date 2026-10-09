package com.example.demo.repository;

import com.example.demo.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {

    List<Store> findByCityIgnoreCase(String city);

    List<Store> findByBrandTypeContainingIgnoreCase(String brandType);

    @Query("SELECT s FROM Store s WHERE " +
           "(:city IS NULL OR :city = '' OR LOWER(s.city) = LOWER(:city) OR " +
           " (:city = 'vodiy' AND LOWER(s.city) IN ('andijon', 'namangan', 'farg''ona', 'fergana'))) AND " +
           "(:brandType IS NULL OR :brandType = '' OR LOWER(s.brandType) LIKE LOWER(CONCAT('%', :brandType, '%')) OR LOWER(s.nameUz) LIKE LOWER(CONCAT('%', :brandType, '%'))) AND " +
           "(:q IS NULL OR :q = '' OR " +
           " LOWER(s.nameUz) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           " LOWER(s.nameRu) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           " LOWER(s.nameEn) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           " LOWER(s.city) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           " LOWER(s.addressUz) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
           " LOWER(s.landmark) LIKE LOWER(CONCAT('%', :q, '%')))")
    List<Store> searchStores(
            @Param("city") String city,
            @Param("brandType") String brandType,
            @Param("q") String q
    );
}
