import React,{Component} from "react";
import './NavBar.css'
import { Avatar, Grid } from "@mui/material";
import instagram_logo from '../../images/Logo-Instagram.png';
import home from '../../images/homes.png';
import messenger from '../../images/messenger.png';
import explore from '../../images/explore.png';
import heart from '../../images/heart.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return (  
            <div>
                <div className="navbar_content">
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className='navbar_logo' src={instagram_logo} width="105px"/>
                        </Grid>
                        <Grid item xs={3}>
                            <input className="search_bar" text="text" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{display:"flex"}}>
                            <img className="navbar_img" src={home} width="25px" height="25px"/>
                            <img className="navbar_img" src={messenger} width="25px" height="25px"/>
                            <img className="navbar_img" src={explore} width="25px" height="25px"/>
                            <img className="navbar_img" src={heart} width="25px" height="25px"/>
                            <Avatar className="navbar_img" style={{width:"25px",height:"25px"}} />
                        </Grid>
                        <Grid item xs={1}></Grid> 
                    </Grid>
                </div>
            </div>
        );
    }
}
 
export default NavBar;