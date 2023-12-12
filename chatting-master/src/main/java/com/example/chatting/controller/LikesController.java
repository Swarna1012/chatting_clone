package com.example.chatting.controller;

import com.example.chatting.service.LikesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/likes")
@CrossOrigin
public class LikesController {
    @Autowired
    private LikesService likesService;

    @PostMapping("/{postId}/{userId}")
    public String likesMaintain(@PathVariable String postId, @PathVariable String userId){
        return likesService.likesMaintain(postId, userId);
    }
}
