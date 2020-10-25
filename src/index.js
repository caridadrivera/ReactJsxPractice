//Import the React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create react component 
const App = () => {
  return (
    <div>
      <label>Enter name:</label>
      <input for="name"></input>
      <button id="name" style={{backgroundColor: 'blue'}}>Submit</button>
    </div>
  )
}

//take react component and show it on screen. 
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


