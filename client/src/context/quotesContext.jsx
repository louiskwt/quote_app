import { useState, createContext, useMemo } from "react";

const QuotesContext = createContext();

const QuotesContextProvider = ({ children }) => {
  // all quotes state
  const [quotes, setQuotes] = useState(null);
  // selected quote state
  const [selectedQuote, setSelectedQuote] = useState(null);

  // values to be exported
  const value = {
    quotes,
    setQuotes,
    selectedQuote,
    setSelectedQuote,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export { QuotesContext, QuotesContextProvider };
