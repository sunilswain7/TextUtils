import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert ({
      msg : message,
      type : type
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0038';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
    
  }
  return (
    <>
    <Navbar title="Text Utils" about="About TextUtils" mode ={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
