package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {
   @Id
   private String username;
   private String name;
   private String password;
   private String email;
   private String type;
   public String getUsername() {
	   return username;
   }
   public void setusername(String username) {
	   this.username=username;
   }
   public String getname() {
	   return name;
   }
   public void setname(String name) {
	   this.name=name;
   }
   public String getpassword() {
	   return password;
   }
   public void setPassword(String password) {
	   this.password=password;
   }
   public String getEmail() {
	   return email;
   }
   public void setEmail(String email) {
	   this.email=email;
   }
   public String getType() {
	   return type;
   }
   public void setType(String type) {
	   this.type=type;
   }
}
