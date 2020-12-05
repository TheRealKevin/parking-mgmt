// import React from 'react';
// import './CustomerCard.styles.scss';

// const CustomerCard = ({customer}) => {
//     const {name,phone,email} = customer;
//     return(
//         <div className='card-container'>
//             <h3 className='customer-name'>{name}</h3>
//             <p className='phone'>{phone}</p>
//             <p className='email'>{email}</p>
//         </div>
//     );
// }

// export default CustomerCard;

import React,{Component} from 'react';
import './CustomerCard.styles.scss';
import removeIcon from './remove-button.png';

class CustomerCard extends Component {
    constructor(props){
        super(props)

        //console.log(props.customer);

        this.state = {
            name : props.customer.name,
            email : props.customer.email,
            phone : props.customer.phone
        }
    }

    // How to make a DELETE req using fetch from the server
    removeCustomer = (_id) => {
        console.log('Item is being removed and http://localhost:3000/staff/' + _id)
        return fetch('http://localhost:3000/staff/' + _id , {
            method : 'delete'
        })
        .then(res => res.json())
    }

    render(){
        const {name , email , phone} = this.state;
        return(
            <div>
                <div className='card-container'>
                    <div className='customer-name-div'>
                        <h3 className='customer-name'>{name}</h3>
                    </div>
                    <div className='phone-div'>
                        <p className='phone'>{phone}</p>
                    </div>
                    <div className='email-div'>
                        <p className='email'>{email}</p>
                    </div>
                    {/* <div className="del-wrap" onClick={(e)=>{
                        e.stopPropagation();
                        e.preventDefault();
                        this.removeCustomer(this.props.customer._id)
                    }}>
                        <img src={removeIcon}/>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default CustomerCard;