import React from 'react';
import './App.css';
import EditBox from "./EditBox.js";

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        data: [
          {name:"First",visible:true,id:0,text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd"},
          {name:"Second",visible:true,id:1,text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd"},
          {name:"Third",visible:true,id:2,text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd"},
          {name:"Fourth",visible:true,id:3,text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd"},
          {name:"Fifth",visible:true,id:4,text:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd"},
          {name:"Alex the hidden",visible:false,id:5,text:"iam alex the HIDDEN box"}
        ],
        editState: true
      }
  }
  editBox = () => {
    this.setState({ editState:!this.state.editState });
  }
  updateText = (index,newText) => {
    var nB = this.state.data.map((item)=>{
      return item.id === index ? item.text=newText : item
    });
    this.setState({ postBody: nB });
  }
  showAll = () => {
    var nB = this.state.data;
    nB.map((item)=>{
      return !item.visible ? item.visible = true : item      
    });
    this.setState({ data: nB });
  }
  hideBox = (nr) => {
    var nA = this.state.data;
    nA[nr].visible = false;
    this.setState({
      data: nA
    });
  }
  render() {
    return (
      <div className={"App"}>
      {this.state.data.map(item => (
        (this.state.data[item.id].visible ? 
          <EditBox key={item.id} boxid={item.id} visible={this.state.data[item.id].visible} editable={this.state.editState}
          name={this.state.data[item.id].name} text={this.state.data[item.id].text}
          deleteBox={this.hideBox} editBox={this.editBox} saveText={this.updateText} /> : null ) 
      ))}
         <button onClick={()=>this.showAll()}>show all</button>
      </div>
    );
  }
}
export default App;
