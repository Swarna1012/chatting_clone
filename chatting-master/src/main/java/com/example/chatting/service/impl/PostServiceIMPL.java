package com.example.chatting.service.impl;

import com.example.chatting.dto.PostDto;
import com.example.chatting.dto.ResponseDto;
import com.example.chatting.entity.*;
import com.example.chatting.repository.*;
import com.example.chatting.service.PostService;
import com.example.chatting.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
public class PostServiceIMPL implements PostService {

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private  UserInfoRepository userInfoRepository;
    @Autowired
    private FollowersRepository followersRepository;
    @Autowired
    private LikesRepository likesRepository;
    @Autowired
    private CommentsRepository commentsRepository;
    @Override
    public Post addPost(Post post) {
        UserInfo userInfo = userInfoRepository.findByUserId(post.getUserId());
        userInfo.setPostsCount(userInfo.getPostsCount() + 1);
        return postRepository.save(post);
    }

    @Override
    public ArrayList<Post> getPost(String userId){
        ArrayList<Followers> followers = followersRepository.findAllByUser1(userId);
        ArrayList<Post> posts = new ArrayList<>();

        for (Followers eachFollower: followers){
            ArrayList<Post> postArrayList = (ArrayList<Post>) postRepository.findAll(Sort.by(Sort.Direction.DESC,"postedAt"));
            for(Post singlePost: postArrayList){
                if(singlePost.getUserId().equals(eachFollower.getUser2())){
                    posts.add(singlePost);
                }
            }
        }

        for(int i=0;i<posts.size();i++){
            Post postItem = posts.get(i);
            ArrayList<UserInfo> userInfoList = (ArrayList<UserInfo>) userInfoRepository.findAll();
            for(UserInfo userItem:userInfoList){
                if(postItem.getUserId().equals(userItem.getUserId())){
                    postItem.setUsername(userItem.getUsername());
                }
            }

            String post1 = postItem.getPostId();
            if(likesRepository.findByPostIdAndUserId(post1,userId)!=null){
                postItem.setAlreadyLiked(true);
            }
        }
        return posts;
    }

    @Override
    public ArrayList<Post> getRecent(String userId) {
        ArrayList<Post> postArrayList = (ArrayList<Post>) postRepository.findAll(Sort.by(Sort.Direction.DESC,"postedAt"));
        ArrayList<Post> posts = new ArrayList<>();
        for (Post post:postArrayList){
            if(!Objects.equals(post.getUserId(), userId)){
                posts.add(post);
            }
        }

        for(int i=0;i<posts.size();i++){
            Post postItem = posts.get(i);
            ArrayList<UserInfo> userInfoList = (ArrayList<UserInfo>) userInfoRepository.findAll();
            for(UserInfo userItem:userInfoList){
                if(postItem.getUserId().equals(userItem.getUserId())){
                    postItem.setUsername(userItem.getUsername());
                }
            }

            String post1 = postItem.getPostId();
            if(likesRepository.findByPostIdAndUserId(post1,userId)!=null){
                postItem.setAlreadyLiked(true);
            }
        }
        return posts;
    }

    @Override
    public ArrayList<Post> getPopular(String userId) {
        ArrayList<Post> postArrayList = (ArrayList<Post>) postRepository.findAll(Sort.by(Sort.Direction.DESC,"likesCount"));
        ArrayList<Post> posts = new ArrayList<>();
        for (Post post:postArrayList){
            if(!Objects.equals(post.getUserId(), userId)){
                posts.add(post);
            }
        }

        for(int i=0;i<posts.size();i++){
            Post postItem = posts.get(i);
            ArrayList<UserInfo> userInfoList = (ArrayList<UserInfo>) userInfoRepository.findAll();
            for(UserInfo userItem:userInfoList){
                if(postItem.getUserId().equals(userItem.getUserId())){
                    postItem.setUsername(userItem.getUsername());
                }
            }

            String post1 = postItem.getPostId();
            if(likesRepository.findByPostIdAndUserId(post1,userId)!=null){
                postItem.setAlreadyLiked(true);
            }
        }
        return posts;
    }

    @Override
    public String deletePost(String postId) {
        Post post = postRepository.findByPostId(postId);
        String userId = post.getUserId();

        ArrayList<Likes> likes = likesRepository.findAllByPostId(postId);
        likesRepository.deleteAll(likes);

        ArrayList<Comments> comments = commentsRepository.findByPostId(postId);
        commentsRepository.deleteAll(comments);

        UserInfo userInfo = userInfoRepository.findByUserId(userId);
        userInfo.setPostsCount(userInfo.getPostsCount() - 1);
        userInfoRepository.save(userInfo);

        postRepository.delete(post);
        return "Successfully deleted";
    }

    @Override
    public ArrayList<Post> myPost(String userId) {
        ArrayList<Post> posts = (ArrayList<Post>) postRepository.findAll(Sort.by(Sort.Direction.DESC,"postedAt"));
        ArrayList<Post> postArrayList = new ArrayList<>();
        for(Post post: posts){
            if(post.getUserId().equals(userId)){
                postArrayList.add(post);
            }
        }
        return postArrayList;
    }
}
