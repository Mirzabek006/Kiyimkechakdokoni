package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record OrderResponseDto(
        Long id,
        String orderNumber,
        String customerName,
        String email,
        String phone,
        String shippingAddress,
        String city,
        String postalCode,
        String paymentMethod,
        String status,
        BigDecimal subtotal,
        BigDecimal discountAmount,
        BigDecimal shippingCost,
        BigDecimal totalAmount,
        String couponCode,
        LocalDateTime createdAt,
        List<OrderItemDto> items
) {
}
