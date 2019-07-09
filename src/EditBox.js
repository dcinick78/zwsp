import React from "react";
class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            boxid:this.props.boxid,
            boxTitle:this.props.name+' Box',
            postBody:this.props.text
        }
    }
    testie = (e) =>{
        var index = this.state.boxid;
        this.setState({postBody:e.target.value});
        this.props.saveText(index,this.state.postBody);
    }
    render(){
        if (this.props.visible) {
            if (this.props.editable) {
                return(
                    <div className="Editbox" >
                    <h1>{this.state.boxTitle}</h1>
                    <textarea cols="10" onChange={(e)=>this.testie(e)} className="PostCard_area__id" value={this.state.postBody}></textarea>
                    <button className="PostCard_edit__id" onClick={()=>this.props.editBox()}>Edit</button>
                    <button className="PostCard_edit__id" onClick={()=>this.props.deleteBox(this.state.boxid)}>delete this box</button>
                    </div>
                )
            } else {
                return(
                    <div className="Editbox" >
                    <h1>{this.state.boxTitle}</h1>
                    <p>{this.state.postBody}</p>
                    <button className="PostCard_edit__id" onClick={()=>this.props.editBox()}>Edit</button>
                    <button className="PostCard_edit__id" onClick={()=>this.props.deleteBox(this.state.boxid)}>delete this box</button>
                    </div>
                )
            }
        }else { 
            return (null)
        }
    }
}
export default TextBox;