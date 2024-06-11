package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Flight;

import com.example.demo.service.FlightService;


@RestController
@CrossOrigin
public class FlightController {
     @Autowired
     FlightService service;
     @PostMapping("/postflight")
     public String addf(@RequestBody Flight s) {
    	 return service.addflight(s);
     }
     @GetMapping("/getfrom/{from}")
     public List<Flight> getfromdest(@PathVariable String from){
    	 return service.getFromDest(from);
     }
     @GetMapping("/getflight")
     public List<Flight> getAll(){
    	 return service.getflights();
     }
     @DeleteMapping("/deleteflight/{id}")
     public String del(@PathVariable int id) {
    	 return service.delf(id);
     }
     
}

