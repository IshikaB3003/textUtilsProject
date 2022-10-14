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
    const handleClearclick=()=>{
        // console.log("lower case was clicked"+text);
        let newText='';
        // setText("yout have clicked on uppercase button");
        setText(newText);
        
    }

    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        console.log("onChange was clicked");
        setText(event.target.value); 
    }
    const [text, setText] = useState('');
    //text="newtext" - wrong way to change text
    //  setText("yayyynayyy"); - correct way
  return (
    <>
    <div>
      <form>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'#001c5f':'white' , color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"/>
        </div>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleLowclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleClearclick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-3" type="button" onClick={handleSpaces}>Remove Extra Spaces</button>


        </form>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Type something to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm
