package com.example.chatting.controller;

import com.example.chatting.dto.CommentsDto;
import com.example.chatting.dto.PostDto;
import com.example.chatting.dto.ResponseDto;
import com.example.chatting.entity.Comments;
import com.example.chatting.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/comments")
@CrossOrigin
public class CommentsController {
    @Autowired
    private CommentsService commentsService;

    @PostMapping("")
    public Comments addComments(@RequestBody Comments comments){
        return commentsService.addComments(comments);
    }

    @GetMapping("/{postId}")
    public ArrayList<Comments> getComments(@PathVariable() String postId){
        return commentsService.getComments(postId);
    }
}
