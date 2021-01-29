import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Room() {
  const [isLit, setLit] = React.useState(true);
  const lightedness = isLit ? "lit" : "dark";
  return (
      <div className={`room ${lightedness}`} > 
      the room is {lightedness}   
      <br/>
      <button onClick={() => setLit(!isLit)}> Change </button>
    </div>
  );

  
}

ReactDOM.render(<Room />, document.querySelector("#root"));