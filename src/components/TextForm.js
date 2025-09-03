import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () =>
    {
        //console.log("uppercase was clicked");
        let newText=text.toUpperCase();  
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
        
    }
    const handleLoClick = () =>
    {
        //console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase!", "success");
        
    }
   
    const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
} 

const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard! ✅");
  };



     const handleOnChange = (event) =>
    {
        //console.log("On Change");
       setText(event.target.value);
       
    }

    const [text,setText]=useState("");
    // text="new text"    wrong way
    //setText("new Text");  right way
     const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
   <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>
  Copy Text
</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <p>{sentenceCount} Sentences</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
