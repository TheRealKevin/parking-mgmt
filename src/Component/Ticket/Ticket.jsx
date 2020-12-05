import React, { Component } from 'react';
import './Ticket.styles.scss';

class Ticket extends Component {
    constructor(props){
        super(props);

        this.state = {
            row : '',
            levelnum : ''
        }
    }

    componentDidMount() {
        const minlevel = 1;
        const maxlevel = 5;
        const min = 1;
        const max = 10;
        let levelnum = Math.floor(Math.random()*(maxlevel - minlevel) + minlevel);
        let row = Math.floor(Math.random()*(max - min) + min);
        this.setState({
            levelnum : levelnum,
            row : row
        })
        
        console.log(`The level is ${levelnum} and row is ${row}`);
    }

    render(){
        const {name,phone,statecode} = this.props;
        return(
            <div>
                <h1>YOOOOOOO</h1>
                <h1>{`This is ${name}`}</h1>
                <h1>{`This is ${phone}`}</h1>
                <h1>{`This is ${statecode}`}</h1>
            </div>
        );
    }
}

export default Ticket;