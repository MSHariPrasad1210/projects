package com.example.joblink.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.joblink.model.User.Job;
import com.example.joblink.repository.JobRepo;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class JobService {
    @Autowired
    JobRepo repo;

    public String addJob(Job job) {
        repo.save(job);
        return "Job Added";
    }

    public List<Job> getAllJobs() {
        return repo.findAll();
    }
}
