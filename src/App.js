import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Alex', age: 41},
      {name: 'Sabine', age: 43},
      {name: 'Julius', age: 14}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 41},
        {name: 'Sabine', age: 43},
        {name: 'Julius', age: 14}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Alex', age: 41},
        {name: event.target.value, age: 17},
        {name: 'Julius', age: 14}
      ]
    });    
  }

  render() {

    const style = {
      backroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    // Use the bind syntax!
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button
          style={style} 
          onClick={() => this.switchNameHandler('Alexander')}>Switch Name</button>
        <Person 
          click={this.switchNameHandler.bind(this, 'Alex!')}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My hobby: CrossFit</Person>
        <Person 
          changed={this.nameChangedHandler}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Working?'));
  }

}

export default App;
