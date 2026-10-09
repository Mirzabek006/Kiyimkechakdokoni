package com.example.demo.service;

import com.example.demo.model.Store;
import com.example.demo.repository.StoreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public List<Store> getAllStores(String city, String brandType, String q) {
        String cleanCity = (city != null && !city.isBlank() && !city.equalsIgnoreCase("all")) ? city.trim() : null;
        String cleanBrand = (brandType != null && !brandType.isBlank() && !brandType.equalsIgnoreCase("all")) ? brandType.trim() : null;
        String cleanQ = (q != null && !q.isBlank()) ? q.trim() : null;

        return storeRepository.searchStores(cleanCity, cleanBrand, cleanQ);
    }

    public Optional<Store> getStoreById(Long id) {
        return storeRepository.findById(id);
    }

    public Store createStore(Store store) {
        if (store.getRating() == null) {
            store.setRating(5.0);
        }
        if (store.getReviewCount() == null) {
            store.setReviewCount(1);
        }
        if (store.getBrandType() == null || store.getBrandType().isBlank()) {
            store.setBrandType("VELVET & CO.");
        }
        if (store.getMapUrl() == null || store.getMapUrl().isBlank()) {
            if (store.getLat() != null && store.getLng() != null) {
                store.setMapUrl("https://maps.google.com/?q=" + store.getLat() + "," + store.getLng());
            }
        }
        return storeRepository.save(store);
    }

    public Optional<Store> updateStore(Long id, Store storeDetails) {
        return storeRepository.findById(id).map(existing -> {
            existing.setNameUz(storeDetails.getNameUz());
            existing.setNameRu(storeDetails.getNameRu());
            existing.setNameEn(storeDetails.getNameEn());
            existing.setBrandType(storeDetails.getBrandType());
            existing.setCity(storeDetails.getCity());
            existing.setAddressUz(storeDetails.getAddressUz());
            existing.setAddressRu(storeDetails.getAddressRu());
            existing.setAddressEn(storeDetails.getAddressEn());
            existing.setLandmark(storeDetails.getLandmark());
            existing.setPhone(storeDetails.getPhone());
            existing.setWorkingHours(storeDetails.getWorkingHours());
            existing.setLat(storeDetails.getLat());
            existing.setLng(storeDetails.getLng());
            if (storeDetails.getRating() != null) existing.setRating(storeDetails.getRating());
            if (storeDetails.getImageUrl() != null) existing.setImageUrl(storeDetails.getImageUrl());
            if (storeDetails.getMapUrl() != null) existing.setMapUrl(storeDetails.getMapUrl());
            return storeRepository.save(existing);
        });
    }

    public boolean deleteStore(Long id) {
        if (storeRepository.existsById(id)) {
            storeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
