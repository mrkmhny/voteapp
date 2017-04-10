import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';
import {FieldGroup, FormGroup, Radio, ControlLabel,
        Button} from 'react-bootstrap';
import fetch from 'fetch';
import $ from 'jquery';

//import mongoose from '../../node_modules/mongoose';
//import Data from '../../models.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [12, 19, 3, 5, 2, 3]
    };
  }
  
  componentDidMount(){
    
    $.ajax({
      url: "http://localhost:3000/api",
      context: document.body,
      success: function(result) {
        console.log(result);
      }
    });

  }
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <MultChoice data={this.state.data}/>
          <Graph data={this.state.data}/>
        </div>
      </div>
    );
  }
}

class MultChoice extends Component {
  render() {
    
    var data = {};
    data.radios = this.props.data.map(function(c,i,a){
      return <Radio key={i} name="choices">{c}</Radio>;
    });
  
    
    return (
      <div>
        <FormGroup>
          <ControlLabel>Choose one</ControlLabel>
          {data.radios}
          <Button bsStyle="primary">Submit</Button>
        </FormGroup>
      </div>
    );
  }
}


class Graph extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            data: this.props.data,
            label: '# of Votes',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
    });
  }
  
  render(){
    return (
      <div style={{width:"600px", height:"300px"}}>
        <canvas id="myChart" style={{/*width:"100px", height:"50px"*/}}></canvas>
      </div>
    );
  }
}

export default App;
