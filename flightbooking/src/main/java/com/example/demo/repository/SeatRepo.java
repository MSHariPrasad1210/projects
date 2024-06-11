package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Seats;

public interface SeatRepo extends JpaRepository<Seats,Integer>{
     
	void deleteByFlightid(int flightid);
	List<Seats> getByFlightid(int flightid);
}
