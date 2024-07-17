import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ContactUsHeader from './components/ContactUs/ContactUsHeader'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

function App() {

  return (
    <div>
        <Navbar/>
        <ContactUsHeader/>
        <ContactForm/>
    </div>
  )
}

export default App
