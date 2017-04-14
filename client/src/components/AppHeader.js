import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {FieldGroup, FormGroup, FormControl, Radio, ControlLabel,
        Button, Navbar, Nav, NavItem, NavDropdown, 
        MenuItem, Glyphicon, Dropdown, Well, InputGroup} from 'react-bootstrap';
import Sortable from 'sortablejs';
import update from 'immutability-helper';

class AppHeader extends Component {
  render(){
    return(
      <div className="App-header">
          
          <Nav pullRight bsStyle="pills" style={{display:'flex'}}>
                <a href="#" style={{color:'white', margin:'10px'}}>Create Poll</a>
                <a href="#" style={{color:'white', margin:'10px'}}>Sign up</a>
                <a href="#" style={{color:'white', margin:'10px'}}>Log in</a>
          </Nav>
          <img src={logo} className="App-logo" alt="logo" />

          <div id="header-content" style={{display:'flex',flexDirection:'column',marginLeft:'100px'}}>
            <div id="header-text" style={{marginBottom:'25px'}}>
              <h1 style={{marginBottom:'-15px'}}>AlternaVoter</h1>
              <h3>A simple 'instant-runoff' polling machine!</h3>
            </div>
            <div id='header-buttons' style={{display:'flex'}}>

              <Button bsStyle="primary" style={{marginRight:'10px'}}>Get Started</Button>
              <Button bsStyle="default">Learn More</Button>
              
            </div>
          </div>
        {/*
          end of app header
          eventually, what we'll do is put this in it's own AppHeader component,
          so that we can:
            - dynamically update Sign up / login in to say the user's name
            - i think that's it
        */}

      </div>

      
    );
  }
}

export default AppHeader;