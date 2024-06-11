package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Flight;
import com.example.demo.repository.FlightRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class FlightService {
    @Autowired
    FlightRepo Repo;
    
    public String addflight(Flight f) {
    	 Repo.save(f);
    	 return "added";
    }
    public List<Flight> getflights(){
    	return Repo.findAll();
    }
    public List<Flight> getFromDest(String from){
    	return Repo.findByfromdestStartsWith(from);
    }
    public String delf(int id) {
    	Repo.deleteByFlightId(id);
    	return "deleted";
    }
}

