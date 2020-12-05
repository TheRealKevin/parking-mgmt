import React, { Component } from 'react';
import './Navbar.styles.scss';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            pathname : ''
        }
    }

    render(){
        return(
            <div className='navbar ba'>
            {   
                this.props.location.pathname !== '/admin' && this.props.location.pathname !== '/staff' && this.props.location.pathname !== '/settings'
                ?
                    <div className='options'>
                        {
                            this.props.location.pathname !== '/' 
                            ? 
                            <div className='option'>
                                <Link to='/'>
                                    BOOK SPOT
                                </Link>
                            </div>
                            :
                            null
                        }
                        {
                            this.props.location.pathname !== '/staffsignin' 
                            ? 
                            <div className='option'>
                                <Link to='/staffsignin'>
                                    STAFF
                                </Link>
                            </div>
                            :
                            null
                        }
                        {
                            this.props.location.pathname !== '/adminsignin' 
                            ? 
                            <div className='option'>
                                <Link to='/adminsignin'>
                                    ADMIN
                                </Link>
                            </div>
                            :
                            null
                        }
                        {
                            this.props.location.pathname !== '/pay' 
                            ? 
                            <div className='option'>
                                <Link to='/pay'>
                                    PAY
                                </Link>
                            </div>
                            :
                            null
                        }
                    </div>
                :
                <div className='logout-option'>
                    <div className='logout-options'>
                        <Link to='/settings'>
                            EDIT
                        </Link>
                    </div>
                    <div className='logout-options'>
                        <Link to='/'>
                            LOGOUT
                        </Link>
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default Navbar;