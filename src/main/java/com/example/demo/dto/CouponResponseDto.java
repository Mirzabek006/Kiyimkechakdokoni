package com.example.demo.dto;

import java.math.BigDecimal;

public record CouponResponseDto(
        boolean valid,
        String message,
        String code,
        Integer discountPercent,
        BigDecimal discountAmount
) {
}
