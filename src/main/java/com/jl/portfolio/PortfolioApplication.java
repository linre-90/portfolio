package com.jl.portfolio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/** Main method for spring application */
@SpringBootApplication()
public class PortfolioApplication {

	@Value("spring.datasource.username")
	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}

}
