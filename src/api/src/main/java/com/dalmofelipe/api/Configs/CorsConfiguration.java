package com.dalmofelipe.api.Configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Value("${environment.urls.webapp}")
    private String webappBaseURL;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins(this.webappBaseURL)
            .allowedMethods("GET", "POST");
        
        registry.addMapping("/uploads/**")
            .allowedOrigins(this.webappBaseURL)
            .allowedMethods("GET");

        registry.addMapping("/upload/file")
            .allowedOrigins(this.webappBaseURL)
            .allowedMethods("POST");
    }
}