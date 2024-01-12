import { useState } from 'react'
import './App.css'
import './Box.css'
import ReactMarkdown from "react-markdown";
import {text} from "./text"


function App() {

  const [markDown, setMarkDown] = useState(text)

  
  return (
    <>
      <br />
      <div className='back'>
        <h1 style={{textAlign: 'center'}}>Markdown Previewer
          <span>by Gael Rivera</span>
        </h1>
        <div className="boxes-container">
          <textarea name="" id="editor" value={markDown} onChange={(e) => setMarkDown(e.target.value)}></textarea>

          <div id="preview" >
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
     
      
    </>
  )
}

export default App
