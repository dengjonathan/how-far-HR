import _ from 'underscore';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';

// Import sub-components
import Mountain from './Mountain.jsx';
import Hiker from './Hiker.jsx';
import Header from './Header.jsx';
import Skills from './Skills.jsx';
import ChooseAvatar from './ChooseAvatar.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

  constructor (props) {
    super(props);
    _.defaults(this.props, this.defaultProps);
    this.state = this.getState();
  }

  componentDidMount() {
    this.setState({currentDate: new Date()});
  }

  getState() {
    return this.props.store.getState();
  }

  setStoreState(type, update) {
    this.props.store.dispatch({type: type, update: update});
  }

  getProgress() {
    return Math.floor((this.state.currentDate - this.state.startDate) / (this.state.endDate -this.state.startDate) * 100);
  }

  changeAvatar(avatar) {
    this.setState({currentAvatar: avatar});
  }

  getHikerX() {

  }

  render() {
      return (
        <div className="container">
          <Header
            progress={this.state.currentDate ? this.getProgress() : 0}
            currentDate={this.state.currentDate ? this.state.currentDate : new Date()}
            endDate={this.state.endDate}
          />
        <div className="row">
          <div className="col-md-9">
          <Mountain
            image={path.join(this.props.imagePath , this.props.background)}
          />
          <Hiker
            image={path.join(this.props.imagePath , this.state.currentAvatar)}
            progress={this.getProgress()}
          />
          </div>

          <div className="col-md-3">
          <ChooseAvatar
            imgPath = {this.props.imagePath}
            avatars = {this.state.avatars}
            changeAvatar = {this.changeAvatar.bind(this)}
          />
          </div>
        </div>
        <Skills skills={this.state.concepts} />
        <div className="footer row">
          <Footer creator={this.props.creator} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  style: React.PropTypes.object,
};

App.defaultProps = {
  style: {height: '600px', width: '1000px'},
  imagePath: '/dist/assets/images',
  background: 'mountain.png',
  creator: 'Jon Deng'
};

export default App;