package com.example.chatting.controller;

import com.example.chatting.dto.PostDto;
import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.UserInfoDto;
import com.example.chatting.entity.Post;
import com.example.chatting.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/post")
@CrossOrigin
public class PostController {

    @Autowired
    private PostService postService;
    @PostMapping("")
    public Post addPost(@RequestBody Post post){
        return postService.addPost(post);
    }


    @GetMapping("/{userId}")        //get post of following
    public ArrayList<Post> getPost(@PathVariable String userId){
        return postService.getPost(userId);
    }


    @GetMapping("/recents/{userId}")    //get all posts
    public ArrayList<Post> getRecent(@PathVariable String userId){
        return postService.getRecent(userId);
    }

    @GetMapping("/popular/{userId}")
    public ArrayList<Post> getPopular(@PathVariable String userId){
        return postService.getPopular(userId);
    }

    @PostMapping("/delete/{postId}")
    public String deletePost(@PathVariable String postId){
        return postService.deletePost(postId);
    }

    @GetMapping("/myPost/{userId}")
    public ArrayList<Post> myPost(@PathVariable String userId){
        return postService.myPost(userId);
    }
}
