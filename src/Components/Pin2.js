import React, { Component } from 'react';
import "../CSS/Pin2.css";
import { BrowserRouter ,withRouter} from 'react-router-dom';


class Pin2 extends Component {
  render() {
    return (
            <BrowserRouter>
                <div className="pin">
                  <button type="button" className="button" onClick={this.props.change}>{this.props.action}</button>
                  <img src={this.props.URL} alt="not present" className="image" />
                  <p>{this.props.title}</p>
                </div>
          </BrowserRouter>
    );
  }
}

export default withRouter(Pin2);
