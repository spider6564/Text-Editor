
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('secondary');

const toggleMode = ()=>{
  if(mode === 'secondary'){
    setMode('black');
    document.body.style.backgroundColor = '#08073d';
  }
  else{
    setMode('secondary');
    document.body.style.backgroundColor = 'white';
  }
}
  return(
    <>
    <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-4">
      <TextForm heading="Text Editor" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
    
}

export default App;
