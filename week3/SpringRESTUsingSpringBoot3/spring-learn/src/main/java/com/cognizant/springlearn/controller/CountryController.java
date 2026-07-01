package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);
    
    @Autowired
    private CountryService countryService;

    @GetMapping("/country")
    public Country getCountryIndia() {

        LOGGER.debug("START");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);

        ((ClassPathXmlApplicationContext) context).close();

        LOGGER.debug("END");

        return country;
    }

    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        LOGGER.debug("START");

        Country country = countryService.getCountry(code);

        LOGGER.debug("Country : {}", country);

        LOGGER.debug("END");

        return country;
    }
}