import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import PrivateRoute from '../src/component/routing/PrivateRoute'
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Register from './component/auth/Register'
import Login from './component/auth/Login'
import './App.css';
import ContactState from './Context/Contact/ContactState'
import Navbar from './component/Layout/Navbar';
import Alerts from './component/Layout/Alerts'
import AuthState from './Context/auth/AuthState';
import AlertState from './Context/Alert/AlertState';
import setAuthToken  from './util/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const  App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
            <Switch>
            <PrivateRoute exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            </Switch>
            </div>
          </Fragment>
        </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
    
};

export default App;
