package com.jl.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * Handles singular portfolio item views.
 * */
@Controller
public class PortfolioController {

    /**
     * Return correct portfolio item to display.
     * */
    @GetMapping("/portfolio/view/{template}")
    public String getViewTemplate(@PathVariable String template){
        return "view/" + template;
    }
}
