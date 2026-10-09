package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "stores")
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nameUz;

    private String nameRu;

    private String nameEn;

    @Column(nullable = false)
    private String brandType = "VELVET & CO."; // "VIP Brand", "Caber Brand", "VELVET & CO."

    @Column(nullable = false)
    private String city; // "Toshkent", "Samarqand", "Buxoro", "Farg'ona", "Andijon", "Namangan"

    @Column(length = 500)
    private String addressUz;

    @Column(length = 500)
    private String addressRu;

    @Column(length = 500)
    private String addressEn;

    @Column(length = 500)
    private String landmark;

    private String phone;

    private String workingHours = "09:00 - 21:00";

    @Column(nullable = false)
    private Double lat;

    @Column(nullable = false)
    private Double lng;

    private Double rating = 5.0;

    private Integer reviewCount = 0;

    @Column(length = 1000)
    private String mapUrl;

    @Column(length = 1000)
    private String imageUrl;

    public Store() {
    }

    public Store(String nameUz, String nameRu, String nameEn, String brandType, String city,
                 String addressUz, String addressRu, String addressEn, String landmark,
                 String phone, String workingHours, Double lat, Double lng,
                 Double rating, Integer reviewCount, String mapUrl, String imageUrl) {
        this.nameUz = nameUz;
        this.nameRu = nameRu;
        this.nameEn = nameEn;
        this.brandType = brandType;
        this.city = city;
        this.addressUz = addressUz;
        this.addressRu = addressRu;
        this.addressEn = addressEn;
        this.landmark = landmark;
        this.phone = phone;
        this.workingHours = workingHours;
        this.lat = lat;
        this.lng = lng;
        this.rating = rating;
        this.reviewCount = reviewCount;
        this.mapUrl = mapUrl;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameUz() {
        return nameUz;
    }

    public void setNameUz(String nameUz) {
        this.nameUz = nameUz;
    }

    public String getNameRu() {
        return nameRu;
    }

    public void setNameRu(String nameRu) {
        this.nameRu = nameRu;
    }

    public String getNameEn() {
        return nameEn;
    }

    public void setNameEn(String nameEn) {
        this.nameEn = nameEn;
    }

    public String getBrandType() {
        return brandType;
    }

    public void setBrandType(String brandType) {
        this.brandType = brandType;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddressUz() {
        return addressUz;
    }

    public void setAddressUz(String addressUz) {
        this.addressUz = addressUz;
    }

    public String getAddressRu() {
        return addressRu;
    }

    public void setAddressRu(String addressRu) {
        this.addressRu = addressRu;
    }

    public String getAddressEn() {
        return addressEn;
    }

    public void setAddressEn(String addressEn) {
        this.addressEn = addressEn;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(String workingHours) {
        this.workingHours = workingHours;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(Integer reviewCount) {
        this.reviewCount = reviewCount;
    }

    public String getMapUrl() {
        return mapUrl;
    }

    public void setMapUrl(String mapUrl) {
        this.mapUrl = mapUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
