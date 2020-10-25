//Import the React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create react component 
const App = () => {
  return (
    <div>
      'hello!'
    </div>
  )
}

//take react component and show it on screen. 
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)


