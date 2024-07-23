import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0038';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
    <Navbar title="Text Utils" about="About TextUtils" mode ={mode} toggleMode={toggleMode}/>
    <Alert Alert='This is alert'/>
    <div className="container">
    <TextForm heading="Enter the Text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
