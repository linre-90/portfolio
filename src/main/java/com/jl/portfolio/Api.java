package com.jl.portfolio;

import com.jl.portfolio.models.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

/**
 * Provides API routes rest controller for external applications to communicate with this app.
 * Secured with role "USER_ADMIN".
 * */
@RestController
@Secured("ROLE_USER_ADMIN")
public class Api {

    /**
     * Private response class to send for authenticated user if we are authenticated.
     * */
    private class AuthResponse{

        public AuthResponse(){
            boolean authenticated = true;
        }
    }
    @Autowired
    ContactService contactService;

    /**
     * Ping api. Response is application json if authenticated text/html if not.
     * */
    @GetMapping("/contact/api/v1/auth")
    public AuthResponse checkAuth(){ return new AuthResponse();}

    /**
     * Route to fetch all data.<br>
     * * Http method=GET
     * @return all entities
     * */
    @GetMapping("/contact/api/v1")
    public List<Contact> all(){
        return contactService.handleGetAllContacts();
    }

    /**
     * Single resource GET route.<br>
     * Http method=GET
     * @param id Database id of the entity to look for
     * @return found entity
     * @exception ResponseStatusException If corresponding id not found
     * */
    @GetMapping("/contact/api/v1/{id}")
    public Contact single(@PathVariable int id){
        Optional<Contact> contact = contactService.handleFindById(id);
        return contact.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found by id"));
    }

    /**
     * Delete single entity from database.<br>
     * Http method=DELETE
     * @param id Database id
     * @return "ok" String in every case
     * */
    @DeleteMapping("/contact/api/v1/{id}")
    public String delete(@PathVariable int id){
        return contactService.handleDelete(id);
    }

    /**
     * Updates entity's read boolean field to be opposite of current value.<br>
     * Http method=PUT
     * @param id Database id
     * */
    @PutMapping("/contact/api/v1/{id}")
    public Contact update(@PathVariable int id){
        return contactService.handleUpdateReadProperty(id);
    }
}
