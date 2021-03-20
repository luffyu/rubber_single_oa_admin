package com.rubber.oa.admin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author luffyu
 * Created on 2021/3/19
 */
@RestController
@RequestMapping("/test")
public class TestController {



    @GetMapping("/info")
    public String handler(){
        return "test-indo";
    }
}
