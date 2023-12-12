import React,{Component} from "react";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";

// import {FaTh} from "react-icons/fa";
// import { NavLink } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return(
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
}
export default HomePage;



// const HomePage = ({children}) =>{

//         const menuItem = [
//             {
//                 path:"/",
//                 name:"Home",
//                 icon:<FaTh/>
//             },
//             {
//                 path:"/search",
//                 name:"Search",
//                 icon:<FaTh/>
//             },
//             {
//                 path:"/explore",
//                 name:"Explore",
//                 icon:<FaTh/>
//             },
//         ];

//         return (  
//             <div className="container">
//                 <div className="sidebar">
//                     {/* <div className="top_section">

//                     </div> */}
//                     {
//                         menuItem.map((item, index)=>(
//                             <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                                 <div className="icon">{item.icon}</div>
//                                 <div className="link_text">{item.name}</div>
//                             </NavLink>
//                         ))
//                     }
//                 </div>
//                 <main>{children}</main>
//             </div>
//         );
//     }
