import React, { useState } from 'react'
import Alert from './Components/Alert'
import Footer from './Components/Footer'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import TextForm from './Components/TextForm'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'



export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is successfully enable", 'success');
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is successfully enable", 'success');
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
       
        <Routes>
          <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About mode={mode} />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>









    </div>
  )
}
