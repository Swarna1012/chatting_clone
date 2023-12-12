package com.example.chatting.dto;

import com.example.chatting.entity.UserInfo;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class StatusDto {

    private String statusId;
    private String userId;
    private String media;
    private String path;
    private String username;
    private Timestamp statusTime;
}
