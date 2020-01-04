
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    // The only time we do dirct assignment
    // To this.state
    this.state = { lat: null, errorMessage: '' };
  }
  // when Component update
  componentDidUpdate() {
    console.log("component di update");
  }
  // Did it one time
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // always use setState
      position => this.setState( {lat: position.coords.latitude }),
      err => this.setState( { errorMessage: err.message })
    );
  }

  renderContent() {
   
   if (this.state.errorMessage && !this.state.lat) {
	   return <div>Error: { this.state.errorMessage} </div>;
   }
   else if (!this.state.errorMessage && this.state.lat) {
	   return <SeasonDisplay lat={this.state.lat}> </SeasonDisplay>;
   }
  return <Spinner message='Please allow location' />
  };

  render() {
	  return <div className="border red"> {this.renderContent()} </div>;
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
