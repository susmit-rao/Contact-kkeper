import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Register from './component/auth/Register'
import './App.css';
import ContactState from './Context/Contact/ContactState'
import Navbar from './component/Layout/Navbar';
import AuthState from './Context/auth/AuthState';

const  App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/register' component={Register}/>
            </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
    
};

export default App;
