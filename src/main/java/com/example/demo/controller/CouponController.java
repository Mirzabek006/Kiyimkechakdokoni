package com.example.demo.controller;

import com.example.demo.dto.CouponResponseDto;
import com.example.demo.dto.CouponValidateRequestDto;
import com.example.demo.service.CouponService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/coupons")
@CrossOrigin(origins = "*")
public class CouponController {

    private final CouponService couponService;

    public CouponController(CouponService couponService) {
        this.couponService = couponService;
    }

    @PostMapping("/validate")
    public ResponseEntity<CouponResponseDto> validateCoupon(@RequestBody CouponValidateRequestDto request) {
        return ResponseEntity.ok(couponService.validateCoupon(request));
    }
}
