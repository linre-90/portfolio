package com.jl.portfolio.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotNull
    @Size(min=5, max=80)
    private String name;
    @NotNull
    @Size(min=8, max=100)
    private String headline;
    @NotNull
    @Size(min=30, max=300)
    private String message;
    private String date;
    @NotNull
    @Size(min=5, max=120)
    private String email;
    private Boolean read;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getRead() {
        return read;
    }

    public void setRead(Boolean read) {
        this.read = read;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    /*
    * Returns date from dateTime stamp in dd.mm.yyyy format
    */
    public String parseDateFromDateTime(){
        String[] date = this.date.split("T");
        String[] yyyymmdd = date[0].split("-");
        return yyyymmdd[2] + "." + yyyymmdd[1] + "." + yyyymmdd[0];
    }
}
