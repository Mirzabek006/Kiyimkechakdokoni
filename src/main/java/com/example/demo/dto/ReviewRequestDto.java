package com.example.demo.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ReviewRequestDto(
        @NotBlank(message = "Author name is required")
        String authorName,

        @NotNull(message = "Rating is required")
        @Min(1) @Max(5)
        Integer rating,

        @NotBlank(message = "Comment is required")
        String comment
) {
}
