package com.example.chatting.controller;

import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.UserInfoDto;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @PostMapping("")
    public UserInfo submitUser(@RequestBody UserInfo userInfo){
        return userInfoService.submitUser(userInfo);
    }

    @GetMapping("/{userId}")
    public UserInfo getUser(@PathVariable String userId){
        return userInfoService.getUser(userId);
    }

    @PostMapping("/editUser/{userId}")
    public UserInfo editUser(@RequestBody UserInfo userInfo,@PathVariable String userId){
        return userInfoService.editUser(userInfo,userId);
    }

    @GetMapping("/suggestion/{userId}")
    public ArrayList<UserInfo> suggestUsers(@PathVariable String userId){
        return userInfoService.suggestUsers(userId);
    }
}
