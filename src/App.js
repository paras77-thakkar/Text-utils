import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode,setMode]=useState("light mode");
  const handleMode=()=>{
    if(mode==="light mode"){
      setMode("dark mode")
      document.body.style.background="grey"
    }
    else{
      setMode("light mode")
      document.body.style.background="white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutTexts="About" mode={mode} handleMode={handleMode} />
      <div className="container">
       <TextForm heading="Enter text to analyze" />
       {/*<About/>*/} 
      </div>
    </>
  );
}

export default App;
