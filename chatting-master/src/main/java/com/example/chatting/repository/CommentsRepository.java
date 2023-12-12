package com.example.chatting.repository;

import com.example.chatting.entity.Comments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Long> {
    ArrayList<Comments> findByPostId(String postId);
}
