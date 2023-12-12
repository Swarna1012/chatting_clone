package com.example.chatting.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Followers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String user1;
    private String user2;
}
