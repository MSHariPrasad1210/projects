package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Flight;

public interface FlightRepo extends JpaRepository<Flight,Integer>
{
    List<Flight> findByfromdestStartsWith(String fromdest);
    void deleteByFlightId(int flightId);
}