import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () =>{
      var text= document.getElementById("tx1");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
}
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
 
  const [text, setText] = useState("Type Here");
  return (
    <>
      <div>
        <div className="mb-3"  >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="tx1"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>   
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{text.split(" ").length * 0.008} Minutes to read.</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
