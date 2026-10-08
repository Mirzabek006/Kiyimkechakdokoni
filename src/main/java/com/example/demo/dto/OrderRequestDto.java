package com.example.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

public record OrderRequestDto(
        @NotBlank(message = "Customer name is required")
        String customerName,

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email address")
        String email,

        @NotBlank(message = "Phone number is required")
        String phone,

        @NotBlank(message = "Shipping address is required")
        String shippingAddress,

        String city,
        String postalCode,
        String paymentMethod,
        String couponCode,

        @NotEmpty(message = "Cart cannot be empty")
        List<OrderItemDto> items
) {
}
