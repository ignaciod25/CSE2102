package com.example.demo;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(HomeController.class)   // <1>
public class HomeControllerTest {

  @Autowired
  private MockMvc mockMvc;   // 

  @Test
  public void testNotHomePage() throws Exception {
    mockMvc.perform(get("/not_home"))   
      .andExpect(status().isOk()) 
      .andExpect(view().name("not_home"))
      .andExpect(content().string(       
          containsString("Not Home - BLAH Welcome")));
  }

}