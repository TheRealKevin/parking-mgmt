import React, { Component } from 'react';
import './Pay.styles.scss';

class Pay extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            email : '',
            date : '',
            name : '',
            rate : ''
        }
    }

    handleChange = (event) => {
        const {className, value} = event.target;
        this.setState({
            [className] : value
        })
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            rate : this.props.rate
        })
    }

    handleSubmit = async () => {
        const settings = {              // Using async await as it takes time to find the user in the database
            method : 'POST',            // So we're doing this instead
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "email" : this.state.email
            })
        };
        try{
            const fetchResponse = await fetch('http://localhost:3000/pay',settings);
            const data = await fetchResponse.json();
            this.setState({
                date : data.date,
                name : data.name
            })
            alert(`Mr/Mrs ${this.state.name} Please pay Rs.${this.state.rate} for the service`)
            return data;
        }catch(err){
            return err;
        }
    }

    render(){
        return(
            <div className='pay'>
                <h2>PAYMENT</h2>
                <div className='pay-container ba'>
                    <div className='pay-option'>
                        <label htmlFor='email' className='email-label'>Enter your email</label>
                        <input type='text' required className='email' onChange = {this.handleChange}/>
                    </div>
                    <div className='pay-option'>
                        <input type='submit' required className='submit-btn' onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pay;