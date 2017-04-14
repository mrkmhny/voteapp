import React, { Component } from 'react';
import '../App.css';
import Chart from 'chart.js';
import {FieldGroup, FormGroup, FormControl, Radio, ControlLabel,
        Button, Navbar, Nav, NavItem, NavDropdown, 
        MenuItem, Glyphicon, Dropdown, Well, InputGroup} from 'react-bootstrap';
import Sortable from 'sortablejs';
import update from 'immutability-helper';

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

export default Graph;