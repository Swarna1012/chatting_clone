package com.example.chatting.service.impl;

import com.example.chatting.entity.Followers;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.repository.FollowersRepository;
import com.example.chatting.repository.UserInfoRepository;
import com.example.chatting.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfileServiceIMPL implements ProfileService {
    @Autowired
    private FollowersRepository followersRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Override
    public ArrayList<UserInfo> userFollowers(String userId) {
        ArrayList<Followers> followers = followersRepository.findAllByUser2(userId);
        ArrayList<UserInfo> userInfos = new ArrayList<>();
        for(Followers followers1:followers){
            UserInfo userInfo = userInfoRepository.findByUserId(followers1.getUser1());
//            System.out.println(userInfo);
            userInfos.add(userInfo);
        }
        return userInfos;
    }

    @Override
    public ArrayList<UserInfo> userFollowing(String userId) {
        ArrayList<Followers> followers = followersRepository.findAllByUser1(userId);
        ArrayList<UserInfo> userInfos = new ArrayList<>();
        for(Followers followers1:followers){
            UserInfo userInfo = userInfoRepository.findByUserId(followers1.getUser2());
//            System.out.println(userInfo);
            userInfos.add(userInfo);
        }
        return userInfos;
    }
}
