package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long>{

}
