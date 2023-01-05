package com.jl.portfolio;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

/**
 * Class is configuration class for enabling method level security features.<br>
 * Enables @Secured() notation.
 * */
@Configuration
@EnableMethodSecurity(prePostEnabled = false, securedEnabled = true)
public class MethodSecurityConfig{ }
