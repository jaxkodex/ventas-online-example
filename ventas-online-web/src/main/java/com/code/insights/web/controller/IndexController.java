package com.code.insights.web.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
//import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by JaxKodex on 25/10/2015.
 */
@Controller
public class IndexController {
    private static final Logger LOGGER = LogManager.getLogger(IndexController.class);
//    private static final Logger LOGGER = Loggger.getLogger(IndexController.class);

    @RequestMapping(value = "/")
    public String index() {
        LOGGER.debug("Iniciando logger");
        return "index";
    }
}
