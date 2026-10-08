package com.example.demo.dto;

import java.math.BigDecimal;

public record OrderItemDto(
        Long productId,
        String productName,
        String productImage,
        BigDecimal price,
        Integer quantity,
        String size,
        String color,
        BigDecimal subtotal
) {
}
