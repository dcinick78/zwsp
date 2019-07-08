import React from 'react';
import './App.css';
import EditBox from "./EditBox.js";

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        data: [

        ],
        editState: false
      }
  }
  render() {
    return (
      <div className="App">
      <EditBox />
      </div>
    );
  }
}
export default App;
