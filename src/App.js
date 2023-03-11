import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Qualification from './components/qualification/Qualification'
import Skills from './components/skills/Skills'
import Integration from './components/integration/Integration'

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
    </main>
    </>
  )
}

export default App;
