import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state ={
    person:[
      {
        name:"a",
        count: Math.round(Math.random() * 30)
      },
      {
        name:"b",
        count: Math.round(Math.random() * 30)
      },
      {
        name:"c",
        count: Math.round(Math.random() * 30)
      }
    ],
    showPerson:false
  }

  handleFunciton = (newName) => {
     this.setState({person:[
      {
        name:newName,
        count: Math.round(Math.random() * 30)
      },
      {
        name:"b",
        count: Math.round(Math.random() * 20)
      },
      {
        name:"c",
        count: Math.round(Math.random() * 10)
      }
    ]})
  }
  nameChange=(event)=>{
    this.setState({person:[
      {
        name:"a",
        count: Math.round(Math.random() * 30)
      },
      {
        name:event.target.value,
        count: Math.round(Math.random() * 20)
      },
      {
        name:"c",
        count: Math.round(Math.random() * 10)
      }
    ]})
  }
  showOrHide=()=>{
    const status = this.state.showPerson;
    this.setState({showPerson:!status})
  }
  render() {
    const style = {
      border:'1px solid lightblue',
      backgroundColor: 'lightblue',
      color: '#fff',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button style={style} onClick={this.handleFunciton.bind(this,'aaa')}>更改状态值</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
        <Person 
          name={this.state.person[0].name} 
          count={this.state.person[0].count}
          myclick={this.handleFunciton.bind(this,'aaaaaaa')} 
          />  
         
        <Person 
          name={this.state.person[1].name} 
          count={this.state.person[1].count} 
          changed ={this.nameChange}
          />  

        <button onClick={this.showOrHide}>show</button>
        {
          this.state.showPerson?
          <div>  
            <Person 
              name={this.state.person[2].name} 
              count={this.state.person[2].count}>
            hahaha 
             </Person>      
           </div>: null
        }
      
      
      </div>    
    );
  }
}

export default App;
