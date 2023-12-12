package com.example.chatting.dto;

import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserInfoDto {

    private String username;
    private String name;
    private String profileImage;
    private String email;
    private String phNo;
    private String password;
    private Date dob;
}
