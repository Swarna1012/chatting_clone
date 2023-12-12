package com.example.chatting.service.impl;

import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.UserInfoDto;
import com.example.chatting.entity.Followers;
import com.example.chatting.entity.Post;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.repository.FollowersRepository;
import com.example.chatting.repository.PostRepository;
import com.example.chatting.repository.UserInfoRepository;
import com.example.chatting.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;

@Service
public class UserInfoServiceIMPL implements UserInfoService {

    @Autowired
    private UserInfoRepository userInfoRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private FollowersRepository followersRepository;

    @Override
    public UserInfo submitUser(UserInfo userInfo) {
        return  userInfoRepository.save(userInfo);
    }

    @Override
    public UserInfo getUser(String userId) {
        UserInfo userInfo = userInfoRepository.findByUserId(userId);
        return userInfo;
    }

    @Override
    public UserInfo editUser(UserInfo userInfo, String userId) {

        UserInfo userInfo1 = userInfoRepository.findByUserId(userId);
        System.out.println(userInfo1);
        userInfo1.setUsername(userInfo.getUsername());
        userInfo1.setName(userInfo.getName());
        userInfo1.setDob(userInfo.getDob());
        userInfo1.setPhNo(userInfo.getPhNo());
        userInfo1.setProfileImage(userInfo.getProfileImage());
        System.out.println(userInfo1);
        userInfoRepository.save(userInfo1);
        return userInfo1;
    }

    @Override
    public ArrayList<UserInfo> suggestUsers(String userId) {
        ArrayList<UserInfo> userInfoArrayList = (ArrayList<UserInfo>) userInfoRepository.findAll();
        ArrayList<Followers> followers = followersRepository.findAllByUser1(userId);
        ArrayList<UserInfo> userInfos = new ArrayList<>();

        if(followers.isEmpty()){
            for (UserInfo userInfo: userInfoArrayList){
                if (!Objects.equals(userInfo.getUserId(), userId)){
                    userInfos.add(userInfo);
                }
            }
            return userInfos;
        }
        return userInfos;
    }

}
