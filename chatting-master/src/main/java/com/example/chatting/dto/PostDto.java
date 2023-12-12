package com.example.chatting.dto;

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
public class PostDto {
    private String postId;
    private String userId;
    private String postTitle;
    private String description;
    private String postMedia;
    private String path;
    private Long likesCount;
    private Timestamp postedAt;
}
