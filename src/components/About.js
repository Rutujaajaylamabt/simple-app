import React, {useState} from 'react'

export default function About(props) {

{/* const[myStyle, setMyStyle]=useState({
    color:'black',
    backgroundColor:'white'
    
  })
    */}
let myStyle={
  color: props.mode === 'dark'?'white':'#042743',
  backgroundColor:props.mode=== 'dark'?'rgb(36 74 104)':'white',
}

  
  return (
    <div className="container">
      <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743',}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button"   style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze Your text </strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        This wibsite gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time required to read the text.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use </strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        it will render as a green success alert instead of always yellow.
        Bootstrap supports: success, danger, warning, info, primary, etc.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed"  style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style={myStyle}>
        This word counter software works in any web browser such as chome, firebase, internet, safari, opera.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
