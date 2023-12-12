import React,{Component} from "react";
import './Post.css'
import { Avatar } from "@mui/material";
// import postImage from "../../images/post2.jpg";
import love from "../../images/wite_heart.png";
import redLove from "../../images/red_heart.png";
// import comments from "../../images/comments.png";
import send from "../../images/send.png";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            commentList:[],
            isLiked: !this.props.alreadyLiked,
            
        }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{
        const thisContext = this;
        // let data =[
        //     {
        //         "username": "aravind",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 1"
        //     },
        //     {
        //         "username": "keeru",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 2"
        //     },
        //     {
        //         "username": "arun",
        //         "commentId": "1234",
        //         "timeStamp": "123456",
        //         "description": "Comment 3"
        //     }
        // ];
        // this.setState({commentList: data});
        fetch("http://localhost:8080/comments/"+this.props.id)
            .then(response => response.json())
            .then(data => {
                thisContext.setState({commentList: data});
            });
    }

    startFollow=()=>{
        
        let payload = {
            "user1": JSON.parse(localStorage.getItem("users")).uid,
            "user2": this.props.uid
        };
        const requestOptions ={
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(payload),
        }

        fetch("http://localhost:8080/followers",requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error =>{

        })
    }

    love_handle=()=>{
        if(this.state.isLiked){
            this.setState({isLiked: false})
        }
        else{
            this.setState({isLiked: true})
        }
 
        const requestOptions ={
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(this.state.isLiked),
        }
        
        fetch(("http://localhost:8080/likes/" + this.props.id +"/"+ JSON.parse(localStorage.getItem("users")).uid),requestOptions)
        .then(response => response.json())
        .then(data => {
            this.getPost();
        })
        .catch(error =>{
        })
    }

    submitCommits=(event)=>{
        if(event.key == "Enter"){
            let comment = event.currentTarget.value;
            if(comment!=null || comment != undefined){
                const thisContext = this;
                let payload = {
                    "commentId": Math.floor(Math.random() * 100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "comment": comment,
                    "commentedAt": new Date().getTime(),
                };
                
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
    
                fetch("http://localhost:8080/comments",requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    thisContext.getComments();
                })
                .catch(error =>{
    
                })
            }
        }
    }

    render() { 
        return (  
            <div className="post_container">
                {/* Header */}
                <div className="post_header">
                    <Avatar className="post_image" src={this.props.profileImage}/>
                    <div className="post_username">{this.props.username}</div>
                    <div className="follow_btn">
                        <button onClick={this.startFollow} className="right_btn">Follow</button>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="815px"/>
                </div>

                {/* Analytics */}
                <div className="like_comment_share_like">
                    <div className="like_comment_share" style={{marginLeft:"10px"}}>
                        
                        {
                            this.state.isLiked ? <img src={love} className="post_reactImage" onClick={this.love_handle} width="7px"/> :
                                <img src={redLove} className="post_reactImage" onClick={this.love_handle}/>
                        }
                        
                        <ChatBubbleOutlineIcon className="post_reactImage"/>
                        <ShareIcon className="post_reactImage"/>
                        {/* <img src={comments} className="post_reactImage"/> */}
                        {/* <img src={send} className="post_reactImage"/> */}
                    </div>
                    <div style={{fontWeight:"bold", marginLeft:"20px"}}>
                        {this.props.likes} likes
                    </div>
                </div>

                {/* Comment section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            index < 4 ?
                                <div className="post_comment">{item.username}: {item.comment}</div> : <span></span>
                        ))
                    }
                    <input className="post_commentBox" onKeyPress={this.submitCommits} type="text" placeholder="Add a comment..." 
                        style={{backgroundColor: "#212121"}}/>
                </div>
            </div>
        );
    }
}
 
export default Post;