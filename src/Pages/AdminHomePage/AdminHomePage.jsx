import React, { Component } from 'react';
import './AdminHomePage.scss';
import CustomerList from '../../Component/CustomerList/CustomerList';
import StaffList from '../../Component/StaffList/StaffList';

class AdminHomePage extends Component {
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            rate : '',
            levels : '',
            rows : ''
        } 
    }

    handleChange = (event) => {
        this.setState({
            rate : event.target.value
        })
        console.log(this.state.rate)
    }

    render() {
        const {handleRateChange} = this.props;
        const {rate} = this.state;
        return(
            <div>
                <h3>Welcome Admin</h3>
                <h2>
                    Customers
                </h2>
                <CustomerList/>
                <h2>
                    Staff Members
                </h2>
                <StaffList/>
            </div>
        );
    }
}

export default AdminHomePage;