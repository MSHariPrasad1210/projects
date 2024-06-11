package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Users;



public interface UserRepo extends JpaRepository<Users,String>{
       Optional<Users> findByUsernameAndPassword(String username,String password);
       
}
