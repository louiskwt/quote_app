import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'

const QuoteList = ({quotes}) => {
  return (
    (quotes.map((quote) => (
        <QuoteCard quote={quote} key={quote.id} />
    )))
  )
}

export default QuoteList