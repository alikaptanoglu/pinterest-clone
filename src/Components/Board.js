import React, { Component } from 'react';
import "../CSS/Board.css";
import { BrowserRouter ,withRouter} from 'react-router-dom';
import Pin2 from './Pin2';

class Board extends Component {
  constructor(props){
    super(props);
    this.displayPin=this.displayPin.bind(this);
  }
  displayPin(){
    let boards=this.props.data.boards;
    let selected={};
    for(let i=0;i<boards.length;i++){
      if(boards[i].boardId == this.props.match.params.board_id){
        //alert(boards[i].boardTitle);
        selected=boards[i];
        break;
      }
    }
    let pinList=[];
    let pinids=selected.pinIds;
    let pins = this.props.data.pins;
    for(let i=0;i<pins.length;i++){
      for(let j=0;j<pinids.length;j++){
        if(pinids[j] == pins[i].pinId){
        //alert(boards[i].boardTitle);
          pinList.push(pins[i]);
      }
    }
  }

    return pinList.map((item) => { return(
      <div>
        <Pin2 URL={item.pinImage} action="Remove" title={item.pinTitle} key={item.pinId} change={()=> alert('Yet to be implemented')} />
      </div>
    )});
  }
  render() {
    //alert(this.props.match.params.board_id);
    let boards = this.props.data.boards;
    let title="";
    for(let i=0;i<boards.length;i++){
      //alert(boards[i].boardId);
      if(boards[i].boardId == this.props.match.params.board_id){
        //alert(boards[i].boardTitle);
        title=boards[i].boardTitle;
        break;
      }
    }

    return (
      <BrowserRouter>
        <div className="main3">
          <h1>{title}</h1>
          <div>
            {this.displayPin()}
          </div>
          <div>
            <button type="button" className="browse" onClick={() => this.props.history.push("/")}>Browse More</button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(Board);
