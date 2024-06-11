package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
     @Autowired
     UserRepo Repo;
     
     public String addUser(Users s) {
    	 return Repo.save(s)!=null?"added":"not added";
     }
     public Optional<Users> getUser(String username) {
    	 return Repo.findById(username);
     }
     public Optional<Users> getByUsernameAndPassword(String username,String password) {
    	 return Repo.findByUsernameAndPassword(username,password);
     }
     public List<Users> getAllUser(){
    	 return Repo.findAll();
     }
     public String deleteByUsername(String username) {
    	 Repo.deleteById(username);
    	return "deleted";
     }
     
}
