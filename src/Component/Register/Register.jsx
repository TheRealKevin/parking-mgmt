import React, { Component } from 'react';
import './Register.styles.scss';

class Register extends Component {
    constructor(){
        super();

        this.state = {
            name : '',
            dob : '',
            email : '',
            password : ''
            // sex : ''
        }
    }

    handleChange = (event) => {
        const {className,value} = event.target;

        this.setState({
            [className] : value
        })
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register',{
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                name : this.state.name,
                email : this.state.email,
                password : this.state.password,
                // dob : this.state.dob
            })
        })
            .then(res => res.json())
            .then(user => {
                if(user){
                    //console.log(user)
                    this.props.history.push({       // Redirecting the user to the staff homepage
                        pathname : '/staff',
                        state : {
                            name : user.name,
                            email : user.email
                        }
                    })
                }
            })
    }

    render(){
        return(
            <div className='register-container'>
                <p className='register-header'>Register</p>
                <div className='form ba'>
                    <div className='form-content'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='name' onChange={this.handleChange}/>
                    </div>
                    <div className='form-content'>
                        <label htmlFor='dob'>Date of birth</label>
                        <input type='date' className='dob' onChange={this.handleChange}/>
                    </div>
                    <div className='form-content'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='email' onChange={this.handleChange}/>
                    </div>
                    {/* <div className='form-content ba'>
                        <p>Please select your sex:</p>
                        <div className='sex-group ba'>
                            <input type='radio' className='sex-choice' value='Male'/>
                            <label htmlFor='male'>Male</label>
                            <input type='radio' className='sex-choice' value='Female'/>
                            <label htmlFor='female'>Female</label>
                        </div>
                    </div> */}
                    <div className='form-content'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='password' onChange={this.handleChange}/>
                    </div>
                    <button className='btn' type='submit' onClick={this.onSubmitRegister}>Register</button>
                </div>
            </div>
        );
    }
}

export default Register;