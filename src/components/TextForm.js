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
        <h1 className='mb-2'>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
   <button  disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse text</button>
    <button disabled={text.length ===0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
  Copy Text
</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      {/* use filter to avoid counting extra spaces as words*/}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <p>{sentenceCount} Sentences</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
