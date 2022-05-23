import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateQuote from './pages/CreateQuote'
import Home from './pages/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateQuote />} />
      </Routes>
    </div>
  )
}

export default App
