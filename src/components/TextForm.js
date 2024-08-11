import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = ()=>{
    let newText ='';
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const[text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='black'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control" id="myBox"  placeholder={"Enter Text Here...."} value={text} onChange={handleOnChange} rows="6"></textarea>
      </div>
      <button className="btn btn-danger mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-secondary mx-3" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-warning mx-3" onClick={handleExtraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='black'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above box to preview"}</p>
    </div>
    </>
  )
}
