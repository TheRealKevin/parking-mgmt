import { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import AdminSignIn from './Component/AdminSignIn/AdminSignIn';
import Register from './Component/Register/Register';
import Booking from './Component/Booking/Booking';
import StaffHomePage from './Pages/StaffHomePage/StaffHomePage';
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage';
import Navbar from './Component/Navbar/Navbar';
import Pay from './Component/Pay/Pay';
import Settings from './Pages/Settings/Settings';

class App extends Component {

  constructor(){
      super()

      this.state = {
        rate : '',
        levels : '',
        rows : ''
      }
  }

  handleSettingsUpdate = settings => {
    this.setState({
      rate : settings.rate,
      levels : settings.levels,
      rows : settings.rows
    })
    alert('Settings Updated')
  }

  render(){
    return (
      <div className="App">
        <Route path='/' component={Navbar}/>
        <Route path='/' render={(props) => (<Booking {...props} rate={this.state.rate} levels={this.state.levels} rows={this.state.rows}/>)} exact/>
        <Route path='/staffsignin' component={SignIn}/>
        <Route path='/adminsignin' component={AdminSignIn}/>
        <Route path='/staff' component={StaffHomePage} exact/>
        <Route path='/admin' component={AdminHomePage}/>
        <Route path='/register' component={Register} exact/>
        <Route path='/pay' render={(props) => (<Pay {...props} rate={this.state.rate}/>)} exact/>
        <Route path='/settings' render={(props) => (<Settings {...props} handleSettingsUpdate={this.handleSettingsUpdate}/>)}/>
      </div>
    );
  }
}

export default App;
