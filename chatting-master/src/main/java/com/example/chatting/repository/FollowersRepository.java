package com.example.chatting.repository;

import com.example.chatting.entity.Followers;
import com.example.chatting.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface FollowersRepository extends JpaRepository<Followers, Long> {
    Followers findByUser1AndUser2(String user1, String user2);

    ArrayList<Followers> findAllByUser2(String userId);

    ArrayList<Followers> findAllByUser1(String userId);
}
