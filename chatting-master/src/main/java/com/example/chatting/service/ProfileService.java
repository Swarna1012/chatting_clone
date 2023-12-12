package com.example.chatting.service;

import com.example.chatting.entity.Followers;
import com.example.chatting.entity.UserInfo;

import java.util.ArrayList;
import java.util.List;

public interface ProfileService {
    ArrayList<UserInfo> userFollowers(String userId);

    ArrayList<UserInfo> userFollowing(String userId);
}
