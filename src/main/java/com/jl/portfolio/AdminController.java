package com.jl.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * Class handles admin related page routing. Secured with role "USER_ADMIN".
 * */
@Controller
@Secured("ROLE_USER_ADMIN")
public class AdminController {

    @Autowired
    ContactService contactService;

    /**
     * Returns admin "home" page template.
     * @param model Spring model
     * */
    @GetMapping("/admin")
    public String admin(Model model){
        model.addAttribute("listing", contactService.handleGetAllContacts());
        return "adminlisting";
    }

    /**
     * Returns documentation page.
     * */
    @GetMapping("/admin/documentation")
    public String documentation(){
        return "documentation";
    }
}
