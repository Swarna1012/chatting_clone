package com.example.chatting.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String postId;
    private String userId;
    private String username;
    private String postTitle;
    private String description;
    private String postMedia;
    private String path;
    private Long likesCount=0L;
    private Timestamp postedAt;
    private Boolean alreadyLiked=false;

//    public Post(Long postId) {
//        this.postId = postId;
//    }
}
