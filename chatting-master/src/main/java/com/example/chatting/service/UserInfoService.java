package com.example.chatting.service;


import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.UserInfoDto;
import com.example.chatting.entity.UserInfo;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

public interface UserInfoService {
    UserInfo getUser(String userId);

    UserInfo submitUser(UserInfo userInfo);

    UserInfo editUser(UserInfo userInfo,String userId);

    ArrayList<UserInfo> suggestUsers(String userId);
}

