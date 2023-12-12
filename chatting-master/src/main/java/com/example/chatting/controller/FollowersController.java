package com.example.chatting.controller;

import com.example.chatting.entity.Followers;
import com.example.chatting.service.FollowersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/followers")
@CrossOrigin
public class FollowersController {
    @Autowired
    private FollowersService followersService;

    @PostMapping("")
    public Followers newFollow(@RequestBody Followers followers){
        return followersService.newFollow(followers);
    }


}
