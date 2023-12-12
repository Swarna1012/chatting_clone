package com.example.chatting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Entity
@Data
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String userId;
    private String username;
    private String name;
    private String profileImage;
    private String email;
    private String phNo;
    private Date dob;
    private String password;
    private Long postsCount=0L;
    private String userType = "USER";
    @Builder.Default
    private Long followers=0L;
    @Builder.Default
    private Long following=0L;

//    public UserInfo() {
//        super();
//    }
//
//    public UserInfo(Long id,String userId, String username, String name, String profileImage, String email, String phNo, Date dob, String password, String userType, Long followers,Long following) {
//        super();
//        this.userId = userId;
//        this.id = id;
//        this.username = username;
//        this.name = name;
//        this.profileImage = profileImage;
//        this.email = email;
//        this.phNo = phNo;
//        this.dob = dob;
//        this.password = password;
//        this.userType = userType;
//        this.followers = followers;
//        this.following=following;
//    }

}