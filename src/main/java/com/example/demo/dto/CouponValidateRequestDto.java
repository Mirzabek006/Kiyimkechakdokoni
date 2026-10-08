package com.example.demo.dto;

import java.math.BigDecimal;

public record CouponValidateRequestDto(
        String code,
        BigDecimal orderAmount
) {
}
