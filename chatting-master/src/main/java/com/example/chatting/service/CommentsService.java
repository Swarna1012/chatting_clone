package com.example.chatting.service;

import com.example.chatting.dto.CommentsDto;
import com.example.chatting.dto.ResponseDto;
import com.example.chatting.entity.Comments;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

public interface CommentsService {
    Comments addComments(Comments comments);

    ArrayList<Comments> getComments(String postId);
}
