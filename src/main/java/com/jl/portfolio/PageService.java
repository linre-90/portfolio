package com.jl.portfolio;

import com.jl.portfolio.models.Page;
import org.springframework.stereotype.Service;

@Service
public class PageService {

    public Page getHomePage(){
        return new Page(
            "/images/joshua-woroniecki-lzh3hPtJz9c-unsplash.webp",
            "Portfolio - Juho Lindemark",
            "Welcome to my portfolio. On this page you will find my software development portfolio."
        );
    }

    public Page getAboutPage(){
        return new Page(
            "/images/emily-morter-8xAA0f9yQnE-unsplash.webp",
            "About - Juho Lindemark",
            "Information about my education and background."
        );
    }

    public Page getContactPage(){
        return new Page(
            "/images/nina-rivas-X3MsA2KRlhc-unsplash.webp",
            "Contact - Juho Lindemark",
            "Contact me via email or provided contact form."
        );
    }

    public Page getPortfolioPage(){
        return new Page(
            "/images/shubham-dhage-3kdyIvs64gQ-unsplash.webp",
            "Portfolio - Juho Lindemark",
            "Here i showcase my projects. Some are made with React, Unity, Aws and Google."
        );
    }

    public Page getErrorPage(){
        return new Page(
                "/images/shubham-dhage-3kdyIvs64gQ-unsplash.webp",
                "Something went wrong",
                "Errorpage"
        );
    }
}
