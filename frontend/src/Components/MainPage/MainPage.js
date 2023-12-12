import React,{Component, useContext} from "react";
import './MainPage.css'
import Post from "../Post/Post";
// import post from "../../images/post1.jpg";
import uploadImage from '../../images/upload1.png';
import {storage} from '../firebase';
import SignIn from "../SignIn/SignIn";
// import {UserContext, useUser} from '../../context/UserContext';

class MainPage extends Component {

    constructor(props) { 
        super(props);
        this.state = {  
            postArray:[],
            progressBar:"",
        }
    }
    
    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        const thisContext = this;
        // let data =[
        //     {
        //         "postId": "123456",
        //         "username": "swarna",
        //         "postImageURL": "https://w0.peakpx.com/wallpaper/917/343/HD-wallpaper-nature-night.jpg",
        //         "timeStamp": "111111",
        //         "likes": "7989"
        //     },
        //     {
        //         "postId": "123456",
        //         "username": "arun",
        //         "postImageURL": "https://w0.peakpx.com/wallpaper/917/343/HD-wallpaper-nature-night.jpg",
        //         "timeStamp": "111111",
        //         "likes": "7989"
        //     },
        //     {
        //         "postId": "123456",
        //         "username": "anu",
        //         "postImageURL": "https://w0.peakpx.com/wallpaper/917/343/HD-wallpaper-nature-night.jpg",
        //         "timeStamp": "111111",
        //         "likes": "7989"
        //     }
        // ];
        fetch("http://localhost:8080/post/" + JSON.parse(localStorage.getItem("users")).uid)             //get post of following users
            .then(response => response.json())
            .then(data => {
                console.log(data);
                thisContext.setState({postArray: data});

        });
    }

    // upload = (event) =>{
    //     let image = event.target.files[0];
    //     const thisContext = this;
    //     if(image == null || image == undefined)
    //         return;
    //     var uploadTask = storage.ref("images").child(image.name).put(image);
    //     uploadTask.on(
    //         "state_changed",
    //         function(snapshot){
    //             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             thisContext.setState({progressBar : progress})
    //         },
    //         function(error){

    //         },
    //         function(){
    //             uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
    //                 console.log(downloadURL);
                    
    //                 let payload = {
    //                     "postId": Math.floor(Math.random() * 100000).toString(),
    //                     "userId": JSON.parse(localStorage.getItem("users")).uid,
    //                     "path": downloadURL,
    //                     "postedAt": new Date().getTime(),
    //                     "likesCount": 0
    //                 };
                    
    //                 const requestOptions ={
    //                     method: "POST",
    //                     headers: { 'Content-Type': 'application/json' },
    //                     body : JSON.stringify(payload),
    //                 }
        
    //                 fetch("http://localhost:8080/post",requestOptions)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     thisContext.getPost();
    //                     thisContext.getPost();

    //                     const signInInstance = new SignIn();
    //                     signInInstance.getUserDetails();
    //                     console.log(signInInstance.getUserDetails);
    //                 })
    //                 .catch(error =>{
        
    //                 })
    //             })
    //         });
    // }

    render() { 
        return (  
            <div>
                <div className="mainpage_container">
                    <div className="feed_title">Feeds</div>
                    {/* <div className="mainpage_divider"></div> */}
                    {/* <div className="fileupload">
                        <label for="file-upload">
                            <img className="mainpage_uploadicon" src={uploadImage}></img>
                        </label>
                        <input onChange={this.upload} id="file-upload" type="file"/>
                    </div> */}
                    {/* <div className="mainpage_divider"></div> */}
                </div>
                <div className="upload_text">{this.state.progressBar}</div>
                {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} username={item.username} postImage={item.path} likes={item.likesCount} uid={item.userId}
                            alreadyLiked={item.alreadyLiked} />
                    ))
                }
            </div>
        );
    }
}
 
export default MainPage;