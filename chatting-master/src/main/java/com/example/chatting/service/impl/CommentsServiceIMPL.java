package com.example.chatting.service.impl;

import com.example.chatting.entity.Comments;
import com.example.chatting.entity.Post;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.repository.CommentsRepository;
import com.example.chatting.repository.UserInfoRepository;
import com.example.chatting.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CommentsServiceIMPL implements CommentsService {
    @Autowired
    private CommentsRepository commentsRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Override
    public Comments addComments(Comments comments) {
        return commentsRepository.save(comments);
    }

    @Override
    public ArrayList<Comments> getComments(String postId) {
        ArrayList<Comments> commentsList = commentsRepository.findByPostId(postId);
        for(int i=0;i<commentsList.size();i++){
            Comments commentItem = commentsList.get(i);
            ArrayList<UserInfo> userInfoList = (ArrayList<UserInfo>) userInfoRepository.findAll();
            for(UserInfo userItem:userInfoList){
                if(commentItem.getUserId().equals(userItem.getUserId())){
                    commentItem.setUsername(userItem.getUsername());
                }
            }
        }
        return commentsList;
    }
}
