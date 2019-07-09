import React from "react";
class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boxTitle:this.props.boxId+' Box',
            postBody:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectodsasd'
        }
    }
    updateTextBody = (e) => {
        this.setState({postBody: e.target.value});
    }
    render(){
        if (this.props.editableX) {
            return(
                <div className="PostCard__id" >
                <h1>{this.state.boxTitle}</h1>
                <textarea cols="10" onChange={(e)=>this.updateTextBody(e)} className="PostCard_area__id" value={this.state.postBody}></textarea>
                <button className="PostCard_edit__id" onClick={()=>this.props.editBox()}>Edit</button>
                </div>
            )
        } else {
            return(
                <div className="PostCard__id" >
                <h1>{this.state.boxTitle}</h1>
                <p>{this.state.postBody}</p>
                <button className="PostCard_edit__id" onClick={()=>this.props.editBox()}>Edit</button>
                </div>
            )
        }
    }
}
export default TextBox;