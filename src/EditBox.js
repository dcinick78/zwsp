import React from "react";
class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boxTitle:this.props.boxId+' Box',
            editState:this.props.editableX,
            postBody:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd'
        }
    }
    static getDerivedStateFromProps(props,state){    }
    updateTextBody = (e) => {
        this.setState({postBody: e.target.value});
    }
    editBoxBox = () => {
        this.setState(prevState=>({editState:!prevState.editState}));
      }
    render(){
        return (
            <div className="PostCard__id" >
                <h1>{this.state.boxTitle}</h1>
                {this.state.editState ? <textarea cols="10" onChange={(e)=>this.updateTextBody(e)} className="PostCard_area__id">{this.state.postBody}</textarea> : <p>{this.state.postBody}</p>}                
                <button className="PostCard_edit__id" onClick={()=>this.editBoxBox()}>Edit</button>
            </div>
        )
    }
}
export default TextBox;