import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here');
  

  const handleUpClick = () =>{
    console.log("Uppercase was Clicked")
    let n = text.toUpperCase();
    setText (n)
    props.showAlert("Converted to Uppercase", "warning")
  }

  const handleLowClick = () => {
    console.log("Lowercase was Clicked")
    let m = text.toLowerCase();
    setText(m)
    props.showAlert("Converted to Lowercase", "warning")
  }

  const handleOnChange = (event) => {
    console.log("Change On")
    setText (event.target.value)
  }
  const handleExtraSpaces = () => {
    console.log("Extra Space removed")
    let cleanedText = text.replace(/\s+/g, ' ').trim();
    setText(cleanedText);
    props.showAlert("Removed Extra Spaces", "warning")
  }

  const handleClear = () => {
    console.log("Text Cleared")
    setText('')
    props.showAlert("Text Cleared", "warning")
  }

  const handleLoremIpsum = () => {
    console.log("text generated")
    let generatedtxt = handleGenerate();
    setText(text + " " + generatedtxt);
    props.showAlert("Text Generated", "warning")
  }

  const handleGenerate = () => {
    return('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  }
  
  return (
    <>
<div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>

  <h1>{props.heading}</h1>

  <textarea className="form-control" value={text} onChange={handleOnChange} id="forBox" rows="15" style={{backgroundColor: props.mode === 'dark'?'#04003e':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>

  <button className="btn btn-outline-info mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-outline-info mx-1 " onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-outline-info mx-1 " onClick={handleExtraSpaces} >Remove Extra Space</button>
  <button className="btn btn-outline-info mx-1 " onClick={handleClear} >Clear Text</button>
  <button className="btn btn-outline-info mx-1 " onClick={handleLoremIpsum} >LoremIpsum</button>
  <button className='btn btn'></button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{(0.008 * text.split(" ").length)} minutes to read this article</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
  )
}

