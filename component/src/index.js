
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
	<div className="ui container comments">
	 <CommentDetail 
	   author="Sam"  
	   data="8:13AM" 
	   text="Lota astrat"
	   avatar={faker.image.avatar()}
	 />
	 <CommentDetail 
	   author="Alex" 
	   data="11:25AM" 
	   text="What is that?"
	   avatar={faker.image.avatar()}
	 />
	 <CommentDetail 
	   author="Reta" 
	   data="1:13PM" 
	   text="I have no idea" 
	   avatar={faker.image.avatar()}
	 />
	</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));
