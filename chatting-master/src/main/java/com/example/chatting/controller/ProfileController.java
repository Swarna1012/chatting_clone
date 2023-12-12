package com.example.chatting.controller;

import com.example.chatting.entity.Followers;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.service.FollowersService;
import com.example.chatting.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class ProfileController {
    @Autowired
    private ProfileService profileService;

    @GetMapping("/followers/{userId}")
    public ArrayList<UserInfo> userFollowers(@PathVariable String userId){
        return profileService.userFollowers(userId);
    }

    @GetMapping("/following/{userId}")
    public ArrayList<UserInfo> userFollowing(@PathVariable String userId){
        return profileService.userFollowing(userId);
    }

}
