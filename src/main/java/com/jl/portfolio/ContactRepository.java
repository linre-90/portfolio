package com.jl.portfolio;

import com.jl.portfolio.models.Contact;
import org.springframework.data.repository.CrudRepository;

/**
 * Database access interface.
 * */
public interface ContactRepository extends CrudRepository<Contact, Integer> { }
