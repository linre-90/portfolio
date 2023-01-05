package com.jl.portfolio.models;

public class PortfolioItem {
    private String image;
    private String excerpt;
    private String fragment;

    private String name;


    private String id;


    private String[] tags;

    public PortfolioItem(String image, String excerpt, String fragment, String[] tags, String id, String name) {
        this.image = image;
        this.excerpt = excerpt;
        this.fragment = fragment;
        this.tags = tags;
        this.id = id;
        this.name = name;
    }

    public String getId() { return id; }

    public String getImage() {
        return image;
    }

    public String getName() {
        return this.name;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public String getFragment() {
        return fragment;
    }

    public String[] getTags() {
        return tags;
    }
}
