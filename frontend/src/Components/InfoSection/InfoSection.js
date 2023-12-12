import React,{Component} from "react";
import './InfoSection.css';
import { Avatar } from "@mui/material";
import pp2 from '../../images/pp2.jpg';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
        return (  
            <div className="info_container">
                <Avatar className="info_image" src={pp2}/>
                <div className="info_content">
                    <div className="info_username">arun</div>
                    <div className="info_description">Description</div>
                </div>
            </div>
        );
    }
}
 
export default InfoSection;