package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Users;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class UserController {
     @Autowired
     UserService service;
     
     @PostMapping("/post")
     public String add(@RequestBody Users s) {
    	 return service.addUser(s);
     }
     @GetMapping("/get/{username}")
    	 public Optional<Users> get(@PathVariable String username){
    		 return service.getUser(username);
    	 }
     @GetMapping("/get")
     public List<Users> getAll(){
    	 return service.getAllUser();
     }
     @GetMapping("/get1/{username}/{password}")
     public Optional<Users> getUser(@PathVariable String username,@PathVariable String password){
    	 return service.getByUsernameAndPassword(username,password);
     }
     @DeleteMapping("/delete/{username}")
     public String delete(@PathVariable String username) {
    	 return service.deleteByUsername(username);
     }
}
