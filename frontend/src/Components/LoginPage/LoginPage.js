import React, {Component} from 'react';
import './LoginPage.css';
import Grid from '@mui/material/Grid';
import image_1 from '../../images/image_1.png';
import instagram_logo from '../../images/Logo-Instagram.png';
import fb from '../../images/fb_logo.jpg';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUP/SignUP'


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isLogin: true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin){
            this.setState({isLogin: false})
        }
        else(
            this.setState({isLogin: true})
        )
    }

    render() { 
        return (
            <div>
                <Grid container>
                    <Grid  item xs={3}>
                    </Grid>
                    <Grid  item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                                <img src={image_1} width="400px"/>
                            </div>
                            <div>
                                <div className='loginpage_rightComponent'>
                                    <img className='loginpage_logo' src={instagram_logo}/>
                                    <div className='loginpage_signin'>
                                        
                                        {
                                            this.state.isLogin ? <SignIn /> : <SignUp />
                                        }                                        

                                        <div className='loginpage_or'>
                                            <div className='login_dividor'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_dividor'></div>
                                        </div>

                                        <div className='login_fb'>
                                            <img src={fb} width="15px" style={{paddingRight:"10px"}}/>Log in with Facebook
                                        </div>
                                        <div className='login_forget'>Forget password?</div>
                                    </div>
                                </div>

                                <div className='loginpage_signupOption'>
                                    {
                                        this.state.isLogin ?
                                            <div className='loginpage_signin'>
                                                Don't have an account? <span onClick={this.changeLogin} style={{fontWeight:"bold", color:"#0395F6"}}>Sign up</span>
                                            </div> :
                                            <div className='loginpage_signup'>
                                                Have an account <span onClick={this.changeLogin} style={{fontWeight:"bold", color:"#0395F6"}}>Sign in</span>
                                            </div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid  item xs={3}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default LoginPage;