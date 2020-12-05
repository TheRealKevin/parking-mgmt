import React, { Component } from 'react';
import './Settings.styles.scss';

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rows : '',
            levels : '',
            rate : ''
        }
    }

    handleChange = (event) => {
        const {className,value} = event.target;

        this.setState({
            [className] : value
        })
    }

    render() {
        {console.log(this.props)}
        return(
            <div className='settings-container'>
                <h2 className='settings-header'>EDIT SETTINGS</h2>
                <div className='settings-options'>
                    <div className='settings-option'>
                        <label htmlFor='levels'>Levels</label>
                        <input type='text' className='levels' onChange={this.handleChange}/>
                    </div>
                    <div className='settings-option'>
                        <label htmlFor='rows'>Rows</label>
                        <input type='text' className='rows' onChange={this.handleChange}/>
                    </div> 
                    <div className='settings-option'>
                        <label htmlFor='rate'>Rate</label>
                        <input type='text' className='rate' onChange={this.handleChange}/>
                    </div>  
                    <div className='settings-option'>
                        <button className='btn' type='submit' onClick={() => this.props.handleSettingsUpdate({rate : this.state.rate,levels : this.state.levels,rows : this.state.rows})}>SUBMIT</button>
                    </div>         
                </div>
            </div>
        );
    }
}

export default Settings;