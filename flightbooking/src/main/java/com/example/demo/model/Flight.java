package com.example.demo.model;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Flight {
     @Id
     private int flightId;
     public int getFlightId() {
		return flightId;
	}
	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}
	public String getImagurl() {
		return imagurl;
	}
	public void setImagurl(String imagurl) {
		this.imagurl = imagurl;
	}
	public String getFromdest() {
		return fromdest;
	}
	public void setFromdest(String fromdest) {
		this.fromdest = fromdest;
	}
	public String getTodest() {
		return todest;
	}
	public void setTodest(String todest) {
		this.todest = todest;
	}
	public Timestamp getFromtime() {
		return fromtime;
	}
	public void setFromtime(Timestamp fromtime) {
		this.fromtime = fromtime;
	}
	public Timestamp getTotime() {
		return totime;
	}
	public void setTotime(Timestamp totime) {
		this.totime = totime;
	}
	public String getFlightname() {
		return flightname;
	}
	public void setFlightname(String flightname) {
		this.flightname = flightname;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	private String imagurl;
     private String fromdest;
     private String todest;
     private Timestamp fromtime;
     private Timestamp totime;
     private String flightname;
     private int cost;
}
