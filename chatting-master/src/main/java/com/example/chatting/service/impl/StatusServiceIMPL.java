package com.example.chatting.service.impl;

import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.StatusDto;
import com.example.chatting.entity.Status;
import com.example.chatting.entity.UserInfo;
import com.example.chatting.repository.StatusRepository;
import com.example.chatting.repository.UserInfoRepository;
import com.example.chatting.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class StatusServiceIMPL implements StatusService {

    @Autowired
    private StatusRepository statusRepository;
    @Autowired
    private UserInfoRepository userInfoRepository;
    @Override
    public Status newStatus(Status status) {
        return statusRepository.save(status);
    }



}
