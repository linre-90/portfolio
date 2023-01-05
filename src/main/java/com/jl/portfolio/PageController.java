package com.jl.portfolio;

import com.jl.portfolio.models.Contact;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import java.time.LocalDateTime;
import java.util.TimeZone;


/**
 * Main controller class. Handles all basic routes that website has excluding portfolio item view handling.
 * @see PortfolioController
 * */
@Controller
public class PageController {

    @Autowired
    PageService pageService;

    @Autowired
    PortfolioService portfolioService;

    @Autowired
    ContactService contactService;


    /**
     * Home page route.
     * @param model Spring model
     * @return Home template.
     * */
    @GetMapping("/")
    public String home(Model model){
        // Links are numbered from top to bottom starting with 1
        model.addAttribute("activelink", 1);
        model.addAttribute("page", pageService.getHomePage());
        return "home";
    }

    /**
     * About page route.
     * @param model Spring model
     * @return About template.
     * */
    @GetMapping("/about")
    public String about(Model model){
        model.addAttribute("activelink", 2);
        model.addAttribute("page", pageService.getAboutPage());
        return "about";
    }

    /**
     * Portfolio listing page route.
     * @param model Spring model
     * @return Portfolio template
     * */
    @GetMapping("/portfolio")
    public String portfolio(Model model){
        model.addAttribute("activelink", 3);
        model.addAttribute("page", pageService.getPortfolioPage());
        model.addAttribute("cards", portfolioService.getPortfolioItemsAsList());
        return "portfolio";
    }

    /**
     * Contact page route.
     * @param model Spring model
     * @return Contact template
     * */
    @GetMapping("/contact")
    public String contact(Model model){
        model.addAttribute("activelink", 4);
        model.addAttribute("page", pageService.getContactPage());
        model.addAttribute("contact", new Contact());
        return "contact";
    }

    /**
     * Contact page form posting route.
     * @param model Spring model
     * @param contact @Valid, filled form data class
     * @param bindingResult Form validation result
     * @return Pre-populated "contact" template or "received" template. Based on form validation.
     * */
    @PostMapping("/contact")
    public String contact(@Valid Contact contact, BindingResult bindingResult, Model model){
        if(bindingResult.hasErrors()){
            // Form had filling errors
            System.out.println(bindingResult.getAllErrors());
            model.addAttribute("activelink", 4);
            model.addAttribute("page", pageService.getContactPage());
            model.addAttribute("contact",contact);
            return "contact";
        }
        // Form is accepted
        contact.setDate(LocalDateTime.now(TimeZone.getTimeZone("Europe/Helsinki").toZoneId()).toString());
        contact.setRead(false);
        Contact created = contactService.handleCreateContact(contact);
        model.addAttribute("contact", created);
        return "received";
    }

    /**
     * Custom error route.
     * @return Error template
     * */
    @GetMapping("/error")
    public String error(Model model){
        model.addAttribute("page", pageService.getErrorPage());
        return "error";
    }

    /**
     * Login page route
     * @return Login template
     * */
    @GetMapping("/login")
    public String login(){
        return "login";
    }
}
