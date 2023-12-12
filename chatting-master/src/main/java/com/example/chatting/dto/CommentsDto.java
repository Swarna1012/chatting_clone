package com.example.chatting.dto;

import com.example.chatting.entity.Post;
import com.example.chatting.entity.UserInfo;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CommentsDto {
    private String commentId;
    private String userId;
    private String postId;
    private String comment;
    private String username;
    private Timestamp commentedAt;
}
