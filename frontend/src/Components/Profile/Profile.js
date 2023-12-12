import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Grid } from '@mui/material';
import profile1 from '../../images/pp1.jpg';


function Profile({followersList,followingList}) {

    const [yourPosts, setYourPosts] = useState(true);
    const [yourSaved, setYourSaved] = useState(false);
    const [arrayYourpost, setArrayYourPost] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: JSON.parse(localStorage.getItem("userDetails")).username,
        name: JSON.parse(localStorage.getItem("userDetails")).name,
        profileImage: JSON.parse(localStorage.getItem("userDetails")).profileImage
      });
    
    const handleYourPosts=()=>{
        setYourPosts(true);
        setYourSaved(false);
    }

    useEffect(() =>{
        if(yourPosts){
            fetch("http://localhost:8080/post/myPost/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    setArrayYourPost(data);
            });
        }
    },[yourPosts])

    const handleSaved=()=>{
        setYourSaved(true)
        setYourPosts(false)
    }

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        console.log("insidee")
        if(name === 'profileImage'){
            console.log("yes");
            if(files.length>0){
                // const picImage = e.target.files[0];
                // console.log("pic image " + picImage)
                const selectedImage = URL.createObjectURL(files[0]);
                console.log("selected " + selectedImage );
                setFormData({...formData, profileImage: selectedImage});
                console.log("check ",formData.profileImage);
            }
            else {
                setFormData({ ...formData, profileImage: null });
            }
        }
        else{
            setFormData({ ...formData, [name]: value });
        } 

        console.log("final " + formData);
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setIsPopupOpen(false);
    }

  return (
    <div className='profile_container'>
        <div>
            <button className='edit_button' onClick={()=> setIsPopupOpen(true)} >Edit</button>
            {
                isPopupOpen && (
                    <div className='popup'>
                        <div className='popup-content'>
                            <form onSubmit={handleSubmit}>
                                <div className="fileupload">
                                    <label htmlFor="file-uploads">
                                        <img className="mainpage_uploadicons" src={formData.profileImage || '/default-profile-image.png'} alt="Profile" width="100px"/>
                                    </label>
                                    <input type="file" name="profileImage" onChange={handleInputChange} id="file-uploads" />
                                </div>
                                <div>
                                    <label>Username: </label>
                                    <input type='text' name='username' value={formData.username} onChange={handleInputChange}></input>
                                </div>
                                <div>
                                    <label>Name: </label>
                                    <input type='text' name='name' value={formData.name} onChange={handleInputChange}></input>
                                </div>
                                <button type='submit'>Update</button>
                            </form>
                            {/* <button onClick={()=> setIsPopupOpen(false)}>close</button> */}
                        </div>
                    </div>
                )
            }
        </div>
        <div className='profile_img_name'>
            <div>
                <img className='profile_pic' src={profile1}></img>
            </div>
            <div>{JSON.parse(localStorage.getItem("userDetails")).username}</div>
            <div>{JSON.parse(localStorage.getItem("userDetails")).name}</div>
        </div>
        <div className='profile_follows'>
            <Grid container className='grid_follows'>
                <Grid item xs={4} style={{marginRight: "30px"}}>
                    <div className='follow_titles'>Followers</div>
                    <div>
                        {
                            followersList.map(followers => (
                                // <li key={followers.id}>{followers.username}</li>
                                <div className='follow_content'>                                   
                                    <img className='follow_pic' src={profile1} width="50px" style={{borderRadius: "50%"}}></img>
                                    <div className='follow_username'>{followers.username}</div>
                                    
                                        <button className='follow_button'>Remove</button>
                                        {/* <button>Accept</button> */}
                                    
                                </div>   
                            )
                        )}   
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='follow_titles'>Following</div>
                    <div>
                        {
                            followingList.map(following => (
                                // <li key={following.id}>{following.username}</li>
                                <div className='follow_content'>                                   
                                    <img className='follow_pic' src={profile1} width="50px" style={{borderRadius: "50%"}}></img>
                                    <div className='follow_username'>{following.username}</div>
                                    <button className='follow_button'>Following</button>
                                </div>  
                            )
                            
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
       
        <div className='explore_titles'>
            <div style={{fontSize: "14", fontWeight: "bold"}}>Posts</div>
            <div className='explore_title'>
                <div onClick={handleYourPosts} style={{paddingRight: 10}}>Your posts</div>
                <div className='smalls_divider' style={{paddingRight: 10}}></div>
                <div onClick={handleSaved}>Saved</div>
            </div>
        </div>
        <div>
            <div className='posts'>
                {yourPosts &&
                    arrayYourpost.map((item, index) => {
                    return(
                        <div className='posts_posts' key={index}>
                            <div>
                                <img className='posts_img' src={item.path} style={{width: "100%"}}></img>
                            </div>
                        </div>
                    )}
                )} 
            </div>
        </div>
    </div>
  )
}

export default Profile