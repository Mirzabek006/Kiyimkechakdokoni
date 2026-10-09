package com.example.demo.dto;

public class BrandDto {

    private String name;
    private String origin;
    private String code;
    private String descUz;
    private String descRu;
    private String descEn;

    public BrandDto() {
    }

    public BrandDto(String name, String origin, String code, String descUz, String descRu, String descEn) {
        this.name = name;
        this.origin = origin;
        this.code = code;
        this.descUz = descUz;
        this.descRu = descRu;
        this.descEn = descEn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescUz() {
        return descUz;
    }

    public void setDescUz(String descUz) {
        this.descUz = descUz;
    }

    public String getDescRu() {
        return descRu;
    }

    public void setDescRu(String descRu) {
        this.descRu = descRu;
    }

    public String getDescEn() {
        return descEn;
    }

    public void setDescEn(String descEn) {
        this.descEn = descEn;
    }
}
