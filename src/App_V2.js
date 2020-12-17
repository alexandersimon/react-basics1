import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Alex', age: 41},
      {name: 'Sabine', age: 43},
      {name: 'Julius', age: 14}
    ],
    otherState: 'Some other state'
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Alexander', age: 41},
        {name: 'Sabine', age: 43},
        {name: 'Julius', age: 14}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobby: CrossFit</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Working?'));

}

export default App;
