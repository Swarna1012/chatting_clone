package com.example.chatting.controller;

import com.example.chatting.dto.ResponseDto;
import com.example.chatting.dto.StatusDto;
import com.example.chatting.entity.Status;
import com.example.chatting.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/status")
@CrossOrigin
public class StatusController {
    @Autowired
    private StatusService statusService;

    @PostMapping("")
    public Status newStatus(@RequestBody Status status){
        return statusService.newStatus(status);
    }

//    @GetMapping("/getStatus/{statusId}")
//    public ResponseEntity<ResponseDto> getStatus(@PathVariable Long statusId){
//        return statusService.getStatus(statusId);
//    }
//
//    @PostMapping("/delete/{statusId}")
//    public ResponseEntity<ResponseDto> deleteStatus(@PathVariable Long statusId){
//        return statusService.deleteStatus(statusId);
//    }
}
