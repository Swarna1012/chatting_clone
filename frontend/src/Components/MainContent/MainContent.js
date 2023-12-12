import React,{Component} from "react";
import './MainContent.css';
import { Grid } from "@mui/material";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import Suggestions from "../Suggestions/Suggestions";
import InfoSection from "../InfoSection/InfoSection";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return (  
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <StatusBar/>
                        <MainPage/>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection/>
                        <Suggestions/>
                    </Grid>
                    <Grid item xs={2}>aaa</Grid>
                </Grid>
            </div>
        );
    }
}
 
export default MainContent;