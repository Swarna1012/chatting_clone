import React,{Component} from "react";
import './StatusBar.css'
import { Avatar } from "@mui/material";
import statusimg from "../../images/pp1.jpg"

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            statusList: []
        }
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            },
            {
                "username":"swarna",
                "imageURL": "../../images/pp1.jpg"
            }
        ]
        this.setState({statusList: data});
    }
    
    render() { 
        return (  
            <div>
                <div className="statusbar_title">Stories</div>
                <div className="statusbar_container">
                    {
                        this.state.statusList.map((item,index) =>(
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_text">{item.username}</div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        );
    }
}
 
export default StatusBar;