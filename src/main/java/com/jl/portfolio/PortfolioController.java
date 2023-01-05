package com.jl.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Handles singular portfolio item views.
 * */
@Controller
public class PortfolioController {
    @Autowired
    PortfolioService portfolioService;

    /**
     * Route for viewing single portfolio item with "view" template.
     * @param id ID of the portfolio item, @RequestParam
     * @param model Spring model
     * */
    @GetMapping("/portfolio/view")
    public String portfolioSingle(@RequestParam(name="id") String id, Model model){
        model.addAttribute("fragment", portfolioService.getPortfolioFragmentById(id));
        model.addAttribute("item", portfolioService.getItem(id));
        return "view";
    }
}
