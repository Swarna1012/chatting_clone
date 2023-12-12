package com.example.chatting.service;

import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.StatusDto;
import com.example.chatting.entity.Status;
import org.springframework.http.ResponseEntity;

public interface StatusService {
    Status newStatus(Status status);

//    ResponseEntity<ResponseDto> getStatus(Long statusId);
//
//    ResponseEntity<ResponseDto> deleteStatus(Long statusId);
}
