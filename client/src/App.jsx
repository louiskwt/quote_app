import { Route, Routes } from 'react-router-dom'
import CreateQuote from './pages/CreateQuote'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { QuotesContextProvider } from './context/quotesContext'
import QuoteDetails from './pages/QuoteDetails'
import { FormsContextProvider } from './context/formsContext'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <QuotesContextProvider>
        <FormsContextProvider>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/:id' element={<QuoteDetails />} />
            <Route exact path='/create' element={<CreateQuote />} />
          </Routes>
        </FormsContextProvider>
      </QuotesContextProvider>
    </div>
  )
}

export default App
