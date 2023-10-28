package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller 
public class HomeController {

  @GetMapping("/")
  public String home() {
    return "home";
  }

  @GetMapping("/not_home")
  public String notHome() {
    return "not_home";
  }

  @GetMapping("/test")
  public String testPage() {
    return "test";
  }

}