package com.example.chatting.service.impl;

import com.example.chatting.entity.Likes;
import com.example.chatting.entity.Post;
import com.example.chatting.repository.LikesRepository;
import com.example.chatting.repository.PostRepository;
import com.example.chatting.service.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LikesServiceIMPL implements LikesService {
    @Autowired
    private LikesRepository likesRepository;
    @Autowired
    private PostRepository postRepository;
    @Override
    public String likesMaintain(String postId, String userId) {
        Likes likes = likesRepository.findByPostIdAndUserId(postId, userId);
        Post post = postRepository.findByPostId(postId);

        if(likes == null){
            post.setLikesCount(post.getLikesCount() + 1);
            Likes likes1 = new Likes();
            likes1.setPostId(postId);
            likes1.setUserId(userId);
            likesRepository.save(likes1);

            return "liked added successfully";
        }
        else {
            post.setLikesCount(post.getLikesCount() - 1);
            likesRepository.delete(likes);
            return "likes removed successfully";
        }

    }
}
