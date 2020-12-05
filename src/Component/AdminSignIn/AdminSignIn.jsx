import React, { Component } from 'react';
import './AdminSignIn.styles.scss';

class AdminSignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (event) => {
        const {className,value} = event.target;

        this.setState({
            [className] : value
        })
    }

    handleSubmit = () => {
        const {email , password} = this.state;
        fetch('http://localhost:3000/adminsignin' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data === 'Admin authenticated'){
                //console.log(profile);    // Redirecting the user to the staff homepage
                this.props.history.push({
                    pathname : '/admin'
                })
            }else if(data === 'Admin does not exist'){
                alert('This Admin Account does not exist')
            }else{
                alert('Wrong Admin Credentials entered')
            }
        })
    }

    render(){
        return(
            <div className='signin-container'>
                <p className='signin-header'>Sign in as admin</p>
                <div className='form '>
                    <div className='form-content'>
                        <label htmlFor='username'>Email</label>
                        <input type='text' className='email' onChange = {this.handleChange}/>
                    </div>
                    <div className='form-content'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='password' onChange = {this.handleChange}/>
                    </div>
                    <button className='btn' type='submit' onClick={this.handleSubmit}>Login</button>
                    <div className='form-footer'>
                        <a href='/adminsignin' className='signin-admin'>Sign in as staff</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminSignIn;