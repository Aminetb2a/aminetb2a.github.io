import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Qualification from './components/qualification/Qualification'
import Skills from './components/skills/Skills'
import Integration from './components/integration/Integration'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Qualification/>
      <Skills/>
      <Integration/>
      <Contact/>
    </main>
    </>
  )
}

export default App;
