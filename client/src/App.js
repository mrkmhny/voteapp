import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';
import {FieldGroup, FormGroup, FormControl, Radio, ControlLabel,
        Button, Navbar, Nav, NavItem, NavDropdown, 
        MenuItem, Glyphicon, Dropdown, Well, InputGroup} from 'react-bootstrap';
import $ from 'jquery';
import Sortable from 'sortablejs';
import update from 'immutability-helper';
import AppHeader from './components/AppHeader';
import Graph from './components/Graph'

//import mongoose from '../../node_modules/mongoose';
//import Data from '../../models.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [12, 19, 3, 5, 2, 3],

      newPoll:{
        title: 'test title',
        choices:[12, 'A', 3, 5, 2, 3]
      },

      polls:[
        {
          title:'test title',
          choices:[
            {
              name:'testchoice1'
            }
          ]

        }
        ]
      }
      this.handleInput = this.handleInput.bind(this);
    };
  
  handleInput = (e) => {
    this.setState(update(this.state,{
      newPoll:{title:{$set:e.target.value}}
    }))
  }

  
  
  componentDidMount(){
    /*
    $.ajax({
      url: "http://localhost:3000/api",
      context: document.body,
      success: function(result) {
        console.log(result);
      }
    });
*/

  }
  
  
  render() {
    return (
      <div className="App">

        <AppHeader />
        
        <br/>
        <div className="App-body">
          <div className="CreatePoll">
            <h2 style={{textAlign:'center'}}>Create a new poll by using the editor below!</h2>

            <div className="editor" style={{display:'flex', justifyContent:'space-around'}}>
              <PollCreator 
                data={this.state.data}
                newPoll={this.state.newPoll}
                handleInput={this.handleInput}
              />
              <div className="preview" style={{width:"20%",textAlign:'center'}}>
                <h3>Preview</h3>

                <h5>This is the title</h5>
                <Poll data={this.state.data}
                    newPoll={this.state.newPoll}
                    handleInput={this.state.handleInput}/>
              </div>
            </div>
          </div>
          
          
          
          
          <div className="Poll">
            <div style={{display:'none', justifyContent:'space-around'}}>
              <Poll data={this.state.data}
                    newPoll={this.state.newPoll}
                    handleInput={this.state.handleInput}/>
              <Graph data={this.state.data}/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

class PollCreator extends Component {
  
  componentDidMount(){
    var el = document.getElementById('choices-editor');
    var sortable = new Sortable(el,{
      animation:150,
      handle:".drag-handle"});
  }
  
  render(){
    return(
      <div className="inputs-left" style={{width:"60%"}}>
        <Well style={{background:'antiqueWhite'}}>
          <form>
            <FormGroup>
              <h3>Poll Editor</h3>
              <ControlLabel>Poll Text</ControlLabel>
              <FormControl
                componentClass="textarea"
                onChange={this.props.handleInput}
                value={this.props.newPoll.title}
                placeholder="Enter text"
              />
            </FormGroup>
            <ControlLabel>Choices</ControlLabel>
            <FormGroup id="choices-editor" style={{textAlign:'right'}}>
              <EditChoice />
              <EditChoice />
              <EditChoice />
              <Button style={{background:'whiteSmoke'}}>
                <Glyphicon glyph="plus" bsStyle="secondary" style={{color:'lightGreen'}}/>
              </Button>
            </FormGroup>
          </form>
          <FormGroup style={{textAlign:"center"}}>
            <Button bsStyle="primary" style={{marginRight:'15px'}}>Submit</Button>
            <Button bsStyle="default">Clear</Button>
          </FormGroup>
        </Well>
      </div>
    );
  }
}

class EditChoice extends Component {
  render(){
    return(
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            //value=this.state.value
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <InputGroup.Addon className="drag-handle">
            <Glyphicon glyph="menu-hamburger"/>
          </InputGroup.Addon>
          <InputGroup.Addon>
            <Glyphicon glyph="remove" style={{color:'red'}}/>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}


class Poll extends Component {
  render() {
    /*
    var data = {};
    data.radios = this.props.data.map(function(c,i,a){
      return <Radio key={i} name="choices">{c}</Radio>;
    });
    */
    var pollTitle = this.props.newPoll.title;
    var pollRadios = this.props.newPoll.choices.map(function(c,i,a){
      return <Radio key={i} name="choices">{c}</Radio>;
    });
    
    return (
      <div>
        <form action="/api" method="post">
          <ControlLabel>{pollTitle}</ControlLabel>
          {pollRadios}
          <Button type="submit" bsStyle="primary">Submit</Button>
        </form>
      </div>
    );
  }
}




export default App;
