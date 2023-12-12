import React,{ Component } from 'react';
import './Explore.css';
import post1 from '../../images/pp1.jpg';
import love from "../../images/wite_heart.png";
import redLove from "../../images/red_heart.png";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

class Explore extends Component{
    constructor(props) {
        super(props);
        this.state = {  
            arrayRecentPost:[],
            arrayPopularPost:[],
            isRecents: true,
            isPopular: false,
            isLiked: !this.props.alreadyLiked,
        }
    }
    
    componentDidMount(){
        this.getRecentPost();
        this.getPopularPost();
    }

    handleRecents=()=>{
        this.setState({ isRecents: true, isPopular: false });
        this.getRecentPost();
    }
    handlePopular=()=>{
        this.setState({isRecents:false, isPopular: true})
        this.getPopularPost();
        
    }

    getRecentPost=()=>{
        const thisContext = this;
        fetch("http://localhost:8080/post/recents/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
            .then(response => response.json())
            .then(data => {
                console.log(data);
                thisContext.setState({arrayRecentPost: data});
        });
    }

    getPopularPost=()=>{
        const thisContext = this;
        fetch("http://localhost:8080/post/popular/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
            .then(response => response.json())
            .then(data => {
                console.log(data);
                thisContext.setState({arrayPopularPost: data});
        });
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

    render(){
        return (
            <div className='explore_container'>
                <div className='explore_titles'>
                    <div style={{fontSize: "14", fontWeight: "bold"}}>Explore</div>
                    <div className='explore_title'>
                        <div onClick={this.handleRecents} style={{paddingRight: 10}}>Recents</div>
                        <div className='smalls_divider' style={{paddingRight: 10}}></div>
                        <div onClick={this.handlePopular}>Popular</div>
                    </div>
                </div>
                
                <div className='explore'>
                    {this.state.isRecents &&
                        this.state.arrayRecentPost.map((item, index) => {
                        return(
                            <div className='explore_posts' key={index}>
                                <div>
                                    <img className='explore_img' src={item.path} style={{width: "100%"}}></img>
                                </div>
                                <div className='explore_content'>
                                    <div>
                                        <img className='explore_pic' src={post1} width="40px" style={{borderRadius: 50}}></img>
                                    </div>
                                    <div className='text'>{item.username}</div>

                                    <div className='like_comment'>
                                        {
                                            this.state.isLiked ? <img src={love} className="post_reactImage" onClick={this.love_handle} width="7px"/> :
                                                <img src={redLove} className="post_reactImage" onClick={this.love_handle}/>
                                        }
                                        <ChatBubbleOutlineIcon className="post_reactImage"/>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    } 
                    {this.state.isPopular &&
                        this.state.arrayPopularPost.map((item, index) => {
                            return(
                                <div className='explore_posts' key={index}>
                                    <div>
                                        <img className='explore_img' src={item.path} style={{width: "100%"}}></img>
                                    </div>
                                    <div className='explore_content'>
                                        <div>
                                            <img className='explore_pic' src={post1} width="40px" style={{borderRadius: 50}}></img>
                                        </div>
                                        <div className='text'>{item.username}</div>

                                        <div className='like_comment'>
                                            {
                                                this.state.isLiked ? <img src={love} className="post_reactImage" onClick={this.love_handle} width="7px"/> :
                                                    <img src={redLove} className="post_reactImage" onClick={this.love_handle}/>
                                            }
                                            <ChatBubbleOutlineIcon className="post_reactImage"/>
                                        </div>
                                    </div>
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
          )
    }
}


export default Explore