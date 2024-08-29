package com.jiwhiz.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api")
public class DemoApiController {

    @GetMapping("/public")
    public Message hello() {
        return new Message("Hello!");
    }

    @GetMapping("/greet")
    public Message greet(Principal principal) {
        if (principal != null) {
            return new Message("Hello, " + principal.getName() + "!");
        } else {
            return new Message("Hello there");
        }

    }

    @GetMapping("/admin")
    public Message admin() {
        return new Message("Welcome Admin!");
    }

}
