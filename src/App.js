import React, { Component } from 'react';
import './App.css';
import Pin2 from './Components/Pin2.js';
import { BrowserRouter ,withRouter} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderPins = this.renderPins.bind(this);
      this.display = this.display.bind(this);
  }
  renderPins(){
    return this.props.data.map((item) => { return(
      <div>
        <Pin2 URL={item.pinImage} title={item.pinTitle} key={item.pinId} action="Save" change={()=> this.display(item.pinId)} />
      </div>
    )});
  }

  display(id) {
    this.props.history.push({
      pathname: '/save',
      state: {pin_Id: id}
    });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="pin-container1">
      {this.renderPins()}
      </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
