package com.example.chatting.repository;

import com.example.chatting.entity.Likes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {
    Likes findByPostIdAndUserId(String postId, String userId);

    ArrayList<Likes> findAllByPostId(String postId);
}
