import React, { useState } from 'react';


const TextForm = (props) => {
    const handleUpclick=()=>{
        // console.log("upper case was clicked"+text);
        let newText=text.toUpperCase();
        // setText("yout have clicked on uppercase button");
        setText(newText);
        
    }
    const handleLowclick=()=>{
        // console.log("lower case was clicked"+text);
        let newText=text.toLowerCase();
        // setText("yout have clicked on uppercase button");
        setText(newText);
        
    }
    const handleOnChange=(event)=>{
        console.log("onChange was clicked");
        setText(event.target.value); 
    }
    const [text, setText] = useState('');
    //text="newtext" - wrong way to change text
    //  setText("yayyynayyy");
  return (
    <>
    <div>
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"/>
        </div>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleLowclick}>Convert to Lowercase</button>

        </form>
    </div>
    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
