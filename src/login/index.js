import React from 'react';
import GoogleLogin from 'react-google-login'; 
import {LoginStyled} from './styles';

const {REACT_APP_GOOGLE_SIGNIN_KEY} = process.env;
 
class Login extends React.Component {

    responseGoogle = (response) => {
        //console.log(response)
        const {history} = this.props
        if (!response.error) {
            history.push('/home')
        }
      }

    render() {
        return <LoginStyled>
            <GoogleLogin
                clientId={REACT_APP_GOOGLE_SIGNIN_KEY}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </LoginStyled>
    }
}

export default Login