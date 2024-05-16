import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Counter from './components/Counter'
import Loader from './components/Loader'
import img1 from './assets/img1.jpg'
import Card from './components/Card'
import Form from './components/Form'
import Tooltip2 from './components/Tooltip2'
import CheckPara from './components/CheckPara'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/card" element={<Card title='Card Component' text='Card 1' image={img1} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/tooltip" element={<Tooltip2 />} />
        <Route path="/checkpara" element={<CheckPara />} />
      </Routes>
    </Router>
  )
}

export default App
