import React, { Component } from 'react';
import "../CSS/NewBoard.css";
import { BrowserRouter ,withRouter} from 'react-router-dom';

class NewBoard extends Component {
  constructor(props){
    super(props);
    this.createBoard=this.createBoard.bind(this);
    this.state={
      boardname:""
    };
  }

  createBoard(){
    let boards=this.props.data.boards;
    let max_id=-1;
    for(let i=0;i<boards.length;i++){
      if(boards[i].boardId>max_id){
        max_id=boards[i].boardId;
      }
    }
    //alert(max_id+1);
    let newboard= {boardId: (max_id+1), boardTitle: this.state.boardname, pinIds: [this.props.location.state.pin_id]};
    this.props.create(newboard);
    let newurl="/boards/"+(max_id+1);
    this.props.history.push(newurl);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="main2">
          <div className="boardName">
          <h1> Enter name for new board</h1>
          <input type="text" name="boardname" value={this.state.boardname} className="text" onChange={(text) => this.setState({boardname: text.target.value})} />
          </div>
          <div>
            <button type="button" className="addPin" onClick={this.createBoard}>Add pin to board</button>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(NewBoard);
