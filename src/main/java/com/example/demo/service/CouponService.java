package com.example.demo.service;

import com.example.demo.dto.CouponResponseDto;
import com.example.demo.dto.CouponValidateRequestDto;
import com.example.demo.model.Coupon;
import com.example.demo.repository.CouponRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;

@Service
public class CouponService {

    private final CouponRepository couponRepository;

    public CouponService(CouponRepository couponRepository) {
        this.couponRepository = couponRepository;
    }

    public CouponResponseDto validateCoupon(CouponValidateRequestDto request) {
        if (request.code() == null || request.code().isBlank()) {
            return new CouponResponseDto(false, "Kupon kodi kiritilmadi (Coupon code cannot be empty)", null, 0, BigDecimal.ZERO);
        }

        Optional<Coupon> couponOpt = couponRepository.findByCodeIgnoreCaseAndActiveTrue(request.code().trim());
        if (couponOpt.isEmpty()) {
            return new CouponResponseDto(false, "Yaroqsiz kupon kodi (Invalid coupon code)", request.code(), 0, BigDecimal.ZERO);
        }

        Coupon coupon = couponOpt.get();
        BigDecimal orderAmount = (request.orderAmount() != null) ? request.orderAmount() : BigDecimal.ZERO;

        if (orderAmount.compareTo(coupon.getMinOrderAmount()) < 0) {
            return new CouponResponseDto(false,
                    "Minimal buyurtma summasi: $" + coupon.getMinOrderAmount() + " bo'lishi kerak",
                    coupon.getCode(), coupon.getDiscountPercent(), BigDecimal.ZERO);
        }

        BigDecimal discountAmount = orderAmount
                .multiply(BigDecimal.valueOf(coupon.getDiscountPercent()))
                .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);

        return new CouponResponseDto(true,
                "Kupon muvaffaqiyatli qo'llandi! " + coupon.getDiscountPercent() + "% chegirma berildi.",
                coupon.getCode(), coupon.getDiscountPercent(), discountAmount);
    }
}
