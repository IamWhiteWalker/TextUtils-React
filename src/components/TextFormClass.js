import React from 'react'

class TextFormClass extends React.Component{

    state={
        text : "Enter Text Here"
    }

    handleUpClick = ()=>{
        console.log("Uppercase was clicked !!")
        this.setState({
            text : "You've clicked on handleUpClick"
        })
    }

    handleOnChange = (event)=>{
        this.setState({
            text : event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example Textarea</label>
                <textarea className="form-control" 
                    value={this.state.text} onChange={(event)=>this.handleOnChange(event)} id="myBox" rows="3">
                </textarea>
            </div>
            <button className="btn btn-primary" onClick={this.handleUpClick}>Convert to Uppercase</button>
            </div>
        )
    }
}

export default TextFormClass