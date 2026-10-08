package com.example.demo.service;

import com.example.demo.dto.ReviewRequestDto;
import com.example.demo.model.Product;
import com.example.demo.model.Review;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;

    public ReviewService(ReviewRepository reviewRepository, ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
    }

    public List<Review> getReviewsByProductId(Long productId) {
        return reviewRepository.findByProductIdOrderByCreatedAtDesc(productId);
    }

    @Transactional
    public Review addReview(Long productId, ReviewRequestDto request) {
        Review review = new Review(productId, request.authorName(), request.rating(), request.comment());
        Review saved = reviewRepository.save(review);

        // Update product rating and review count
        Optional<Product> prodOpt = productRepository.findById(productId);
        if (prodOpt.isPresent()) {
            Product product = prodOpt.get();
            List<Review> allReviews = reviewRepository.findByProductIdOrderByCreatedAtDesc(productId);
            double avg = allReviews.stream().mapToInt(Review::getRating).average().orElse(5.0);
            product.setRating(BigDecimal.valueOf(avg).setScale(1, RoundingMode.HALF_UP).doubleValue());
            product.setReviewCount(allReviews.size());
            productRepository.save(product);
        }

        return saved;
    }
}
