import React, {useState} from 'react'




export default function TextForm(props) {

  const handleUpClick=()=>{
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
    const handleLoClick= ()=>{
      //console.log("LowerCase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
  const handleOnChange=(event)=>{
    //console.log("Handle change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here');
  
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <label for="mybox" class="form-label">Example Text area </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} valid="mybox" rows="18"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="contanier my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length}  Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    </>


  )
  
  }