package com.jl.portfolio;

import com.jl.portfolio.models.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;

/**
 * Service class that performs database actions with ContactRepository.
 * @see ContactRepository
 * */
@Component
public class ContactService {

    @Autowired
    ContactRepository contactRepository;

    /**
     * Handles incoming requests to find all database entries.
     * @return All entries
     * */
    public List<Contact> handleGetAllContacts(){
        return (List<Contact>)contactRepository.findAll();
    }

    /**
     * Handles saving the new database entry.
     * @param contact new entry
     * @return Saved entry
     * */
    public Contact handleCreateContact(Contact contact){
        return contactRepository.save(contact);
    }

    /**
     * Deletes entry from the database.
     * @param id Id to delete
     * @return Returns always String "ok"
     * */
    public String handleDelete(Integer id){
        contactRepository.deleteById(id);
        return "ok";
    }

    /**
     * Queries database to find ID match.
     * @param id ID to match
     * @return found entity in Optional type.
     * */
    public Optional<Contact> handleFindById(Integer id) {
        return contactRepository.findById(id);
    }

    /**
     * Updates read property of the entity.
     * @param id ID to update
     * @return Updated data or null if id not found
     * */
    public Contact handleUpdateReadProperty(Integer id){
         Optional<Contact> cont = contactRepository.findById(id);
         if(cont.isPresent()){
             Contact contact = cont.get();
             contact.setRead(!contact.getRead());
             return contactRepository.save(contact);
         }
         return null;
    }
}
