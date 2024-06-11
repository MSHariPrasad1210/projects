package com.example.joblink.model.User;


import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;
    String title;
    String description;
    String Email;
    String UserName;
    String Specialisms;
    String Industry;
    String JobType;
    String Carrierlevel;
    String Qualification;
    int Experience;
    Long Expectedsalary;
    String Gender;
    Date ApplicationDeadline;
    String City;
    String Country;
    String FullAddress;
    public Long getJobId() {
        return jobId;
    }
    public void setJobId(Long jobId) {
        this.jobId = jobId;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
        Email = email;
    }
    public String getUserName() {
        return UserName;
    }
    public void setUserName(String userName) {
        UserName = userName;
    }
    public String getSpecialisms() {
        return Specialisms;
    }
    public void setSpecialisms(String specialisms) {
        Specialisms = specialisms;
    }
    public String getIndustry() {
        return Industry;
    }
    public void setIndustry(String industry) {
        Industry = industry;
    }
    public String getJobType() {
        return JobType;
    }
    public void setJobType(String jobType) {
        JobType = jobType;
    }
    public String getCarrierlevel() {
        return Carrierlevel;
    }
    public void setCarrierlevel(String carrierlevel) {
        Carrierlevel = carrierlevel;
    }
    public String getQualification() {
        return Qualification;
    }
    public void setQualification(String qualification) {
        Qualification = qualification;
    }
    public int getExperience() {
        return Experience;
    }
    public void setExperience(int experience) {
        Experience = experience;
    }
    public Long getExpectedsalary() {
        return Expectedsalary;
    }
    public void setExpectedsalary(Long expectedsalary) {
        Expectedsalary = expectedsalary;
    }
    public String getGender() {
        return Gender;
    }
    public void setGender(String gender) {
        Gender = gender;
    }
    public Date getApplicationDeadline() {
        return ApplicationDeadline;
    }
    public void setApplicationDeadline(Date applicationDeadline) {
        ApplicationDeadline = applicationDeadline;
    }
    public String getCity() {
        return City;
    }
    public void setCity(String city) {
        City = city;
    }
    public String getCountry() {
        return Country;
    }
    public void setCountry(String country) {
        Country = country;
    }
    public String getFullAddress() {
        return FullAddress;
    }
    public void setFullAddress(String fullAddress) {
        FullAddress = fullAddress;
    }
}

