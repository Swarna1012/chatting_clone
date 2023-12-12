package com.example.chatting.service;

import com.example.chatting.dto.PostDto;
import com.example.chatting.dto.ResponseDto;
import com.example.chatting.entity.Post;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

public interface PostService {
    Post addPost(Post post);

    ArrayList<Post> getPost(String userId);

    ArrayList<Post> getRecent(String userId);

    ArrayList<Post> getPopular(String userId);

    String deletePost(String postId);

    ArrayList<Post> myPost(String userId);
}
