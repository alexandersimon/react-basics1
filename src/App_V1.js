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

  switchNameHandler = () => {
    // console.log("was clicked")
    // DON'T DO THIS: this.state.persons[0].name = "Alexander";
    this.setState({
      persons: [
        {name: 'Alexander', age: 41},
        {name: 'Sabine', age: 43},
        {name: 'Julius', age: 14}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby: CrossFit</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Working?'));
  }

}

export default App;
