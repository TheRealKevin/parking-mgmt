import React,{Component} from 'react';
import './Booking.styles.scss';
import {Route,Link} from 'react-router-dom';
import Ticket from '../Ticket/Ticket';

// const database = {
//     customers : [
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
//             alphanum1 : 'Gb',
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
//             name : 'Gabriel MArtinelli',
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

var parkingspots = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

class Booking extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : '',
            phone : '',
            email : '',
            statecode : '',
            districtcode : '',
            alphanum1 : '',
            alphanum2 : '',
            level : '',
            row : '',
            rows : '',
            levels : '',
            rate : ''
        }
    }

    componentDidMount() {
        const {levels,rows,rate} = this.props;
        this.setState({
            rows : rows,
            levels : levels,
            rate : rate
        })
    }

    //pattern='[A-Z]{2}-?[0-9]{2}-[A-Z]{2}-?[0-9]{4}$'
 
    handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3000', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify({
                name : this.state.name,
                phone : this.state.phone,
                email : this.state.email,
                statecode : this.state.statecode,
                districtcode : this.state.districtcode,
                alphanum1 : this.state.alphanum1,
                alphanum2 : this.state.alphanum2,
                level : this.state.level,
                row : this.state.row
            })
        })
        .then(res => res.json());
        const minlevel = 1;
        const minrow = 1;
        const {levels , rows} = this.state;
        console.log(`The maxlevel is ${levels} and maxrow is ${rows}`)
        let level = Math.floor(Math.random()*(levels - minlevel) + minlevel);
        let row = Math.floor(Math.random()*(rows - minrow) + minrow);
        alert(`Your level is ${level} and row is ${row}`)
    }

    handleChange = event => {
        const {className,value} = event.target;

        this.setState({
            [className] : value
        })
    }

    // TO BE DONE
    // How to get (time of arrival - departure) in ticketing component 

    render(){
        return(
            <div>
                <Route path='/ticket' render={(props) => <Ticket name={this.state.name} phone={this.state.phone} statecode = {this.state.statecode} districtcode={this.state.districtcode} alphanum1 = {this.state.alphanum1} alphanum2 = {this.state.alphanum2} {...props}/>}/>
                {<Route path='/ticket' exact component={Ticket}/>}
                <form onSubmit={this.handleSubmit}>
                    <div className='booking-container'>
                        <p className='booking-header'>Customer Parking Spot Booking</p>
                        <div className='form'>
                            <div className='form-content'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' className='name' required onChange={this.handleChange} required/>
                            </div>
                            <div className='form-content'>
                                <label htmlFor='phone'>Phone Number</label>
                                <input type='tel' className='phone' required minLength='10' maxLength='10' onChange={this.handleChange} required/>
                            </div>
                            <div className='form-content'>
                                <label htmlFor='email'>E-mail</label>
                                <input type='email' className='email' required onChange={this.handleChange}/>
                            </div>
                            <div className='form-content'>
                                <label htmlFor='carno'>Car Number</label>
                                {/* <input type='tel' className='carno' pattern='([A-Z]{2}-?[0-9]{2}-[A-Z]{2}-?[0-9]{4})$' minLength='10' maxLength='10' required onChange={this.handleChange}/> */}
                                <div className='carno-inputs'>
                                    <input className='statecode' minLength='2' maxLength='2' pattern='[A-Z]{2}' required onChange={this.handleChange}/>
                                    <input className='districtcode' minLength='2' maxLength='2' pattern='[0-9]{2}' required onChange={this.handleChange}/>
                                    <input className='alphanum1' minLength='2' maxLength='2' pattern='[A-Z]{2}' required onChange={this.handleChange}/>
                                    <input className='alphanum2' minLength='4' maxLength='4' pattern='[0-9]{4}' required onChange={this.handleChange}/>
                                </div>
                            </div>
                            <input className='btn' type='submit' value='Submit' onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Booking;