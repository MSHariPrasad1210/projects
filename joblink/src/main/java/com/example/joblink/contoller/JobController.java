package com.example.joblink.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.joblink.model.User.Job;
import com.example.joblink.service.JobService;

@RestController
@CrossOrigin
@RequestMapping("/job")
public class JobController {

    @Autowired
    JobService service;

    @PostMapping("/postjob")
    public String postJob(@RequestBody Job job) {
        service.addJob(job);
        return "job added";
    }

    @GetMapping("/getjobs")
    public List<Job> GetJobs() {
        return service.getAllJobs();
    }
}
