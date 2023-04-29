import React from 'react'
import './App.css'
import Router from './routes/Router'
import Modal from './components/Modal/Modal'
import { GlobalState } from './contexts/GlobalState'

function App() {

  return (
    <div className="App">
      <GlobalState>
        <Modal />
        <Router/>
      </GlobalState>
    </div>
  )
}

export default App
