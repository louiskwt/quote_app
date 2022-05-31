import { Typography } from '@mui/material'
import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'

const QuoteList = ({quotes}) => {
  return (
    (quotes.length > 0 ? quotes.map((quote) => (
        <QuoteCard quote={quote} key={quote.id} />
    )) : <Typography variant='h5' textAlign="center" fontWeight='bold' >
      暫時沒有報價單...
    </Typography>)
  )
}

export default QuoteList