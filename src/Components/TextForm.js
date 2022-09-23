import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "Success")
    }
    const handleCopy = () => {
        let copyTxt = document.getElementById("myBox")
        copyTxt.select();
        navigator.clipboard.writeText(copyTxt.value)
        props.showAlert("Your text is copied to clipboard ", "Success")
    }
    const handleSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extraa spaces is removed ", "Success")
    }
   
    const handleClearText = () => {
        setText('')
        props.showAlert("your text has been Clear ", "Success")
    }
     
  

    return (
        <div>
            <div className="mb-3 container  my-5" >
                <label htmlFor="myBox" className="form-label">
                    <h5 > Try Text-Utils : Text Analyzer, word and character Counter,copy Text and Remove extra spaces !</h5>
                </label>
                <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#59515e', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div className='container'>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>UpperCase</button>
                <button  disabled={text.length===0} type="button" className="btn btn-success mx-2 my-1" onClick={handleLowClick}>LowerCase</button>
                <button  disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-1" onClick={handleCopy}>copy Text</button>
                <button  disabled={text.length===0} type="button" className="btn btn-success mx-2 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
               
                <button  disabled={text.length===0} type="button" className="btn btn-dark mx-2" onClick={handleClearText}>Clear Text</button>


            </div>
            <div className='container my-3' >
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
            </div>
        </div>
    )
}
