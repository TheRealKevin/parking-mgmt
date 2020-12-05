import React, { Component } from 'react';
import './StaffList.styles.scss';
import StaffCard from '../StaffCard/StaffCard';

// const database = {
//     staff : 
//     [
//         {
//             name : 'Alex Turner',
//             phone : '5465321328',
//             password : 'cookies',
//             email : 'alex@gmail.com',
//             joined : new Date()
//             // statecode : 'DL',
//             // districtcode : '89',
//             // alphanum1 : 'SF',
//             // alphanum2 : '0505'
//         },
//         {
//             name : 'Chris Martin',
//             phone : '4546891683',
//             password : 'pizza',
//             email : 'chris@gmail.com',
//             joined : new Date()
//             // statecode : 'DL',
//             // districtcode : '22',
//             // alphanum1 : 'GQ',
//             // alphanum2 : '5584'
//         },
//         {
//             name : 'Abel tesfaye',
//             phone : '4888488848',
//             password : 'mocha',
//             email : 'weeknd@gmail.com',
//             joined : new Date()
//             // statecode : 'DL',
//             // districtcode : '69',
//             // alphanum1 : 'CN',
//             // alphanum2 : '9795'
//         },
//         {
//             name : 'Brad Lamar',
//             phone : '7651398712',
//             password : 'granola',
//             email : 'radbrad@gmail.com',
//             joined : new Date()
//             // statecode : 'DL',
//             // districtcode : '12',
//             // alphanum1 : 'US',
//             // alphanum2 : '1585'
//         },
//         {
//             name : 'Peter Parker',
//             phone : '8756123659',
//             password : 'pancakes',
//             email : 'spidey@gmail.com',
//             joined : new Date()
//             // statecode : 'DL',
//             // districtcode : '27',
//             // alphanum1 : 'NY',
//             // alphanum2 : '9723'
//         }
//     ]
// }

class StaffList extends Component {
    constructor(){
        super();

        this.state = {
            staff : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/admin')
        .then(res => res.json())
        .then(data => {
            this.setState({
                staff : data
            })
        })
    }

    render(){
        return(
            <div className='list-container'>
                <p className='list-header'>List of Staff Members</p>
                <div className='staff-list'>
                    {this.state.staff.map(staffmember => {
                        return <StaffCard key={staffmember.email} staffmember={staffmember}/>
                    })}
                </div>
            </div>
        );
    }
}

export default StaffList;