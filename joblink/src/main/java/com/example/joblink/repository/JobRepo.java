package com.example.joblink.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.joblink.model.User.Job;

public interface JobRepo extends JpaRepository<Job,Long>{
    
}
