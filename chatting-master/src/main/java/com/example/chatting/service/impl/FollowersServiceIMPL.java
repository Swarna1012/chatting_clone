package com.example.chatting.service.impl;

import com.example.chatting.entity.Followers;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.repository.FollowersRepository;
import com.example.chatting.repository.UserInfoRepository;
import com.example.chatting.service.FollowersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowersServiceIMPL implements FollowersService {
    @Autowired
    private FollowersRepository followersRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Override
    public Followers newFollow(Followers followers) {

        String user1 = followers.getUser1();
        String user2 = followers.getUser2();

        Followers followers1 = followersRepository.findByUser1AndUser2(user1,user2);
        if (followers1==null){
            followersRepository.save(followers);

            UserInfo userInfo = userInfoRepository.findByUserId(user1);
//            System.out.println(userInfo.getUserId() + user1);
            if(userInfo.getUserId().equals(user1)){
                userInfo.setFollowing(userInfo.getFollowing()+1);
                userInfoRepository.save(userInfo);
            }

            UserInfo userInfo1 = userInfoRepository.findByUserId(user2);
//            System.out.println(userInfo1.getUserId()+user2);
            if (userInfo1.getUserId().equals(user2)){
                userInfo1.setFollowers(userInfo1.getFollowers()+1);
                userInfoRepository.save(userInfo1);
            }
        }else {
            System.out.println("already found");
        }

        return followers;
    }


}
