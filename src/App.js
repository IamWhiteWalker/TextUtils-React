import React, { useState } from 'react'
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import TextFormClass from './components/TextFormClass';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }


  const toggleModeHandler = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      handleAlert("Dark mode has been Enabled !!", "success")
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      handleAlert("Light mode has been Enabled !!", "success")
    }
  }

  /* exact Keyword should be used for Routes Route because,
      if /users renders Component 1 and
      if /users/home renders component 2
      then React will only Render Component 1
  */

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About Us" toggle={toggleModeHandler} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}/>

            <Route exact path="/"  
              element={}/>*/}
                <TextForm handleAlert={handleAlert} heading="Enter the Text to Analyze" mode={mode} />

            {//<TextFormClass heading="Enter the Text to Analyze"/>
            }
          {/* </Routes> </BrowserRouter>*/}
        </div>
      
    </>
  );
}

export default App;
