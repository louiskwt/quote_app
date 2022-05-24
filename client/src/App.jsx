import { Route, Routes } from 'react-router-dom'
import CreateQuote from './pages/CreateQuote'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { QuotesContextProvider } from './context/quotesContext'

function App() {

  return (
    <div className="App">
      <Header />
      <QuotesContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateQuote />} />
        </Routes>
      </QuotesContextProvider>
    </div>
  )
}

export default App
