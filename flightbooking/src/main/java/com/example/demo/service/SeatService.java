package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Seats;
import com.example.demo.repository.SeatRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class SeatService {
     @Autowired
     SeatRepo Repo1;
     
     public String addseat(Seats s) {
    	 Repo1.save(s);
    	 return "added";
     }
     public String add(int fid) {
    	 for(int i=1;i<=80;i++) {
    		 Seats s=new Seats();
    		 s.setId(fid*80+i);
    		 s.setSeatno(i);
    		 s.setFlightid(fid);
    		 s.setStatus(false);
    		 Repo1.save(s);
    	 }
    	 return "added";
     }
     public List<Seats> getAll(){
    	 return Repo1.findAll();
     }
     public List<Seats> getbyFid(int fid){
    	 return Repo1.getByFlightid(fid);
     }
     public String delt(int fid) {
    	 Repo1.deleteByFlightid(fid);
    	 return "deleted";
     }
}
