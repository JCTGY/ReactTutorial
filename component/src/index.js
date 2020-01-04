
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
	<div className="ui container comments">
	 <ApprovalCard>
	  <div>
	   <h4>Warning</h4>
	   Are you sure you want to do this?
	  </div>
	 </ApprovalCard>
	 <ApprovalCard>
	  <CommentDetail 
	    author="Sam"  
	    data="8:13AM" 
	    text="Lota astrat"
	    avatar={faker.image.avatar()}
	  />
	 </ApprovalCard>
	 <ApprovalCard>
	  <CommentDetail 
	    author="Alex" 
	    data="11:25AM" 
	    text="What is that?"
	    avatar={faker.image.avatar()}
	  />
	 </ApprovalCard>
	 <ApprovalCard>
	  <CommentDetail 
	    author="Reta" 
	    data="1:13PM" 
	    text="I have no idea" 
	    avatar={faker.image.avatar()}
	  />
	 </ApprovalCard>
	</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
