import React from 'react';
import ReactDOM from 'react-dom';
import Mountain from './Mountain.jsx';
import Hiker from './Hiker.jsx';
import _ from 'underscore';

class App extends React.Component {

  constructor (props) {
    super(props);
    _.defaults(this.props, this.defaultProps);
    console.log(this.props);
    this.state = {
      hiker: 'app/assets/images/guy-hiker.png',
      progress: 0.5
    }
  }

  render() {
    console.log(this.props.style);
      return (
        <div>Hello World
          <Mountain image='app/assets/images/mountain.png' style={this.props.style}/>
          <Hiker image={this.state.hiker} progress={this.state.progress} />
        </div>
    );
  }
}

App.propTypes = {
  style: React.PropTypes.object,
};

App.defaultProps = {
  style: {height: '600px', width: '1000px'}
};

ReactDOM.render(<App/>, document.getElementById('container'));