import React, { Component } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import './CustomerList.styles.scss';

// const database = {
//     customers : 
//     [
//         {
//             name : 'Mikel Arteta',
//             phone : '9876543210',
//             email : 'arteta@gmail.com',
//             statecode : 'DL',
//             districtcode : '20',
//             alphanum1 : 'FA',
//             alphanum2 : '2020'
//         },
//         {
//             name : 'Pierre Emerick Aubameyang',
//             phone : '1414141414',
//             email : 'auba@gmail.com',
//             statecode : 'DL',
//             districtcode : '14',
//             alphanum1 : 'GB',
//             alphanum2 : '2222'
//         },
//         {
//             name : 'Alexandre Lacazette',
//             phone : '9999999999',
//             email : 'laca@gmail.com',
//             statecode : 'DL',
//             districtcode : '09',
//             alphanum1 : 'FR',
//             alphanum2 : '9015'
//         },
//         {
//             name : 'Gabriel Martinelli',
//             phone : '9246795665',
//             email : 'gabi@gmail.com',
//             statecode : 'DL',
//             districtcode : '19',
//             alphanum1 : 'BR',
//             alphanum2 : '6974'
//         },
//         {
//             name : 'John Mayer',
//             phone : '9874123560',
//             email : 'johono@gmail.com',
//             statecode : 'DL',
//             districtcode : '07',
//             alphanum1 : 'PO',
//             alphanum2 : '4918'
//         }
//     ]
// }

class CustomerList extends Component {
    constructor(){
        super();
        this.state = {
            customers : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/staff')
        .then(res => res.json())
        .then(data => {
            this.setState({
                customers : data
            })
        })
    }

    render(){
        return(
            <div className='customer-list'>
                {this.state.customers.map(customer => {
                    return <CustomerCard key={customer.alphanum2} customer={customer}/>
                })}
            </div>
        );
    }
}

export default CustomerList;
