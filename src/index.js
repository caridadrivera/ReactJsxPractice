//Import the React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './approvalCard';
const App = () => {


  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail author="Jane"
         avatar={faker.image.avatar()} 
         timeAgo="today at 4pm" 
         content="wow great" /> 
      </ApprovalCard>

      <ApprovalCard> 
        <CommentDetail author="Sam" 
        avatar={faker.image.avatar()} 
        timeAgo="today at 5pm" 
        content="great" /> 
      </ApprovalCard>

      <ApprovalCard> 
        <CommentDetail author="John" 
        avatar={faker.image.avatar()}
         timeAgo="today at 6pm" 
         content="uff" /> 
      </ApprovalCard>
    
    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#root'))