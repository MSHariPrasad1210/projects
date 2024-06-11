package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Seats;
import com.example.demo.service.FlightService;
import com.example.demo.service.SeatService;

@RestController
@CrossOrigin
public class SeatController {
      @Autowired
      SeatService service;
      
      @PostMapping("/postseat")
      public String adds(@RequestBody Seats s) {
    	  return service.addseat(s);
      }
      
      @GetMapping("/getseat")
      public List<Seats> getall(){
    	  return service.getAll();
      }
      
      @GetMapping("/getseat/{fid}")
      public List<Seats> getb(@PathVariable int fid){
    	  return service.getbyFid(fid);
      }
      
      @PostMapping("/postseat/{fid}")
      public String gen(@PathVariable int fid) {
    	  return service.add(fid);
      }
      
      @DeleteMapping("/deleteseat/{fid}")
      public String del(@PathVariable int fid) {
    	  return service.delt(fid);
      }
}
