import React from 'react';
import './StaffCard.styles.scss';

const CustomerCard = ({staffmember}) => {
    const {name,phone,email} = staffmember;
    return(
        <div className='card-container'>
            <h3 className='staff-name'>{name}</h3>
            <p className='phone'>{phone}</p>
            <p className='email'>{email}</p>
        </div>
    );
}

export default CustomerCard;