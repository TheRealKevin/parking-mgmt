import React , {Component} from 'react';
import './StaffHomePage.styles.scss';
import CustomerList from '../../Component/CustomerList/CustomerList';

class StaffHomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            staff : {
                
            }
        }
    }

    // loadStaff = (props) => {
    //     this.setState({staff : {
    //         name : props.location.state.name,
    //         email : props.location.state.email
    //     }})
    // }

    render() {
        {console.log(this.props)}
        return(
            <div>
                <h1>Welcome {this.props.location.state}</h1>
                <h2>List of customers </h2>
                <CustomerList/>
            </div>
        );
    }
}

export default StaffHomePage;