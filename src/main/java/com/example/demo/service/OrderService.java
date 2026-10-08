package com.example.demo.service;

import com.example.demo.dto.OrderItemDto;
import com.example.demo.dto.OrderRequestDto;
import com.example.demo.dto.OrderResponseDto;
import com.example.demo.model.Order;
import com.example.demo.model.OrderItem;
import com.example.demo.model.Product;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final CouponService couponService;

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, CouponService couponService) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.couponService = couponService;
    }

    @Transactional
    public OrderResponseDto createOrder(OrderRequestDto request) {
        Order order = new Order();
        String orderNumber = "ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        order.setOrderNumber(orderNumber);
        order.setCustomerName(request.customerName());
        order.setEmail(request.email());
        order.setPhone(request.phone());
        order.setShippingAddress(request.shippingAddress());
        order.setCity(request.city() != null ? request.city() : "Tashkent");
        order.setPostalCode(request.postalCode() != null ? request.postalCode() : "100000");
        order.setPaymentMethod(request.paymentMethod() != null ? request.paymentMethod() : "CASH_ON_DELIVERY");
        order.setStatus("CONFIRMED");
        order.setCreatedAt(LocalDateTime.now());

        BigDecimal subtotal = BigDecimal.ZERO;

        for (OrderItemDto itemDto : request.items()) {
            BigDecimal itemPrice = itemDto.price();
            if (itemDto.productId() != null) {
                Optional<Product> prodOpt = productRepository.findById(itemDto.productId());
                if (prodOpt.isPresent()) {
                    Product prod = prodOpt.get();
                    itemPrice = prod.getPrice();
                    // update stock
                    if (prod.getStockQuantity() >= itemDto.quantity()) {
                        prod.setStockQuantity(prod.getStockQuantity() - itemDto.quantity());
                        productRepository.save(prod);
                    }
                }
            }

            BigDecimal lineSubtotal = itemPrice.multiply(BigDecimal.valueOf(itemDto.quantity()));
            subtotal = subtotal.add(lineSubtotal);

            OrderItem orderItem = new OrderItem(
                    itemDto.productId(),
                    itemDto.productName(),
                    itemDto.productImage(),
                    itemPrice,
                    itemDto.quantity(),
                    itemDto.size(),
                    itemDto.color(),
                    lineSubtotal
            );
            order.addItem(orderItem);
        }

        order.setSubtotal(subtotal);

        // Apply coupon discount if provided
        BigDecimal discountAmount = BigDecimal.ZERO;
        if (request.couponCode() != null && !request.couponCode().isBlank()) {
            var couponRes = couponService.validateCoupon(
                    new com.example.demo.dto.CouponValidateRequestDto(request.couponCode(), subtotal)
            );
            if (couponRes.valid()) {
                discountAmount = couponRes.discountAmount();
                order.setCouponCode(couponRes.code());
            }
        }
        order.setDiscountAmount(discountAmount);

        // Shipping cost: Free if order >= $50, else $10.00
        BigDecimal shippingCost = subtotal.compareTo(BigDecimal.valueOf(50)) >= 0 ? BigDecimal.ZERO : BigDecimal.valueOf(10);
        order.setShippingCost(shippingCost);

        // Total amount
        BigDecimal totalAmount = subtotal.subtract(discountAmount).add(shippingCost);
        if (totalAmount.compareTo(BigDecimal.ZERO) < 0) {
            totalAmount = BigDecimal.ZERO;
        }
        order.setTotalAmount(totalAmount.setScale(2, RoundingMode.HALF_UP));

        Order saved = orderRepository.save(order);
        return mapToDto(saved);
    }

    public Optional<OrderResponseDto> getOrderByNumber(String orderNumber) {
        return orderRepository.findByOrderNumber(orderNumber).map(this::mapToDto);
    }

    private OrderResponseDto mapToDto(Order order) {
        List<OrderItemDto> itemDtos = order.getItems().stream()
                .map(i -> new OrderItemDto(
                        i.getProductId(),
                        i.getProductName(),
                        i.getProductImage(),
                        i.getPrice(),
                        i.getQuantity(),
                        i.getSize(),
                        i.getColor(),
                        i.getSubtotal()
                ))
                .collect(Collectors.toList());

        return new OrderResponseDto(
                order.getId(),
                order.getOrderNumber(),
                order.getCustomerName(),
                order.getEmail(),
                order.getPhone(),
                order.getShippingAddress(),
                order.getCity(),
                order.getPostalCode(),
                order.getPaymentMethod(),
                order.getStatus(),
                order.getSubtotal(),
                order.getDiscountAmount(),
                order.getShippingCost(),
                order.getTotalAmount(),
                order.getCouponCode(),
                order.getCreatedAt(),
                itemDtos
        );
    }
}
