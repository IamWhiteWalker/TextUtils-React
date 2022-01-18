import React,{useState} from "react";

const TextForm = (props)=>{

    const[text,setText] = useState("Enter Text Here")

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked !!")
        let newText = text.toUpperCase()
        setText(newText)
        props.handleAlert("Converted to UpperCase !!","success")
    }

    const handleLowerClick =()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.handleAlert("Converted to LowerCase !!","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const copyTextHandler = ()=>{
        const text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)

        props.handleAlert("Text has been copied to Clipboard !!","success")
    }

    const removeSpacesHandler = ()=>{
        const newText = text.split(/[  ]+/)
        setText(newText.join(" "))

        props.handleAlert("Wide Spaces have been removed from the Text !!","success")
    }

    

    return(
        <div style={props.mode === 'light' ? {'color' : '#042743'}: {'color' : 'white'}}>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example Textarea</label>
                    <textarea className="form-control" style={{backgroundColor : props.mode ==='light'? 'white' : 'grey',
                    color: props.mode ==='light'? '#042743' : 'white'}}
                        value={text} onChange={handleOnChange} id="myBox" rows="3">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={copyTextHandler}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeSpacesHandler}>Remove Wide Spaces From Text</button>
            </div>

            <div className="container my-3" style={props.mode === 'light' ? {'color' : '#042743'}: {'color' : 'white'}}>
                <p>{text.split(' ').length} words and {text.length} characters </p>
                <p>{0.008 * text.split(' ').length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default TextForm