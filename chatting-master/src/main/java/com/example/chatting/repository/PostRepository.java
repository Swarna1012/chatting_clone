package com.example.chatting.repository;

import com.example.chatting.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Object findAllByUserId(String user2);

    Post findByPostId(String postId);

}
