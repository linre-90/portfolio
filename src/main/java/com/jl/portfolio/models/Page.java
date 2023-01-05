package com.jl.portfolio.models;

/**
 * Model for basic page data found in all pages.
 */
public class Page {
    private String imageSrc;
    private String title;
    private String metaDescription;

    public Page(String imageSrc, String title, String metaDescription) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.metaDescription = metaDescription;
    }

    public String getImageSrc() { return imageSrc; }

    public String getTitle() {
        return title;
    }

    public String getMetaDescription() {
        return metaDescription;
    }
}
