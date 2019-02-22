import React, { Component } from 'react';
import { Route, BrowserRouter as Router ,withRouter, Switch} from 'react-router-dom';
import SaveBoard from "./SaveBoard.js";
import App from "../App";
import content from '../JSON/content.json';
import Board from "./Board.js";
import NewBoard from "./NewBoard.js";

class Common extends Component{
  constructor(){
    super();
    this.addPinToBoard=this.addPinToBoard.bind(this);
    this.createNewBoard=this.createNewBoard.bind(this);
    this.saveState=this.saveState.bind(this);
    this.getState=this.getState.bind(this);
    this.state={
      boards:[
        {
          boardId: 1,
          boardTitle: " Board 1",
          pinIds: [1,3]
        },
        {
          boardId: 2,
          boardTitle: " Board 2",
          pinIds: [2]
        }
      ],
      pins:[
        {
          pinId: 1,
          pinTitle: "Pin One",
          pinImage: "https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNeZgBTwzAr_V7Kjmx0JFsA6K63HKLovqzbX_NnJVE6qLV0vb5qqx6F83qrUrvBsaM1pwoPown6MyOf6la0_dqMcTVNK7jrp49TzlQgsIwVA_K3KD0ecASQ3YNt0SBk86b721SIkaH8u35UptmfLlNznbR2sdrz0qa1Smu4cOrmKg/",
          pinboardId: 1
        },
        {
          pinId: 2,
          pinTitle: "Pin Two",
          pinImage: "https://dj2gsrxiy8cwl.cloudfront.net/images/JPEGmini_mac_300.jpg",
          pinboardId: 2
        },
        {
          pinId: 3,
          pinTitle: "Pin Three",
          pinImage: "https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNeZgBTwzAr_V7Kjmx0JFsA6K63HKLovqzbX_NnJVE6qLV0vb5qqx6F83qrUrvBsaM1pwoPown6MyOf6la0_dqMcTVNK7jrp49TzlQgsIwVA_K3KD0ecASQ3YNt0SBk86b721SIkaH8u35UptmfLlNznbR2sdrz0qa1Smu4cOrmKg/",
          pinboardId: 1
        },
        {
          pinId: 4,
          pinTitle: "Pin Four",
          pinImage: "https://yourshot.nationalgeographic.com/u/fQYSUbVfts-T7odkrFJckdiFeHvab0GWOfzhj7tYdC0uglagsDNeZgBTwzAr_V7Kjmx0JFsA6K63HKLovqzbX_NnJVE6qLV0vb5qqx6F83qrUrvBsaM1pwoPown6MyOf6la0_dqMcTVNK7jrp49TzlQgsIwVA_K3KD0ecASQ3YNt0SBk86b721SIkaH8u35UptmfLlNznbR2sdrz0qa1Smu4cOrmKg/",
          pinboardId: -1
        },
        {
          pinId: 5,
          pinTitle: "Pin Five",
          pinImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png",
          pinboardId: -1
        }
      ]
    }
  }
  getState() {
    for(let key in this.state) {
      let value = window.localStorage.getItem(key);
      value = JSON.parse(value);
      this.setState({[key]: value});
    }
  }
  saveState(){
    alert("Saving state")
    for (let key in this.state){
      window.localStorage.setItem(key, JSON.stringify(this.state(key)));
    }
  }
  createNewBoard(board){
    let board_copy=this.state.boards;
    board_copy.push(board);
    this.setState({boards: board_copy});
  }
  addPinToBoard(bid,pid){
    let newB=this.state.boards;
    for(let i=0;i<newB.length;i++){
      if(newB[i].boardId == bid){
        newB[i].pinIds.push(pid);
      }
    }
    this.setState({boards: newB});
  }
  componentDidMount() {
    this.setState({pins: content.pins});
  }
  render(){
    return(
    <Router>
      <Switch>
        <Route path="/" exact strict component={()=> <App data={this.state.pins} />} />
        <Route path="/save" exact strict component={()=> <SaveBoard data={this.state} addPin={this.addPinToBoard}/>} />
        <Route path="/boards/:board_id" exact strict component={() => <Board data={this.state} />} />
        <Route path="/add" exact strict component={() => <NewBoard data={this.state} create={this.createNewBoard} />} />
      </Switch>
    </Router>
);
}
}

export default withRouter(Common);
