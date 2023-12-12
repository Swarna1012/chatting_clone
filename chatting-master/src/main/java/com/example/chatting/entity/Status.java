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
public class Status {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String statusId;
    private String userId;
    private String media;
    private String path;
    private String username;
    private Timestamp statusTime;

//    public Status(Long statusId) {
//        this.statusId = statusId;
//    }
}
