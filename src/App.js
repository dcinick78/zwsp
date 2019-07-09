import React from 'react';
import './App.css';
import EditBox from "./EditBox.js";

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        data: [
          {name:"First"},
          {name:"Second"},
          {name:"Third"},
          {name:"Fourth"},
          {name:"Fifth"},
        ],
        editState: true
      }
  }
  editBox = () => {
    this.setState(prevState=>({editState:!prevState.editState}));
  }
  render() {
    return (
      <div className="App">
      <EditBox boxId={this.state.data[0].name} editableX={this.state.editState} editBox={this.editBox}/>
      <EditBox boxId={this.state.data[1].name} editableX={this.state.editState} editBox={this.editBox} />
      <EditBox boxId={this.state.data[2].name} editableX={this.state.editState} editBox={this.editBox} />
      <EditBox boxId={this.state.data[3].name} editableX={this.state.editState} editBox={this.editBox} />
      <EditBox boxId={this.state.data[4].name} editableX={this.state.editState} editBox={this.editBox} />
      </div>
    );
  }
}
export default App;
