import React, { Component } from 'react';
import "../CSS/SaveBoard.css";
import { BrowserRouter ,withRouter} from 'react-router-dom';

class SaveBoard extends Component {
  constructor(){
    super();
    this.move = this.move.bind(this);
    this.displayBoard = this.displayBoard.bind(this);
    this.addBoard=this.addBoard.bind(this);
    }
  move(id){
    let url = "/boards/"+id;
    this.props.addPin(id,this.props.location.state.pin_Id);
    this.props.history.push(url);
  }
  displayBoard(){
    let boards=this.props.data.boards;
    return boards.map((item) => { return(
      <div>
        <button type="button" className="buttons" key={item.boardId} onClick={()=>this.move(item.boardId)}>{item.boardTitle}</button>
      </div>
    )});
  }
  addBoard(){
    this.props.history.push({
      pathname: '/add',
      state: {pin_id: this.props.location.state.pin_Id}
  });
}

  render() {
    let pins = this.props.data.pins;

    let imageURL="";
    for(let i=0;i<pins.length;i++){
      //alert(pins[i].pinId+" "+ this.props.location.state.pin_Id);
      if(pins[i].pinId === this.props.location.state.pin_Id){
        imageURL=pins[i].pinImage;
        break;
      }
    }
    return (
      <BrowserRouter>
        <div className="main">
          <div className="img">
            <img src={imageURL} alt="not present" />
          </div>
          <h1>Select a board</h1>
          <div className="horizontalButtons">
            {this.displayBoard()}
          </div>
          <div className="newBoard">
            <button type="button" className="add" onClick={this.addBoard}>New Board</button>
            <button type="button" className="buttons" onClick={() =>this.props.history.push('/')}>Cancel</button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(SaveBoard);
