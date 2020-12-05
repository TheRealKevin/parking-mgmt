import React,{Component} from 'react';
import './SignIn.styles.scss';

class SignIn extends Component {
    constructor(props){
        super();

        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
    }

    onEmailChange = (event) => {
        this.setState({
            signInEmail : event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            signInPassword : event.target.value
        })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/staffsignin',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.text === 'Staff Member authenticated'){
                    this.props.history.push({
                        pathname : '/staff',
                        state : data.name
                    })
                }else if(data.text === 'Staff Memeber does not exist'){
                    alert('No such staff member registered')
                }else{
                    alert('Wrong credentials entered')
                }
            })
    }

    render(){
        return(
            <div className='signin-container'>
                <p className='signin-header'>Sign in as staff</p>
                <div className='form'>
                <div className='form-content'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='email' onChange={this.onEmailChange}/>
                    </div>
                    <div className='form-content'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='password' onChange={this.onPasswordChange}/>
                    </div>
                    <button className='btn' type='submit' onClick={this.onSubmitSignIn}>Login</button>
                    <div className='form-footer'>
                        <a href='/adminsignin' className='signin-admin'>Sign in as admin</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;