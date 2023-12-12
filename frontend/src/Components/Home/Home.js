import React, { useEffect, useState } from 'react';
import MainPage from '../MainPage/MainPage';
import { Grid } from '@mui/material';
import './Home.css';
import StatusBar from '../StatusBar/StatusBar';
import Explore from '../Explore/Explore';
import Profile from '../Profile/Profile';
import profile_icon from '../../images/pp3.jpg';
import white_feed from '../../images/white_feed.jpg';
import white_explore from '../../images/white_explore.png';
import white_notification from '../../images/white_notification.png';
import white_logout from '../../images/white_logout.png';
import white_create from '../../images/white_create.png';
import post_icon from '../../images/postss.png';
import {storage} from '../firebase';
import SignIn from "../SignIn/SignIn";
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';
import Create from '../Create/Create';


function Home(props) {
    const [showHomeContent, setShowHomeContent] = useState(true);
    const [showExploreContent, setShowExploreContent] = useState(false);
    const [showProfileContent, setShowProfileContent] = useState(false);
    const [followersList, setFollowersList] = useState([]);
    const [followingList, setFollowingList] = useState([]);
    const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false);

    const [description, setDescription]= useState("");
    

    useEffect(() =>{
        if(showProfileContent){
            fetch("http://localhost:8080/profile/followers/"+ JSON.parse(localStorage.getItem("users")).uid)
                .then(response => response.json())
                .then(data => {
                    setFollowersList(data);
                    console.log(data);
            });
        } 
    },[showProfileContent]);  

    useEffect(() =>{
        if(showProfileContent){
            fetch("http://localhost:8080/profile/following/"+ JSON.parse(localStorage.getItem("users")).uid)
                .then(response => response.json())
                .then(data => {
                    setFollowingList(data);
                    console.log(data);
            });
        } 
    },[showProfileContent]);  

    useEffect(() =>{
        if(showHomeContent){
            fetch("http://localhost:8080/users/" + JSON.parse(localStorage.getItem("users")).uid)
                .then(response => response.json())
                .then(data => {
                    
                    localStorage.setItem("userDetails", JSON.stringify(data));
                    // const userData = JSON.stringify(data)
                    // console.log("userdetails is " + userData);
                    
            });
        } 
    },[showHomeContent]); 

    const handleHomeButton=()=>{
        setShowHomeContent(true);
        setShowExploreContent(false);
        setShowProfileContent(false);
    }
    const handleExploreButton=()=>{
        setShowExploreContent(true);
        setShowHomeContent(false);
        setShowProfileContent(false);
    }
    const handleProfileSearch=()=>{
        setShowProfileContent(true);
        setShowHomeContent(false);
        setShowExploreContent(false);
    }

    const handleOpenModal = () => {
        setIsCreatePopupOpen(true);
      };
    
      const handleClosePopup = () => {
        setIsCreatePopupOpen(false);
      };

   
    const handleLogout=()=>{
        localStorage.removeItem("users")
        localStorage.removeItem("userDetails")
        window.location.href="/"
    }

    // const getUserDetails=()=>{
    //     fetch("http://localhost:8080/users/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             // const userDetails = data;
    //             localStorage.setItem("userDetails", JSON.stringify(data));  
    //         })
    //         .catch(error=>{
    //             console.log(error);
    //         })
    // }

    const handleDescription=(event)=>{
        setDescription(event.target.value);
    }

    const upload = (event) =>{
        let image = event.target.files[0];
        console.log("upload image " + image);
        const thisContext = this;
        if(image == null || image == undefined)
            return;
        var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on(
            "state_changed",
            function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({progressBar : progress})
            },
            function(error){

            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    console.log(downloadURL);
                    
                    let payload = {
                        "postId": Math.floor(Math.random() * 100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "path": downloadURL,
                        "postedAt": new Date().getTime(),
                        "likesCount": 0,
                        "description": description
                    };
                    
                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    }
        
                    fetch("http://localhost:8080/post",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        setIsCreatePopupOpen(false);
                        console.log(data);
                        thisContext.getPost();
                        // this.getUserDetails(); 

                        const signInInstance = new SignIn();
                        signInInstance.getUserDetails();
                        console.log(signInInstance.getUserDetails);
                        
                    })
                    .catch(error =>{
        
                    })
                })
            });
    }

  return (
    <div className='home_container'>
        <Grid container>
            <Grid item xs={2.5} className='grid_sidebar'>
                <div className='home_sidebar'>
                    <div className='profile_details'>
                        <img src={profile_icon} width="100px" style={{borderRadius: 50}}></img>
                        <div>{JSON.parse(localStorage.getItem("userDetails")).username}</div>
                        <div>{JSON.parse(localStorage.getItem("userDetails")).name}</div>
                    </div>

                    <div className='profile_extra'>
                        <div className='profile_extra_inside'>
                            <div>{JSON.parse(localStorage.getItem("userDetails")).postsCount}</div>
                            <div className='pro_title'>Posts</div>
                        </div>
                        <div className='small_divider'></div>
                        <div className='profile_extra_inside'>
                            <div>{JSON.parse(localStorage.getItem("userDetails")).followers}</div>
                            <div className='pro_title'>Followers</div>
                        </div>
                        <div className='small_divider'></div>
                        <div className='profile_extra_inside'>
                            <div>{JSON.parse(localStorage.getItem("userDetails")).following}</div>
                            <div className='pro_title'>Following</div>
                        </div>  
                    </div>

                    <div className='sidebar_titles'>
                        <div className='sidebar_topic'>
                            <img className='icons' src={white_feed} width="30px" ></img>
                            <span className='sidebar_words' onClick={handleHomeButton}>Feed</span>
                        </div>
                        <div className='sidebar_topic'>
                            <img className='icons' src={white_explore} width="30px" ></img>
                            <span className='sidebar_words' onClick={handleExploreButton}>Explore</span>
                        </div>
                        <div className='sidebar_topic'>
                            <img className='icons' src={white_notification} width="25px"></img>
                            <span className='sidebar_words'>Notifications</span>
                        </div>
                        <div className='sidebar_topic fileupload'>
                            <img className='icons' src={white_create} width="30px"></img>
                            <span className='sidebar_words' onClick={handleOpenModal}>Create</span>
                        </div>
                        <div className='sidebar_topic'>
                            <img className='icons' src={profile_icon} width="30px"></img>
                            <span className='sidebar_words' onClick={handleProfileSearch}>Profile</span>
                        </div> 
                        <div className='sidebar_topic'>
                            <img className='icons' src={white_logout} width="25px"></img>
                            <span className='sidebar_words' onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={9.5} className='grid_content'>
                <div id='home_content'>
                    {showHomeContent && 
                        <div>
                            <StatusBar/>
                            <div style={{display: "flex"}}>
                                <div>
                                    <MainPage/>
                                </div>
                                <div style={{marginLeft: "70px", marginTop: "100px"}}>
                                    <InfoSection/>
                                    <Suggestions/>
                                </div>
                            </div>
                        </div>
                    }
                    {showExploreContent &&
                        <div>
                            <Explore/>
                        </div>
                    }
                    {showProfileContent &&
                        <div>
                            <Profile followersList={followersList} followingList={followingList}/>
                        </div>
                    }
                    {isCreatePopupOpen && (
                        <div className='popups'>
                        <div className='popups-content'>
                            <div>
                                <span className='close' onClick={handleClosePopup}>&times;</span>
                            </div>
                            <div className='create_component'>
                                <div className='create_title'>Create new post</div>
                                <div>
                                    <img src={post_icon} width='100px'></img>
                                    <div className='create_content'>Drag photos and videos here !</div>
                                </div>
                                
                                <div className="fileupload create_choose">
                                    <label htmlFor="file-upload">
                                        Choose File
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        onChange={upload}
                                        style={{ display: 'none' }}
                                    />
                                </div>

                                <div className='create_description'>
                                    <input className='create_description' type='text' value={description} placeholder='write your description here!' onChange={handleDescription}></input>
                                </div>
                            </div>
                            <div>
                                <button >upload</button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                                
            </Grid>
        </Grid>
    </div>
    
  )
}

export default Home;


// https://www.cometchat.com/_app/immutable/assets/background-1.52a4454d.svg
