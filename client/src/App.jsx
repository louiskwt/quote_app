import { Route, Routes } from "react-router-dom";
import CreateQuote from "./pages/MainPage/CreateQuote";
import Home from "./pages/MainPage/Home";
import Header from "./components/Header/Header";
import { QuotesContextProvider } from "./context/quotesContext";
import QuoteDetails from "./pages/MainPage/QuoteDetails";
import { FormsContextProvider } from "./context/formsContext";
import "./App.css";
import UpdateQuote from "./pages/MainPage/UpdateQuote";
import { UserContextProvider } from "./context/userContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <QuotesContextProvider>
          <FormsContextProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/:id" element={<QuoteDetails />} />
              <Route exact path="/update/:id" element={<UpdateQuote />} />
              <Route exact path="/create" element={<CreateQuote />} />
            </Routes>
            <ToastContainer data-test="toast" />
          </FormsContextProvider>
        </QuotesContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
