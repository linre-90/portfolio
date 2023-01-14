package com.jl.portfolio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;


/**
 * Web security configuration class.
 * */
@Configuration
@EnableWebSecurity
public class WebSequrityConfig {

    @Value("${app.user.username}")
    private String user;
    @Value("${app.user.password}")
    private String pass;

    /**
     * Builds http security filter chain.<br>
     * By default, any request is allowed. Security is defined by method/class level annotations.<br>
     * @param http http security object
     * @return Security filter chain
     * */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(
                        (requests) -> requests.anyRequest().permitAll()
                ).formLogin((form) ->
                        form.loginPage("/login").permitAll()
                ).sessionManagement(session -> session.maximumSessions(1))
                .logout(logout -> logout.permitAll()
                        .deleteCookies("JSESSIONID")
                        .invalidateHttpSession(true)
                ).csrf().disable(); // Disabled because api won't work with csrf on.
        return http.build();
    }

    /**
     * Creates user details service with single predefined admin user.
     * @param passwordEncoder password encoder
     * @return In memory user detail manager
     * */
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails user =
                User.withUsername(this.user).password(passwordEncoder.encode(this.pass))
                        .roles("USER_ADMIN")
                        .build();
        return new InMemoryUserDetailsManager(user);
    }

    /**
     * Password encoder to use.
     * */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
