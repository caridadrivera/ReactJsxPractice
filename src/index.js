//Import the React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {


  return (
    <div className="ui container comments">
      <CommentDetail author="Jane" /> 
      <CommentDetail author="Sam" /> 
      <CommentDetail author="John" /> 

    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#root'))