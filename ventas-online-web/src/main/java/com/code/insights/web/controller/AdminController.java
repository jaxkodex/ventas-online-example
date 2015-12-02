/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.code.insights.web.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author jaxkodex
 */
@Controller
public class AdminController {
    private static final Logger LOGGER = LogManager.getLogger(AdminController.class);
    
    @RequestMapping(value = "/admin")
    public String index () {
        LOGGER.debug("Hola");
        return "admin/index";
    }
    
}
